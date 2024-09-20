import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentSuccessComponent } from './payment-success/payment-success.component'; // Import your success component

const routes: Routes = [
  { path: 'payment-success', component: PaymentSuccessComponent }, // Define the route
  // Add other routes as necessary
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
