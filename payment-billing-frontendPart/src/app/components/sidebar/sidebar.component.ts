import { Component } from '@angular/core';

interface Transaction {
  description: string;
  amount: number;
} // Transaction interface defined

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  transactions: Transaction[] = [
    // Using the Transaction interface
    { description: 'Parking Fee', amount: 100 },
    { description: 'Late Fee', amount: 50 },
  ];

  showHistory = false; // Track visibility of history

  toggleHistory() {
    this.showHistory = !this.showHistory; // Toggle the history visibility
  }
}
