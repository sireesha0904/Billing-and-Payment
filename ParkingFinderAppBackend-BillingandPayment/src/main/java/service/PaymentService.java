package service;
import com.stripe.Stripe;
import com.stripe.model.Charge;
import com.stripe.param.ChargeCreateParams;

public class PaymentService {

    public PaymentService() {
        Stripe.apiKey = "your_secret_key"; // Initialize with your secret key
    }

    public Charge createCharge(String token, int amount) throws Exception {
        ChargeCreateParams params = ChargeCreateParams.builder()
            .setAmount(Long.valueOf(amount)) // Amount in cents
            .setCurrency("usd") // Set currency
            .setSource(token) // Token generated from Stripe.js
            .build();

        Charge charge = Charge.create(params); // Create the charge

        // Access receipt information
        String receiptUrl = charge.getReceiptUrl();
        // Use the receipt URL as needed, e.g., send it to the user

        return charge; // Return the created charge
    }
}
