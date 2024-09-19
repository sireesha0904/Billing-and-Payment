package repository;

import org.springframework.data.jpa.repository.JpaRepository;

import model.Billing;

public interface BillingRepository extends JpaRepository<Billing, Long> {
}
