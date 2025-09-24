
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileManagementFeatureService {
  
  private apiUrl = '/api/user-profile-management-feature';
  
  constructor(private http: HttpClient) { }
  
  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  
  updateData(data: any): Observable<any> {
    return this.http.put(this.apiUrl, data);
  }
}
