import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';

@NgModule({
  declarations: [AppComponent, PaymentComponent, PaymentSuccessComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    provideHttpClient(), // Remove withFetch()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
