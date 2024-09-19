package repository;

import org.springframework.data.jpa.repository.JpaRepository;

import model.ParkingTransaction;

public interface ParkingTransactionRepository extends JpaRepository<ParkingTransaction, Long> {
}
