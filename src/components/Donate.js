import React, { useState, useRef } from "react";

import { NavLink } from "react-router-dom";

// Stripe
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

// AXIOS
import axios from "axios";

// Logo
import logo from "../bplogo.png";
import bg from "../bg.jpg";

// React Bootstrap
import { Card, Spinner, Alert } from "react-bootstrap";

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
  const [otherErr, setOtherErr] = useState("");
  const [declineCode, setDeclineCode] = useState("");

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

    const res = await axios.post("http://localhost:3005/pay", {
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
      console.log(
        "Code: " + result.error.code + " || Message: " + result.error.message
      );
      setErr(true);
      setOtherErr(result.error.message);
      setDeclineCode(result.error.decline_code);
      setNoLoader(false);
      setLoader(false);
      setTimeout(() => {
        setErr(false);
        myForm.current.reset();
        elements.getElement(CardElement).clear();
        setNoLoader(true);
      }, 5000);
    } else {
      // The payment has been processed
      // Display success message
      if (result.paymentIntent.status === "succeeded") {
        setSucc(true);
        setNoLoader(false);
        setLoader(false);
        setTimeout(() => {
          setSucc(false);
          myForm.current.reset();
          elements.getElement(CardElement).clear();
          setNoLoader(true);
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
      <NavLink to="/" activeClassName="btn btn-secondary">
        <i className="fas fa-chevron-left"></i>Back
      </NavLink>
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
              step="0.5"
              max="100"
              placeholder="5"
              onChange={(event) => setAmount(event.target.value * 100)}
              required
            />
          </div>
          <div className="alert">
            {err ? (
              <Alert variant="danger">
                <b>Error</b>
                <br />
                {otherErr}
                <br />
                <b>{"Reason: " + declineCode}</b>
              </Alert>
            ) : null}

            {succ ? (
              <Alert variant="success">
                <b>Payment successful</b>
                <br />
                Thank you!
              </Alert>
            ) : null}
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
          {loader ? <Spinner animation="border" variant="light" /> : null}
        </form>
      </div>
      <Card style={{ width: "280px", marginBottom: "15px" }}>
        <Card.Header as="h5">Testing card #1</Card.Header>
        <Card.Body>
          <Card.Title>
            <b>4242 4242 4242 4242</b>
          </Card.Title>
          <Card.Text>No authentication required.</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "280px", margin: "15px 0" }}>
        <Card.Header as="h5">Testing card #2</Card.Header>
        <Card.Body>
          <Card.Title>
            <b>4000 0027 6000 3184</b>
          </Card.Title>
          <Card.Text>Authentication required.</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "280px", margin: "15px 0" }}>
        <Card.Header as="h5">Testing card #3</Card.Header>
        <Card.Body>
          <Card.Title>
            <b>4000 0082 6000 3178</b>
          </Card.Title>
          <Card.Text>
            Requires authentication.
            <br />
            All payments will be declined with an{" "}
            <mark>insufficient_funds</mark> code.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "280px", marginTop: "20px", marginBottom: "50px" }}>
        <Card.Header as="h5">Testing card #4</Card.Header>
        <Card.Body>
          <Card.Title>
            <b>4000 0000 0000 9979</b>
          </Card.Title>
          <Card.Text>
            Charge is declined with a <mark>card_declined</mark> code.
            <br />
            The <mark>decline_code</mark> attribute is <mark>stolen_card</mark>.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
