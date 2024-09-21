import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppComponent } from './app.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [AppComponent, PaymentComponent, SidebarComponent],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
