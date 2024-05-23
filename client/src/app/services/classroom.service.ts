import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '../shared/apiUrl';
import { TokenStorageService } from './token.service';
import { Observable } from 'rxjs';
import { SubjectService } from './subject.service';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {
	constructor(private http: HttpClient) { }

	private apiUrl = API_URL;
	private storageService = inject(TokenStorageService);

	private urls = {
		store: `${this.apiUrl}/classrooms`
	}

	private options = {
		headers: new HttpHeaders({ 'Authorization': `Bearer ${this.storageService.getToken()}` })
	}

	store(name: string, subjectId: number): Observable<any> {
		return this.http.post(this.urls.store,
			{ name, subjectId, ...this.options },
			{ observe: 'response' }
		);
	}
}
