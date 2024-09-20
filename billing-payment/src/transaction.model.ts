export interface Transaction {
  id: number;
  userId: string;
  amount: number;
  status: string;
  date: string; // Store as ISO string, can convert to Date later
}
