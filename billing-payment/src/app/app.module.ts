import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component'; // Import your PaymentComponent
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent, // Declare your PaymentComponent here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Add HttpClientModule here
  ],
  providers: [
    provideHttpClient(), // Add this line to enable fetch
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
