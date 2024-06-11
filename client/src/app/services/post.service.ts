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

	store(id: string, title: string, body: string, type: string): Observable<any> {
		const url = this.urls.store.replace('[CLASSROOM]', id);

		return this.http.post(url, 
			{ title, body, type },
			{ ...this.options, observe: 'response' }
		)

	}

	storeUpload(id: string, formData: any): Observable<any> {
		const url = this.urls.store.replace('[CLASSROOM]', id);
				
		return this.http.post(url, formData,
			{ ...this.options, reportProgress: true,  observe: 'events' }
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