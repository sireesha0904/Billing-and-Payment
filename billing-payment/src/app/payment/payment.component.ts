import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

declare var Razorpay: any; // Add this at the top

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  constructor(private http: HttpClient, private router: Router) {}

  payNow() {
    this.http
      .post('http://localhost:9999/create-order', { amount: 500 })
      .subscribe(
        (order: any) => {
          const options = {
            key: 'YOUR_KEY_ID',
            amount: order.amount,
            currency: 'INR',
            name: 'Parking Space',
            description: 'Parking Fee',
            order_id: order.id,
            handler: (response: any) => {
              console.log(response);
              alert('Payment Successful!');

              this.http
                .post('http://localhost:9999/verify-payment', response)
                .subscribe((res) => {
                  console.log('Payment verified', res);
                  this.router.navigate(['/payment-success']);
                });
            },
            prefill: {
              name: 'Modi Sireesha',
              email: 'modi@example.com',
              contact: '9876543210',
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
