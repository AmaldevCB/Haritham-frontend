import React, { useContext } from "react";
import axios from "axios";
import { serverUrl } from "../services/serverUrl";
import { data } from "react-router-dom";
import { payResponseContext } from "../ContextShare";

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const Checkout = () => {

  const {setPay}=useContext(payResponseContext)
  const {pay}=useContext(payResponseContext)

  const handlePayment = async () => {
    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      alert("Failed to load Razorpay SDK.");
      return;
    }

    try {
      // Step 1: Create an order on the backend
      const { data: order } = await axios.post(
        `${serverUrl}/create-order`,
        { amount: 40, currency: "INR" }
      );

      // Step 2: Set up Razorpay options
      const options = {
        key:  "rzp_test_7WR241IEjTCQcL", // Your Razorpay Key
        amount: order.amount,
        currency: order.currency,
        name: "Your Company",
        description: "Test Transaction",
        order_id: order.id,
        handler: async (response) => {
          // Step 3: Verify the payment on the backend
          const { data: verification } = await axios.post(
            `${serverUrl}/verify-payment`,
            response
          );
          console.log(data);
          
          if (verification.success) {
            alert("Payment successful!");
            setPay(true)
            console.log(pay);
            
          } else {
            alert("Payment verification failed!");
          }
        },
        prefill: {
          name: "Test User",
          email: "test@example.com",
          contact: "9999999999",
        },
        theme: { color: "#3399cc" },
      };

      // Step 4: Open the Razorpay checkout
      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment initialization failed!");
    }
  };

  return <button className="text-center btn btn-success" onClick={handlePayment}>Pay with Razorpay</button>;
};

export default Checkout;
