import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Ensure this is imported
import { BillingHistoryComponent } from './billing-history/billing-history.component';
import { BillingDetailsComponent } from './billing-details/billing-details.component';
import { BillingService } from './billing.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BillingHistoryComponent, BillingDetailsComponent],
  imports: [
    CommonModule, // Ensure this is included here
    RouterModule,
    // Import other modules if needed
  ],
  providers: [BillingService],
  exports: [BillingHistoryComponent, BillingDetailsComponent],
})
export class BillingModule {}
