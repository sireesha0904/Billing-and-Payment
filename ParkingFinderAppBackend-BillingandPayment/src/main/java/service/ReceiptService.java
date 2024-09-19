package service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import model.Receipt;
import repository.ReceiptRepository;

@Service
public class ReceiptService {
    @Autowired
    private ReceiptRepository receiptRepository;

    public Receipt createReceipt(Receipt receipt) {
        return receiptRepository.save(receipt);
    }

    // Additional receipt-related methods
}
