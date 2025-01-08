import React from 'react';
import SectionTitle from '../../CommonPages/SectionTitle';
import { loadStripe } from '@stripe/stripe-js/dist/pure';
import { PaymentElement, Elements,useStripe, useElements,} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const Payment = () => {

    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_Pk)
    
    return (
        <div>
            <SectionTitle subHeadding='Payment' headding='Please Pay'></SectionTitle>

            <div>
                
                <Elements stripe={stripePromise}>
                    <CheckoutForm> </CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;