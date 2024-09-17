import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingHistoryComponent } from './billing/billing-history/billing-history.component';
import { BillingDetailsComponent } from './billing/billing-details/billing-details.component';

const routes: Routes = [
  { path: 'billing/history', component: BillingHistoryComponent },
  { path: 'billing/details/:id', component: BillingDetailsComponent },
  { path: '', redirectTo: '/billing/history', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
