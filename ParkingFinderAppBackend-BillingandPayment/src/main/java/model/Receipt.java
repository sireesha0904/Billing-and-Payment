package model;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
public class Receipt {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String receiptNumber;
    private String vehicleNumber;
    private double amount;
    private LocalDateTime receiptDate;
    
    // Getters and Setters
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getReceiptNumber() {
		return receiptNumber;
	}
	public void setReceiptNumber(String receiptNumber) {
		this.receiptNumber = receiptNumber;
	}
	public String getVehicleNumber() {
		return vehicleNumber;
	}
	public void setVehicleNumber(String vehicleNumber) {
		this.vehicleNumber = vehicleNumber;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public LocalDateTime getReceiptDate() {
		return receiptDate;
	}
	public void setReceiptDate(LocalDateTime receiptDate) {
		this.receiptDate = receiptDate;
	}
	
	//constructor
	public Receipt(Long id, String receiptNumber, String vehicleNumber, double amount, LocalDateTime receiptDate) {
		super();
		this.id = id;
		this.receiptNumber = receiptNumber;
		this.vehicleNumber = vehicleNumber;
		this.amount = amount;
		this.receiptDate = receiptDate;
	}    
    
}
