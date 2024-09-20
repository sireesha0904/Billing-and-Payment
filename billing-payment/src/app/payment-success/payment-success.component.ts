import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css'],
})
export class PaymentSuccessComponent {
  @Input() paymentDetails: any; // Input to receive payment details

  closeModal() {
    // Logic to close the modal (this can be handled with a service or event emitter)
  }
}
