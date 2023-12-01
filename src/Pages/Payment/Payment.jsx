import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";

// Todo: Add Publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
    return (
        <div>
            <div>
            <SectionTitle heading={'payment Gateway'} subHeading={'Please Pay To Eat!'}></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
        </div>
    );
};

export default Payment;