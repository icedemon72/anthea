import { inject, Injectable } from '@angular/core';
import { API_URL } from '../shared/apiUrl';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token.service';

@Injectable({
	providedIn: 'root'
})
export class SubjectService {
	constructor(private http: HttpClient) { }

	private apiUrl = API_URL;
	private storageService = inject(TokenStorageService);
	
	private options = {
		headers: new HttpHeaders({ 'Authorization': `Bearer ${this.storageService.getToken()}` })
	}

	private urls = {
		store: `${this.apiUrl}/subjects`
	}

	store(name: string, semester: number, departmentId: number): Observable<any> {
		return this.http.post(this.urls.store,
			{ name, semester, departmentId, ...this.options },
			{ observe: 'response' }
		);
	}

	index(): Observable<any> {
		return this.http.get(this.urls.store, 
			{ ...this.options, observe: 'response' }
		);
	}
}
