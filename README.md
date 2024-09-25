# Parking Space Finder and E-Challan Management

## Overview
This project aims to develop a comprehensive, user-friendly solution for urban parking management, allowing users to securely pay parking fees and manage transactions.

## Features

- **Secure Payment Processing:** Integrated with Razorpay to facilitate safe and seamless transactions.
- **Transaction History:** Users can view their past transactions directly from the application.
- **Digital Receipts:** Automatically generates and sends digital receipts to the user's registered email after a successful payment.
- **User-Friendly Interface:** Designed for easy navigation and quick access to payment options.

## Tech Stack

- **Frontend:** Angular
- **Backend:** Spring Boot
- **Database:** MySQL
- **Payment Gateway:** Razorpay

## Getting Started

### Prerequisites

- JDK 11 or higher
- Node.js and npm
- MySQL Server
- Razorpay account

### Backend and Frontend Setup

1. **Backend Setup:**
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Update the `application.properties` file with your database and Razorpay credentials. Ensure you configure the following properties:
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
     spring.datasource.username=your_database_username
     spring.datasource.password=your_database_password

     razorpay.key.id=your_razorpay_key_id
     razorpay.key.secret=your_razorpay_key_secret
     ```
   - Run the Spring Boot application:
     ```bash
     mvn spring-boot:run
     ```

2. **Frontend Setup:**
   - Navigate to the frontend directory:
     ```bash
     cd ../frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Run the Angular application:
     ```bash
     ng serve
     ```

## API Endpoints

| Method | Endpoint                              | Description                           |
|--------|---------------------------------------|---------------------------------------|
| POST   | `/api/transactions/initiate-payment` | Initiates a payment transaction.      |
| POST   | `/api/transactions/verify-payment`   | Verifies payment status.              |
| GET    | `/api/transactions`                   | Retrieves transaction history.        |

## Payment Integration
The Razorpay payment integration allows users to securely pay parking fees. After a successful payment, the system generates a digital receipt and sends it to the user's registered email.

## Usage
- Users can pay for parking fees via a secure payment gateway.
- Users can view their transaction history and digital receipts within the application.

## Future Enhancements
- Integration of UPI payments and QR code generation.
- Enhanced user notifications for transaction updates.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgements
- Razorpay for the payment gateway.
- Spring Boot for backend development.
- Angular for frontend development.
### Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   