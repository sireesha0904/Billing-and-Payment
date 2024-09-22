import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  isOpen = false; // Sidebar toggle state
  transactions = [
    { id: '123', amount: 100, status: 'Success' },
    { id: '124', amount: 200, status: 'Failed' },
  ];

  toggleTransactions() {
    this.isOpen = !this.isOpen; // Toggle the sidebar
  }
}
