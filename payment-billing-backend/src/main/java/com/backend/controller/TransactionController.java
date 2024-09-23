package com.backend.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.model.PaymentRequest;
import com.backend.model.Transaction;
import com.backend.service.EmailService;
import com.backend.service.PaymentService;
import com.backend.service.TransactionService;

@RestController
@RequestMapping("/api/transactions")
@CrossOrigin(origins = "http://localhost:4200") 
public class TransactionController {
    @Autowired
    private TransactionService transactionService;

    @Autowired
    private PaymentService paymentService;

    @Autowired
    private EmailService emailService;

    @PostMapping("/initiate-payment")
    public ResponseEntity<Map<String, Object>> initiatePayment(@RequestBody PaymentRequest paymentRequest) {
        try {
            // Create and save transaction with initial status
            Transaction transaction = new Transaction();
            transaction.setName(paymentRequest.getName());
            transaction.setEmail(paymentRequest.getEmail());
            transaction.setAmount(paymentRequest.getAmount());
            transaction.setStatus("PENDING");
            transactionService.saveTransaction(transaction);

            // Create Razorpay order
            Map<String, Object> orderResponse = paymentService.createOrder(paymentRequest.getAmount());

            return ResponseEntity.ok(orderResponse);
        } catch (Exception e) {
            e.printStackTrace(); // Log the exception
            return ResponseEntity.status(500).build();
        }
    }

    @GetMapping
    public ResponseEntity<List<Transaction>> getTransactions() {
        List<Transaction> transactions = transactionService.getAllTransactions();
        return ResponseEntity.ok(transactions);
    }

    @PostMapping("/verify-payment")
    public ResponseEntity<?> verifyPayment(@RequestBody Map<String, Object> paymentDetails) {
        // Implement your payment verification logic here
        // This could involve checking the payment status from Razorpay using their API
        return ResponseEntity.ok("Payment verified");
    }
}
