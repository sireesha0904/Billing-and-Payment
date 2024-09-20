import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    // your components
  ],
  imports: [
    HttpClientModule, // Add this to import list
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
