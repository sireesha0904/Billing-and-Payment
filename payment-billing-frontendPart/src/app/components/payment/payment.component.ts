import { Component } from '@angular/core';

declare var Razorpay: any; // Declare Razorpay

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  paymentDetails = {
    name: '',
    email: '',
    amount: 0, // Initialize amount
  };

  onSubmit() {
    const options = {
      key: 'YOUR_RAZORPAY_KEY', // Replace with your Razorpay key
      amount: this.paymentDetails.amount * 100, // Convert amount to paisa
      currency: 'INR',
      name: this.paymentDetails.name,
      description: 'Parking Payment',
      handler: (response: any) => {
        // Handle success
        alert(
          'Payment Successful. Payment ID: ' + response.razorpay_payment_id
        );
        // Here you can send the payment details to your backend
        this.saveTransaction(response.razorpay_payment_id);
      },
      prefill: {
        name: this.paymentDetails.name,
        email: this.paymentDetails.email,
      },
      theme: {
        color: '#F37254', // Customize the theme color
      },
    };

    const rzp1 = new Razorpay(options);
    rzp1.open(); // Open Razorpay payment modal
  }

  saveTransaction(paymentId: string) {
    // You can send payment details to your backend for storing transaction
    console.log('Saving transaction with ID:', paymentId);
    // Implement your API call to save transaction here
  }
}
