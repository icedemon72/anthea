import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable, tap} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import { User, UserResp } from '../models/user';
import { TokenStorageService } from './token.service';

@Injectable({
	providedIn: 'root'
})

export class AuthService {
	private apiUrl = "http://localhost:1337";

	private urls = {
		register: `${this.apiUrl}/register`,
		login: `${this.apiUrl}/login`,
		refresh: `${this.apiUrl}/refresh`,
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
			refresh_token : this.storageService.getRefresh()
		}).pipe(
			tap((token: any) => { this.storageService.setToken(token.access_token)})
		)
	}
}
