import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router for navigation
import { BillingService } from '../billing.service';
import { BillingHistory } from '../models/billing-history.model';

@Component({
  selector: 'app-billing-history',
  templateUrl: './billing-history.component.html',
  styleUrls: ['./billing-history.component.css'],
})
export class BillingHistoryComponent implements OnInit {
  billingHistory: BillingHistory[] = [];

  constructor(private billingService: BillingService, private router: Router) {}

  ngOnInit(): void {
    this.getBillingHistory();
  }

  getBillingHistory(): void {
    this.billingService.getBillingHistory().subscribe(
      (history) => {
        this.billingHistory = history;
      },
      (error) => {
        console.error('Error fetching billing history:', error);
      }
    );
  }

  // Define the viewDetails method
  viewDetails(billId: string): void {
    this.router.navigate(['/billing/details', billId]); // Adjust the route as necessary
  }
}
