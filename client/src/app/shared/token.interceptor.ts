import {inject, Injectable} from '@angular/core';
import {
	HTTP_INTERCEPTORS,
	HttpErrorResponse,
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
	HttpResponse
} from '@angular/common/http';
import { BehaviorSubject, catchError, filter, map, Observable, switchMap, take, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token.service';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
	private router = inject(Router)
	private isRefreshing = false;
	private refreshTokenSubject = new BehaviorSubject<any>(null);
	private authService = inject(AuthService);
	private tokenService = inject(TokenStorageService);
	private loadingService = inject(LoadingService);
	
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {	
		this.loadingService.setLoading(true, request.url);
		if(this.tokenService.getToken()) {
			request = this.addToken(request, this.tokenService.getToken()!);
		}

		return next.handle(request).pipe(
			catchError((error) => {
				this.loadingService.setLoading(false, request.url);
				if (error instanceof HttpErrorResponse && error.status == 401) {
					return this.handle401Error(request, next);
				} 
				else if (error instanceof HttpErrorResponse && error.status == 498) {
					this.tokenService.signOut();
					this.router.navigateByUrl('/auth/login');
					return throwError(() => new Error(error as any));
				} 
				else {
					return throwError(() => error);
				}
			})
		)
		.pipe(map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
			if (evt instanceof HttpResponse) {
				this.loadingService.setLoading(false, request.url);
			}
			return evt;
		}));
	}

	private addToken(request: HttpRequest<any>, token: string) {
		return request.clone({
			setHeaders: {
				Authorization: `Bearer ${token}`,
			}
		})
	}

	private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
		if(!this.isRefreshing) {
			this.isRefreshing = true;
			this.refreshTokenSubject.next(null);

			return this.authService.refreshToken().pipe(
				switchMap((token: any) => {
					this.isRefreshing = false;
					this.refreshTokenSubject.next(token.accessToken);
					return next.handle(this.addToken(request, token.accessToken))
				})
			)
		} else {
			this.isRefreshing = false;
			return this.refreshTokenSubject.pipe(
				filter((token) => token != null),
				take(1),
				switchMap((jwt) => {
					return next.handle(this.addToken(request, jwt));
				})
			)
		}
	}
}

export const tokenInterceptor = {
	provide: HTTP_INTERCEPTORS,
	useClass: TokenInterceptor,
	multi: true
};
