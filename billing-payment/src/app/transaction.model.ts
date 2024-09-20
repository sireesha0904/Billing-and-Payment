export interface Transaction {
  id: number;
  userId: string;
  amount: number; // Amount in the smallest currency unit (e.g., paisa for INR)
  status: string; // Payment status (e.g., 'success', 'failed')
  date: string; // Date of the transaction (can be in ISO format)
}
