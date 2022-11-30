import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);
console.log(stripePromise)

const Payment = () => {
    const booking = useLoaderData();
    const { item, price } = booking;

    return (
        <div className='m-5'>
            <h2 className="text-3xl font-semibold my-6">Payment for {item}</h2>
            <p>Please pay <strong>{price}$</strong></p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                    booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;