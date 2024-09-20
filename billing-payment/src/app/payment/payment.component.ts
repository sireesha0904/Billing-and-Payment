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
    this.paymentService
      .createOrder(50000) // Replace 50000 with the actual amount in paisa
      .subscribe((order: any) => {
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
      });
  }

  verifyPayment(paymentResponse: any) {
    this.paymentService
      .verifyPayment(paymentResponse)
      .subscribe((response: any) => {
        if (response.status === 'success') {
          this.openSuccessModal(response); // Open the success modal with payment details
          this.sendReceipt(paymentResponse);
        } else {
          alert('Payment Verification Failed!');
        }
      });
  }

  openSuccessModal(paymentDetails: any) {
    const dialogRef = this.dialog.open(PaymentSuccessComponent, {
      data: paymentDetails, // Pass the payment details to the modal
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  sendReceipt(paymentResponse: any) {
    this.paymentService
      .sendReceipt(paymentResponse)
      .subscribe((response: any) => {
        if (response.status === 'success') {
          console.log('Receipt sent to email!');
        }
      });
  }
}
