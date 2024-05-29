import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '../shared/apiUrl';
import { TokenStorageService } from './token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {
	constructor(private http: HttpClient) { }

	private apiUrl = API_URL;
	private storageService = inject(TokenStorageService);

	private urls = {
		store: `${this.apiUrl}/classrooms`,
		join: `${this.apiUrl}/classrooms/join`,
		joined: `${this.apiUrl}/classrooms/joined`
	}

	private options = {
		headers: new HttpHeaders({ 'Authorization': `Bearer ${this.storageService.getToken()}` })
	}

	store(name: string, subjectId: number): Observable<any> {
		return this.http.post(this.urls.store,
			// change professors to represent id of professors that are in the classrooooom
			{ name, subjectId, professors: [], ...this.options },
			{ observe: 'response' }
		);
	}

	join(code: string): Observable<any> {
		return this.http.post(this.urls.join, 
			{ code },
			{ ...this.options,  observe: 'response' }
		);
	}

	show(id: number): Observable<any> {
		return this.http.get(`${this.urls.store}/${id}`, {
			...this.options, observe: 'response'
		});
	}

	update(id: string, name: string, subjectId: number): Observable<any> {
		return this.http.patch(`${this.urls.store}/${id}`, 
			{ name, subjectId },
			{ ...this.options, observe: 'response' }
		);
	}

	delete(id: string): Observable<any> {
		return this.http.delete(`${this.urls.store}/${id}`,
			{ ...this.options, observe: 'response' });
	}

	joined(): Observable<any> {
		return this.http.get(`${this.urls.joined}`, 
		{...this.options, observe: 'response' });
	}

	isUserIn(id: string): Observable<any> {
		return this.http.get(`${this.urls.store}/`)
	}

}
