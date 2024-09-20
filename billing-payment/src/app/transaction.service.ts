import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../transaction.model'; // Adjust the path based on where your service file is
// Import your Transaction model

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private baseUrl = 'http://localhost:8080/api/transactions'; // Adjust as needed

  constructor(private http: HttpClient) {}

  // Fetch transactions for a specific user
  getUserTransactions(userId: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.baseUrl}/${userId}`);
  }
}
