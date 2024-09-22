import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Required for ngModel
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PaymentComponent } from './components/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PaymentComponent, // Include the PaymentComponent here
  ],
  imports: [
    BrowserModule,
    FormsModule, // Include FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
