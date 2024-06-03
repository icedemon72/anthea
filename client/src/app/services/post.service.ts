import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '../shared/apiUrl';
import { TokenStorageService } from './token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
	constructor(private http: HttpClient) { }

	private apiUrl = API_URL;
	private storageService = inject(TokenStorageService);

	private options = {
		headers: new HttpHeaders({ 'Authorization': `Bearer ${this.storageService.getToken()}` })
	}

	private urls = {
		store: `${this.apiUrl}/classrooms/[CLASSROOM]/posts`,
		show: `${this.apiUrl}/classrooms/[CLASSROOM]/posts/[POST]`,
	}

	store(id: string, title: string, body: string, type: string, files?: any): Observable<any> {
		const url = this.urls.store.replace('[CLASSROOM]', id);
		this.options.headers = this.options.headers.set('Content-Type', 'multipart/form-data');
		
		const requestBody = (type === 'text') 
		? { title, body, type }
		: { title, body, type, files }
		
		return this.http.post(url, 
			requestBody,
			{ ...this.options, observe: 'response' }
		);
	}

	show(classroom: string, id: string): Observable<any> {
		const url = this.urls.show.replace('[CLASSROOM]', classroom).replace('[POST]', id);

		return this.http.get(url, 
			{ ...this.options, observe: 'response' }
		);
	}

	index(id: string) {
		const url = this.urls.store.replace('[CLASSROOM]', id);

		return this.http.get(url, 
			{ ...this.options, observe: 'response' }
		);
	}

}