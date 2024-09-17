import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Remove BillingDetailsComponent from here
// import { BillingDetailsComponent } from './billing/billing-details/billing-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    // Remove BillingDetailsComponent from here
    // Declare other components if needed
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // Import other modules if needed
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
