import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model'; // Update the path according to your project structure

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:9999/api/users'; // Update to your API endpoint

  constructor(private http: HttpClient) {}

  getUserDetails(): Observable<User> {
    return this.http.get<User>(this.apiUrl); // Ensure this matches your API
  }
}
