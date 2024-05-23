import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TokenStorageService } from './token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiUrl = process.env['API_URL'];
  private storageService = inject(TokenStorageService);
  private urls = {
    store: `${this.apiUrl}/departments/store`
  }

  constructor(private http: HttpClient) {}

  store(name: string, type: string): Observable<HttpResponse<any>> | void {
    const accessToken = this.storageService.getToken();

    const options = {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
    }

    // Simple frontend check
    if(['OAS', 'MAS', 'DAS'].indexOf(type) !== -1) {
      return this.http.post(this.urls.store, 
        { name, type, ...options },
        { observe: 'response' }
      )
    }
  }
}
