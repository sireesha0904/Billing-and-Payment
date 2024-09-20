import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private baseUrl = 'http://localhost:8080'; // Base URL for your backend

  constructor(private http: HttpClient) {}

  // Create a new order
  createOrder(amount: number): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/createOrder`, { amount })
      .pipe(catchError(this.handleError)); // Error handling
  }

  // Verify the payment response
  verifyPayment(paymentResponse: any): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/verifyPayment`, paymentResponse)
      .pipe(catchError(this.handleError)); // Error handling
  }

  // Send a receipt to the user
  sendReceipt(paymentResponse: any): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/sendReceipt`, paymentResponse)
      .pipe(catchError(this.handleError)); // Error handling
  }

  // Handle errors from HTTP requests
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage); // Return an observable with a user-facing error message
  }
}
