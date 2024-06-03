import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../shared/apiUrl';
import { TokenStorageService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class FileService {
	constructor (private http: HttpClient) {}

	private urls = {
		store: `${API_URL}/posts/files`,
	}

	private storageService = inject(TokenStorageService);

	private options = {
		headers: new HttpHeaders({ 'Authorization': `Bearer ${this.storageService.getToken()}` })
	}

	uploadFile(files: File[]): Observable<any> {
		this.options.headers.set('Content-Type', 'multipart/form-data');

		return this.http.post(this.urls.store, 
			{ files },
			{ ...this.options, reportProgress: true, observe: 'events' }
		);
	}
}
