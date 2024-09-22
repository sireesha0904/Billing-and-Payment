import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RazorpayService {
  constructor(private http: HttpClient) {}

  // Method to initiate payment
  initiatePayment(data: any): Observable<any> {
    return this.http.post('YOUR_BACKEND_URL/initiate-payment', data); // Update with your backend endpoint
  }
}
