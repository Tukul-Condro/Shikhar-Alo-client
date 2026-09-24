import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutFrom from "./checkoutFrom";


const stripePromise = loadStripe(import.meta.env.VITE_payment_Getway_Pk);
const Payment = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutFrom></CheckoutFrom>
            </Elements>
        </div>
    );
};

export default Payment;