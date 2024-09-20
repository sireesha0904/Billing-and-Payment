import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { environment } from '../../environments/environment'; // Import environment

declare var Razorpay: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  user: User | undefined;

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.getUserDetails().subscribe(
      (data: User) => {
        this.user = data;
      },
      (error) => {
        console.error('Error fetching user details:', error);
      }
    );
  }

  openPayment() {
    console.log('Payment initiated');
    this.payNow();
  }

  payNow() {
    this.http
      .post('http://localhost:9999/create-order', { amount: 50000 })
      .subscribe(
        (order: any) => {
          const options = {
            key: environment.razorpayKeyId, // Use the key from environment
            amount: order.amount,
            currency: 'INR',
            name: 'Parking Space',
            description: 'Parking Fee',
            order_id: order.id,
            handler: (response: any) => {
              console.log('Payment Response:', response);
              alert('Payment Successful!');

              this.http
                .post('http://localhost:9999/verify-payment', response)
                .subscribe((res) => {
                  console.log('Payment verified:', res);
                  this.router.navigate(['/payment-success']);
                });
            },
            prefill: {
              name: this.user?.name || 'Your Name',
              email: this.user?.email || 'your.email@example.com',
              contact: this.user?.contact || '9876543210',
            },
            theme: {
              color: '#3399cc',
            },
          };
          const rzp = new Razorpay(options);
          rzp.open();
        },
        (error) => {
          console.error('Error in order creation', error);
        }
      );
  }
}
