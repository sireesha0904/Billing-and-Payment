// src/app/payment/payment.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../user.service'; // Adjust the path as necessary
import { User } from '../user.model'; // Adjust the path as necessary

declare var Razorpay: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  user: User | undefined; // Define user variable

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.getUserDetails().subscribe(
      (data: User) => {
        this.user = data; // Store the user details
      },
      (error) => {
        console.error('Error fetching user details:', error);
      }
    );
  }

  openPayment() {
    console.log('Payment initiated');
    this.payNow(); // Call the payNow method when opening the payment
  }

  payNow() {
    this.http
      .post('http://localhost:9999/create-order', { amount: 50000 }) // Amount in paise (50000 paise = 500 INR)
      .subscribe(
        (order: any) => {
          const options = {
            key: 'YOUR_KEY_ID', // Replace with your Razorpay key ID
            amount: order.amount, // Amount in paise
            currency: 'INR',
            name: 'Parking Space',
            description: 'Parking Fee',
            order_id: order.id, // Razorpay order ID
            handler: (response: any) => {
              console.log('Payment Response:', response);
              alert('Payment Successful!');

              // Send payment verification to your backend
              this.http
                .post('http://localhost:9999/verify-payment', response)
                .subscribe((res) => {
                  console.log('Payment verified:', res);
                  this.router.navigate(['/payment-success']); // Navigate to success page
                });
            },
            prefill: {
              name: this.user?.name || 'Your Name', // Default value if user is undefined
              email: this.user?.email || 'your.email@example.com', // Default value if user is undefined
              contact: this.user?.contact || '9876543210', // Default value if user is undefined
            },
            theme: {
              color: '#3399cc',
            },
          };
          const rzp = new Razorpay(options);
          rzp.open(); // Open the Razorpay payment modal
        },
        (error) => {
          console.error('Error in order creation', error);
        }
      );
  }
}
