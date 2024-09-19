package model;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
public class ParkingTransaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String vehicleNumber;
    private LocalDateTime entryTime;
    private LocalDateTime exitTime;
    private double calculatedFee;
    
    // Getters and Setters
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getVehicleNumber() {
		return vehicleNumber;
	}
	public void setVehicleNumber(String vehicleNumber) {
		this.vehicleNumber = vehicleNumber;
	}
	public LocalDateTime getEntryTime() {
		return entryTime;
	}
	public void setEntryTime(LocalDateTime entryTime) {
		this.entryTime = entryTime;
	}
	public LocalDateTime getExitTime() {
		return exitTime;
	}
	public void setExitTime(LocalDateTime exitTime) {
		this.exitTime = exitTime;
	}
	public double getCalculatedFee() {
		return calculatedFee;
	}
	public void setCalculatedFee(double calculatedFee) {
		this.calculatedFee = calculatedFee;
	}
	
	//constructors
	public ParkingTransaction(Long id, String vehicleNumber, LocalDateTime entryTime, LocalDateTime exitTime,
			double calculatedFee) {
		super();
		this.id = id;
		this.vehicleNumber = vehicleNumber;
		this.entryTime = entryTime;
		this.exitTime = exitTime;
		this.calculatedFee = calculatedFee;
	}
    
}
