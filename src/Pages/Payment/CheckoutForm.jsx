import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useBooking from "../../Hooks/useBooking";
import { useEffect } from "react";

const CheckOutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [booking, refetch] = useBooking();
    const navigate = useNavigate();
    const totalPrice = booking.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, totalPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log('Payment Error', error);
            setError(error.message);
        }
        else {
            console.log('Payment Method', paymentMethod);
            setError('');
        }

        // Confirm Payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('Confirm Error');
        }
        else {
            console.log('Payment Intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('Transaction Id', paymentIntent.id);
                setTransactionId(paymentIntent.id);
                // Now Save The Payment In The Database
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    cartIds: booking.map(item => item._id),
                    menuItemIds: booking.map(item => item.menuId),
                    status: 'pending'
                }
                const res = await axiosSecure.post('/payments', payment);
                console.log('Payment Save', res.data);
                refetch();
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Payment Successful",
                        showConfirmButton: false,
                        timer: 2500
                    });
                    navigate('/dashboard/paymentHistory');
                }
            }
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="">
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '20px',
                                color: '#000000',
                                '::placeholder': {
                                    color: '#000000',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
            </div>
            <button disabled={!stripe || !clientSecret} className="btn btn-sm btn-primary my-4" type="submit" >Pay</button>
            <p className="text-red-500">{error}</p>
            {transactionId && <p className="text-green-500">Your Transaction Id: {transactionId}</p>}
        </form>
    );
};

export default CheckOutForm;