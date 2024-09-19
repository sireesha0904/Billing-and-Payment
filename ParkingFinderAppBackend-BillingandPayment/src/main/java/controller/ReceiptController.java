package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import model.Receipt;
import service.ReceiptService;

@RestController
@RequestMapping("/api/receipt")
public class ReceiptController {

    @Autowired
    private ReceiptService receiptService;

    @PostMapping("/generate")
    public Receipt generateReceipt(@RequestParam String vehicleNumber, @RequestParam double amount) {
        return receiptService.generateReceipt(vehicleNumber, amount);
    }
}
