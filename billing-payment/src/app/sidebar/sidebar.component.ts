import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private router: Router) {} // Inject Router

  goToTransactionHistory() {
    this.router.navigate(['/transaction-history']); // Navigate to the transaction history route
  }

  goToSettings() {
    this.router.navigate(['/settings']); // Navigate to the settings route (if you have one)
  }
}
