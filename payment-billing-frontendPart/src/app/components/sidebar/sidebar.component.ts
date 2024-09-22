import { Component } from '@angular/core';

interface Transaction {
  description: string;
  amount: number;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  transactions: Transaction[] = [
    { description: 'Parking Fee', amount: 100 },
    { description: 'Late Fee', amount: 50 },
  ];
  showHistory = false; // Track visibility of history

  toggleHistory() {
    this.showHistory = !this.showHistory; // Toggle the history visibility
  }
}
