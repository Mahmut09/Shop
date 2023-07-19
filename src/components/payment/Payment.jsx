import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./Payment.css";
import CheckoutForm from "./CheckoutForm";
import { useSelector } from "react-redux";

const stripePromise = loadStripe("pk_test_51Lp6ewEsKFQclJpSXEhUjxDP54smzTYPxOygwdRFXYmfIbGwi5qMtRDCSXyCFnm7VrlK2Nw1klEe55V7aX1HH2Am00t3LE9Xni");

const Payment = () => {
    const [clientSecret, setClientSecret] = useState("");
    const URL = useSelector(state => state.URL);

    useEffect(() => {
        fetch(URL + "create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ product_id: [1, 2, 3] }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.client_secret));
    }, []);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    }; 


    return (
        <div className="Payment">
            Payment
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    );
}

export default Payment