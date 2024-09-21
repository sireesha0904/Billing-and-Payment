import { Component } from '@angular/core';
declare var Razorpay: any; // Declare Razorpay globally

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  amount: number = 0; // Initialize the amount to 0
  transactions: any[] = []; // Initialize transactions

  // Start the payment process
  startPayment() {
    const options = {
      key: 'your_razorpay_key', // Replace with your Razorpay Key ID
      amount: this.amount * 100, // Amount in paise
      currency: 'INR',
      name: 'Parking Space Finder',
      description: 'Payment for parking',
      handler: (response: any) => this.paymentSuccessHandler(response),
      theme: { color: '#3399cc' },
    };

    const rzp1 = new Razorpay(options);
    rzp1.open(); // Open Razorpay payment window
  }

  // Handle successful payment
  paymentSuccessHandler(response: any) {
    const newTransaction = {
      id: response.razorpay_payment_id,
      amount: this.amount,
      date: new Date().toISOString().slice(0, 10),
    };
    this.transactions.push(newTransaction); // Add to transaction history
    alert(
      'Payment Successful! Transaction ID: ' + response.razorpay_payment_id
    );
  }
}
