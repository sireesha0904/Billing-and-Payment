// src/app/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model'; // Adjust the path as necessary

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUserDetails(): Observable<User> {
    return this.http.get<User>('http://localhost:9999/api/user'); // Adjust the URL based on your backend
  }
}
