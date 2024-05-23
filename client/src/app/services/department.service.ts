import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TokenStorageService } from './token.service';
import { Observable } from 'rxjs';
import { API_URL } from '../shared/apiUrl';

@Injectable({
	providedIn: 'root'
})
export class DepartmentService {
	constructor(private http: HttpClient) { }

	private apiUrl = API_URL;
	private storageService = inject(TokenStorageService);
	private urls = {
		store: `${this.apiUrl}/departments`
	}
	private options = {
		headers: new HttpHeaders({ 'Authorization': `Bearer ${this.storageService.getToken()}` })
	}

	store(name: string, type: string): Observable<any> {
		return this.http.post(this.urls.store,
			{ name, type, ...this.options },
			{ observe: 'response' }
		);
	}

	index(): Observable<any> {
		return this.http.get(this.urls.store,
			{ ...this.options, observe: 'response' },
		);
	}
}
