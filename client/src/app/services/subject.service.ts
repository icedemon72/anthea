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
			{ name, semester, departmentId },
			{  ...this.options, observe: 'response' }
		);
	}

	index(): Observable<any> {
		return this.http.get(this.urls.store, 
			{ ...this.options, observe: 'response' }
		);
	}

	show(id: string): Observable<any> {
		return this.http.get(`${this.urls.store}/${id}`, 
			{ observe: 'response' }
		);
	}

	update(id: string, name: string, semester: number, departmentId: number): Observable<any> {
		return this.http.patch(`${this.urls.store}/${id}`, 
			{ name, semester, departmentId },
			{ ...this.options, observe: 'response' }
		);
	}

	delete(id: string): Observable<any> {
		return this.http.delete(`${this.urls.store}/${id}`, 
			{ ...this.options, observe: 'response' }
		);
	}
}
