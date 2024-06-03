import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from './token.service';
import { API_URL } from '../shared/apiUrl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
	constructor(private http: HttpClient) { }

	private apiUrl = API_URL;
	private storageService = inject(TokenStorageService);

	private urls = {
		profile: `${this.apiUrl}/users/profile`,
		professors: `${this.apiUrl}/users/professors`
	}

	private options = {
		headers: new HttpHeaders({ 'Authorization': `Bearer ${this.storageService.getToken()}` })
	}

	profile(): Observable<any> {
		return this.http.get(this.urls.profile, 
			{ ...this.options, observe: 'response' }
		);
	}

	professorIndex(): Observable<any> {
		return this.http.get(this.urls.professors, 
			{ ...this.options, observe: 'response' }
		);
	}
}
