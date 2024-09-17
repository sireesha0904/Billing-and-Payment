export interface BillingDetails {
  id: string; // Unique identifier for the billing record
  date: string; // Date of the billing record
  duration: string; // Duration of the parking or service
  amount: number; // Total amount charged
  location: string; // Location where the service was used
  description: string; // Description of the billing item
}
