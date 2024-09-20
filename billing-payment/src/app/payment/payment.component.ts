import { Component } from '@angular/core';
import { PaymentService } from '../payment.service'; // Import the payment service
import { PaymentSuccessComponent } from '../payment-success/payment-success.component'; // Import the success component
import { MatDialog } from '@angular/material/dialog'; // Use Angular Material Dialog

declare var Razorpay: any; // Declare Razorpay

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  constructor(
    private paymentService: PaymentService,
    public dialog: MatDialog
  ) {}

  payWithRazorpay() {
    const amountInPaisa = 50000; // Example amount in paisa (500 INR)

    this.paymentService.createOrder(amountInPaisa).subscribe({
      next: (order: any) => {
        const options = {
          key: order.razorpayKey,
          amount: order.amount,
          currency: 'INR',
          order_id: order.id,
          name: 'Parking Finder',
          description: 'Payment for parking',
          handler: (response: any) => {
            this.verifyPayment(response);
          },
          prefill: {
            name: 'Sireesha',
            email: 'sireesha@example.com',
            contact: '9999999999',
          },
          theme: {
            color: '#7A1CAC',
          },
        };

        const rzp = new Razorpay(options);
        rzp.open();
      },
      error: (error) => {
        console.error('Order creation failed:', error);
        alert('Failed to create order. Please try again.');
      },
    });
  }

  verifyPayment(paymentResponse: any) {
    this.paymentService.verifyPayment(paymentResponse).subscribe({
      next: (response: any) => {
        if (response.status === 'success') {
          this.openSuccessModal(response); // Open the success modal with payment details
          this.sendReceipt(paymentResponse); // Send the receipt
        } else {
          alert('Payment Verification Failed!');
        }
      },
      error: (error) => {
        console.error('Payment verification failed:', error);
        alert('Error verifying payment. Please contact support.');
      },
    });
  }

  openSuccessModal(paymentDetails: any) {
    const dialogRef = this.dialog.open(PaymentSuccessComponent, {
      data: paymentDetails, // Pass the payment details to the modal
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
      // Here you can perform additional actions if needed
    });
  }

  sendReceipt(paymentResponse: any) {
    this.paymentService.sendReceipt(paymentResponse).subscribe({
      next: (response: any) => {
        if (response.status === 'success') {
          console.log('Receipt sent to email!');
        } else {
          console.warn('Failed to send receipt:', response.message);
        }
      },
      error: (error) => {
        console.error('Error sending receipt:', error);
      },
    });
  }
}
