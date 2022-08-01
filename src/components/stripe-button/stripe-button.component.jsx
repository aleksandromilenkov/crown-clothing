import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51LQVSiG5q5Pn0VNHcMBH1x56LT67IFdqTCQHToI6LEPsTC1XyEdmmYrOXmCFNgQrbFBuz22R8y2tKdFoFUOmQNyV00wWgHxUlE";
  const onToken = (token) => {
    console.log(token);
    alert("Paymen Successfull");
  };
  return (
    <StripeCheckout
      label="💳 Pay Now"
      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://image.shutterstock.com/image-vector/golden-crown-gradient-mesh-vector-600w-599734505.jpg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
