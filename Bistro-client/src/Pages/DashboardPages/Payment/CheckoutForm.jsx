import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useCart from '../../../Hooks/useCart';
import useAuth from '../../../Hooks/useAuth';

const CheckoutForm = () => {
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transectionId, setTransectionId] = useState()
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    
    const [cart] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect( ()=> {
        axiosSecure.post('/create-payment-intent', {price: totalPrice})
        .then(res => {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })
    },[axiosSecure, totalPrice])

    

    const handleSubmit = async(event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)

        if(card === null){
            return;
        }

        const {error ,  paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('[Payment error]', error);
            setError(error.message)
        } else {
            console.log('[Payment Method]', paymentMethod);
            setError('')
        }

        // Confirm Payment 
        const { paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                }
            }
        })

        if(confirmError){
            console.log('confirm Error');
            
        } else {
            console.log('Payment intent', paymentIntent);
            if(paymentIntent.status === 'succeeded'){
                console.log('Transection ID: ', paymentIntent.id)
                setTransectionId(paymentIntent.id)
            }
            
        }
    }

    return (
        <div>
            
        <div className='w-8/12 mx-auto p-10 bg-gray-200 mt-5 rounded-md border border-blue-800'>
                <form onSubmit={handleSubmit}>
                    <CardElement options={{style: { base: {fontSize: '16px',color: '#424770','::placeholder': {color: '#aab7c4',},},invalid: {color: '#9e2146',},},}}></CardElement>

                    <button className='bg-blue-800 py-2 px-10 mt-5 text-white' type="submit" disabled={!stripe || !clientSecret}> Pay </button>

                    <p className='text-red-600 mt-2  '>{error}</p>
                    {
                        transectionId && <p className='text-green-500'> Your transection Id: {transectionId}</p>
                    }
                </form>
            </div>
        </div>
    );
} ;

export default CheckoutForm;