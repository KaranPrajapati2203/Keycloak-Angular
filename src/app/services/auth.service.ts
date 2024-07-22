import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://localhost:7063/api/User'; // Update with your API URL

  constructor(private http: HttpClient) { }

  register(user: User) {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(user: User) {
    console.log('Attempting to login with user:', user); // Debugging line
    return this.http.post<any>(`${this.apiUrl}/login`, user);
  }
}
