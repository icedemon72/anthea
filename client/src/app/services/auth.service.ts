import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, catchError, map, Observable, of, tap, throwError} from "rxjs";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { User, UserResp } from '../models/user';
import { TokenStorageService } from './token.service';
import { API_URL } from '../shared/apiUrl';

@Injectable({
	providedIn: 'root'
})

export class AuthService {
	private apiUrl = API_URL;

	private urls = {
		register: `${this.apiUrl}/register`,
		login: `${this.apiUrl}/login`,
		refresh: `${this.apiUrl}/refresh`,
		logout: `${this.apiUrl}/logout`,
		protected: `${this.apiUrl}/protected`,
	}

	private storageService = inject(TokenStorageService);

	private user: BehaviorSubject<any | null> = new BehaviorSubject(null);
	user$: Observable<User | null> = this.user.asObservable();


	constructor(private http: HttpClient) {}


	login(email: string, password: string): Observable<UserResp> {
		return this.http.post(this.urls.login, {
			email,
			password
		}).pipe(map((resp: UserResp) => {
			if(resp.user) {
				this.storageService.setUser(resp.user);
			}

			if(resp.accessToken) {
					this.storageService.setToken(resp.accessToken);
			}

			if(resp.refreshToken) {
					this.storageService.setRefresh(resp.refreshToken);
			}

				this.user.next(resp.user);
				return resp;
			}));
	}


	register(name: string, email: string, password: string): Observable<HttpResponse<any>> {
		return this.http.post(this.urls.register, { name, email, password }, { observe: 'response' });
	}

	refreshToken() {
		return this.http.post(this.urls.refresh, {
			refreshToken : this.storageService.getRefresh()
		}).pipe(
			tap((token: any) => { this.storageService.setToken(token.accessToken)})
		)
	}

	logout() {
		const accessToken = this.storageService.getToken();
		const refreshToken = this.storageService.getRefresh();

		const options = {
			headers: new HttpHeaders({'Authorization': `Bearer ${accessToken}`})
		}
		
		return this.http.post(this.urls.logout, {
			...options,
			refreshToken,
			observe: 'response',
		}).pipe(
			tap(() => {
				this.storageService.signOut();
				this.user.next(null);
			}),
			catchError((error) => {
				this.storageService.signOut();
				this.user.next(null);
				return throwError(() => new Error(error));
			})
		)
	}

	protected() {
		const options = {
			headers: new HttpHeaders({'Authorization': `Bearer ${this.storageService.getToken()}`})
		}
		return this.http.post(this.urls.protected, {...options, refreshToken: this.storageService.getRefresh()});
	}
}
