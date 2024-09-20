import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { UserService } from './user.service'; // Ensure you have this service

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent, // Add other components as needed
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Import HttpClientModule
    AppRoutingModule,
  ],
  providers: [
    UserService, // Provide your user service
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
