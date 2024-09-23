import { Component } from '@angular/core';
import { RazorpayService } from '../../services/razorpay.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
declare var Razorpay: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  constructor(
    private razorpayService: RazorpayService,
    private http: HttpClient
  ) {}

  // Method called when the payment form is submitted
  onSubmit(paymentForm: NgForm) {
    if (paymentForm.valid) {
      const paymentData = {
        name: paymentForm.value.name,
        email: paymentForm.value.email,
        amount: paymentForm.value.amount * 1, // Convert to paise
      };

      // Call the backend to create a Razorpay order
      this.razorpayService.initiatePayment(paymentData).subscribe(
        (response: any) => {
          this.openRazorpay(response);
        },
        (error) => {
          console.error('Error initiating payment:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

  // Method to open the Razorpay checkout after receiving payment data from the backend
  openRazorpay(orderDetails: any) {
    const options = {
      amount: orderDetails.amount, // Amount in the smallest currency unit (e.g., paise)
      currency: 'INR',
      name: 'Parking Space Finder',
      description: 'Parking Fee Payment',
      order_id: orderDetails.id, // Razorpay Order ID received from the backend
      handler: (response: any) => {
        this.verifyPayment(response); // Verify the payment on success
      },
      prefill: {
        name: orderDetails.name,
        email: orderDetails.email,
        contact: orderDetails.contact || '', // Include contact if needed
      },
      notes: {
        description: 'Parking Fee Payment', // Additional information
      },
      theme: {
        color: '#007bff',
      },
      modal: {
        ondismiss: function () {
          alert('Payment cancelled');
        },
      },
    };

    // Open Razorpay checkout
    const rzp = new Razorpay(options);
    rzp.open();
  }

  // Method to verify the payment after success
  verifyPayment(paymentResponse: any) {
    this.http
      .post('http://localhost:8080/api/verify-payment', paymentResponse)
      .subscribe(
        (res) => {
          console.log('Payment successful!', res);
          alert('Payment successful!');
        },
        (err) => {
          console.error('Payment verification failed:', err);
          alert('Payment verification failed!');
        }
      );
  }
}
