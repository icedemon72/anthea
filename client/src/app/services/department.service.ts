import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TokenStorageService } from './token.service';
import { Observable } from 'rxjs';
import { API_URL } from '../shared/apiUrl';
import { Department } from '../models/department';

@Injectable({
	providedIn: 'root'
})
export class DepartmentService {
	constructor(private http: HttpClient) { }

	private storageService = inject(TokenStorageService);
	private urls = {
		store: `${API_URL}/departments`,
	}
	
	private options = {
		headers: new HttpHeaders({ 'Authorization': `Bearer ${this.storageService.getToken()}` })
	}

	store(name: string, type: string): Observable<any> {
		return this.http.post(this.urls.store,
			{ name, type },
			{ ...this.options, observe: 'response' }
		);
	}

	index(): Observable<any> {
		return this.http.get(this.urls.store,
			{ ...this.options, observe: 'response' },
		);
	}

	show(id: number): Observable<any> {
		return this.http.get(`${this.urls.store}/${id}`, 
			{ ...this.options, observe: 'response' }
		);
	}

	update(id: number, name: string, type: string): Observable<any> {
		return this.http.patch(`${this.urls.store}/${id}`,
			{ name, type },
			{ ...this.options, observe: 'response' }
		);
	}

	delete(id: number): Observable<any> {
		return this.http.delete(`${this.urls.store}/${id}`, 
			{ ...this.options, observe: 'response' }
		);
	}

}
