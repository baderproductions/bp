import React, { useState, useRef } from "react";

// Stripe
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

// AXIOS
import axios from "axios";

// Logo
import logo from "../bplogo.png";
import bg from "../bg.jpg";

// React Bootstrap
import { Button, Spinner, Alert } from "react-bootstrap";

export default function Donate() {
  const stripe = useStripe();
  const elements = useElements();

  // State
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [noLoader, setNoLoader] = useState(true);
  const [loader, setLoader] = useState(false);
  const [err, setErr] = useState(false);
  const [succ, setSucc] = useState(false);
  const [invalidCard, setInvalidCard] = useState(false);
  const [noFunds, setNoFunds] = useState(false);
  const [authErr, setAuthErr] = useState(false);

  // Refs
  const myForm = useRef(null);

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.

      return;
    }

    setNoLoader(false);
    setLoader(true);

    // https://spleeter.co.uk/pay
    // http://localhost:3005/pay

    const res = await axios.post("https://spleeter.co.uk/pay", {
      name,
      email,
      amount,
    });
    const clientSecret = res.data["client_secret"];
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: name,
          email: email,
        },
      },
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      setErr(true);
      setNoLoader(false);
      setLoader(true);
      setTimeout(() => {
        setErr(false);
        myForm.current.reset();
        elements.getElement(CardElement).clear();
        setNoLoader(true);
        setLoader(false);
      }, 5000);
      if (result.error.code === "card_declined") {
        // Insufficient funds
        setNoFunds(true);
      } else if (result.error.code === "incomplete_number") {
        // Your card number is incomplete.
        setInvalidCard(true);
      } else if (
        result.error.code === "payment_intent_authentication_failure"
      ) {
        // Unable to authenticate payment method
        setAuthErr(true);
      }
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === "succeeded") {
        setSucc(true);
        setNoLoader(false);
        setLoader(true);
        setTimeout(() => {
          setSucc(false);
          myForm.current.reset();
          elements.getElement(CardElement).clear();
          setNoLoader(true);
          setLoader(false);
        }, 5000);
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
      }
    }
  };

  return (
    <div className="donate-container">
      <div className="darken"></div>
      <img id="bg" src={bg} alt="Background Art" />
      <div className="logo-wrapper">
        <img src={logo} alt="BADERproductions Logo" />
      </div>
      <div className="donate-form">
        <form ref={myForm} onSubmit={handleSubmit}>
          <div className="card-section">
            <label>Name</label>
            <input
              onChange={(event) => setName(event.target.value)}
              name="name"
              type="text"
              placeholder="John Doe"
              required
            />
            <label>Email</label>
            <input
              onChange={(event) => setEmail(event.target.value)}
              name="email"
              type="email"
              placeholder="john.doe@example.com"
              required
            />
            <label>Card details</label>
            <CardElement
              options={{
                hidePostalCode: true,
                style: {
                  base: {
                    color: "#32325d",
                    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                    fontSmoothing: "antialiased",
                    fontSize: "16px",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#ff0000",
                    iconColor: "#ff0000",
                  },
                },
              }}
            />
            <label id="donation-label">Amount: ( 1 - 100 )</label>
            <input
              type="number"
              id="donation"
              name="donation"
              min="1"
              max="100"
              placeholder="5"
              onChange={(event) => setAmount(event.target.value * 100)}
              required
            />
            <div className="alert">
              {err ? (
                <Alert variant="danger">
                  <b>Error!</b>&nbsp;
                  {noFunds ? "Insufficient funds on your card." : null}
                  {invalidCard ? "Your card number is incomplete." : null}
                  {authErr ? "Unable to authenticate payment method." : null}
                </Alert>
              ) : null}
              {succ ? (
                <Alert variant="success">
                  <b>Payment successful.</b>&nbsp;Thank you!
                </Alert>
              ) : null}
            </div>
          </div>
          {noLoader ? (
            <button
              disabled={!stripe}
              type="submit"
              className="btn btn-primary"
            >
              Donate {"£" + amount / 100}
            </button>
          ) : null}
          {loader ? (
            <Button variant="primary" style={{ cursor: "default" }} disabled>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              &nbsp; Loading...
            </Button>
          ) : null}
        </form>
      </div>
    </div>
  );
}
