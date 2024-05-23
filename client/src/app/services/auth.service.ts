import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";

@Injectable({
	providedIn: 'root'
})

export class AuthService {

	private apiUrl = "http://localhost:1337";

	private urls = {
		register: `${this.apiUrl}/register`,
		login: `${this.apiUrl}/login`,
	}


	constructor(private http: HttpClient) {

	}


	login(email: string, password: string): Observable<any> {
		return this.http.post(this.urls.login, {
			email,
			password
		}).pipe(map((resp: any) => {
			console.log(resp);
			return resp;
		}));
	}

	register(name: string, email: string, password: string): Observable<HttpResponse<any>> {
		return this.http.post(this.urls.register, { name, email, password }, { observe: 'response' });
	}

}
