import { Component } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.css',
})
export class BillingComponent {
  billingHistory = [
    { date: '2024-09-15', amount: '$12.00', receiptUrl: '#' },
    { date: '2024-09-14', amount: '$10.00', receiptUrl: '#' },
    { date: '2024-09-13', amount: '$8.50', receiptUrl: '#' },
  ];

  constructor() {}
}
