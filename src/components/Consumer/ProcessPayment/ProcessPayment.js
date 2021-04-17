import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import SimpleCardForm from "./SimpleCardForm";

const stripePromise = loadStripe(
    "pk_test_51Ih8gIA2c4sYnSSJlaSBzmasITgIR6QjAVEcrS8cj67SUWGSNsw8qwCH3T9PXCwuw6STJEjzWse845YTZavLbIcB00kQCmnnIq"
);

const ProcessPayment = ({ handlePayment }) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;
