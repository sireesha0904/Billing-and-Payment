export interface BillingHistory {
  id: string; // Unique identifier for the billing record
  date: string; // Date of the billing record
  amount: number; // Amount charged
  status: string; // Status of the payment (e.g., Paid, Unpaid)
}
