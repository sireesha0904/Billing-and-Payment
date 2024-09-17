import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BillingHistory } from './models/billing-history.model';
import { BillingDetails } from './models/billing-details.model';

@Injectable({
  providedIn: 'root',
})
export class BillingService {
  private baseUrl = 'https://your-backend-api-url.com/billing'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // Fetch the billing history
  getBillingHistory(): Observable<BillingHistory[]> {
    return this.http.get<BillingHistory[]>(`${this.baseUrl}/history`);
  }

  // Fetch detailed billing information by bill ID
  getBillingDetails(billId: string): Observable<BillingDetails> {
    return this.http.get<BillingDetails>(`${this.baseUrl}/details/${billId}`);
  }
}
