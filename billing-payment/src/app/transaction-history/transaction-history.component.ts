import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction.model'; // Adjust the path based on where your service file is


@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css'],
})
export class TransactionHistoryComponent implements OnInit {
  transactions: Transaction[] = [];
  userId = 'exampleUserId'; // Replace with the actual user ID

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.getUserTransactions();
  }

  getUserTransactions(): void {
    this.transactionService
      .getUserTransactions(this.userId)
      .subscribe((data) => {
        this.transactions = data;
      });
  }
}
