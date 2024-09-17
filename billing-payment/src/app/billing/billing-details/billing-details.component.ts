import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BillingService } from '../billing.service';
import { BillingDetails } from '../models/billing-details.model';

@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.css'],
})
export class BillingDetailsComponent implements OnInit {
  billingDetails: BillingDetails | undefined;

  constructor(
    private billingService: BillingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getBillingDetails();
  }

  getBillingDetails(): void {
    const billId = this.route.snapshot.paramMap.get('id'); // Assuming 'id' is the parameter name
    if (billId) {
      this.billingService.getBillingDetails(billId).subscribe(
        (details) => {
          this.billingDetails = details;
        },
        (error) => {
          console.error('Error fetching billing details:', error);
        }
      );
    }
  }
}
