import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component'; // Import the TransactionHistoryComponent

const routes: Routes = [
  { path: '', component: PaymentComponent },
  { path: 'transaction-history', component: TransactionHistoryComponent }, // Add this route
  // Add any other routes you have
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
