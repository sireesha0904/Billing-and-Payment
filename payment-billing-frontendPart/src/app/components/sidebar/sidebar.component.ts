import { Component, OnInit } from '@angular/core';
import { RazorpayService } from '../../services/razorpay.service'; // Adjust the path as per your structure

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  isOpen = false;
  transactions: any[] = [];

  constructor(private razorpayService: RazorpayService) {}

  ngOnInit() {
    this.getTransactions();
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  getTransactions() {
    this.razorpayService.getTransactions().subscribe(
      (response) => {
        this.transactions = response;
      },
      (error) => {
        console.error('Error fetching transactions:', error);
      }
    );
  }
}
