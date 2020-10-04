import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

// Stripe
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

// AXIOS
import axios from "axios";

// Carousel
import Carousel from "@brainhubeu/react-carousel";

// Logo
import logo from "../bplogo.png";
import bg from "../bg.jpg";

// React Bootstrap
import { Card, Spinner, Alert } from "react-bootstrap";

// npm - react-switch-lang
import { translate } from "react-switch-lang";

function Donate(props) {
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

    // https://europe-west2-zapp-native.cloudfunctions.net/api/pay
    // http://localhost:3005/pay

    const res = await axios.post(
      "https://europe-west2-zapp-native.cloudfunctions.net/api/pay",
      {
        name,
        email,
        amount,
      }
    );
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

  const { t } = props;

  return (
    <div className="donate-container">
      <div className="darken"></div>
      <img id="bg" src={bg} alt="Background Art" />
      <NavLink to="/" activeClassName="btn btn-light">
        <i className="fas fa-chevron-left"></i>
        {t("donate.back")}
      </NavLink>
      <div className="logo-wrapper">
        <img src={logo} alt="BADERproductions Logo" />
      </div>
      <div className="donate-form">
        <form ref={myForm} onSubmit={handleSubmit}>
          <div className="card-section">
            <label>{t("donate.name")}</label>
            <input
              onChange={(event) => setName(event.target.value)}
              name="name"
              type="text"
              placeholder="John Doe"
              required
            />
            <label>{t("donate.email")}</label>
            <input
              onChange={(event) => setEmail(event.target.value)}
              name="email"
              type="email"
              placeholder="john.doe@example.com"
              required
            />
            <label>{t("donate.card")}</label>
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
            <label id="donation-label">{t("donate.amount")}</label>
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
                <b>{t("donate.error")}</b>
                <br />
                {otherErr}
                <br />
                <b>{t("donate.reason") + declineCode}</b>
              </Alert>
            ) : null}

            {succ ? (
              <Alert variant="success">
                <b>{t("donate.succ")}</b>
                <br />
                {t("donate.thx")}
              </Alert>
            ) : null}
          </div>
          {noLoader ? (
            <button
              disabled={!stripe}
              type="submit"
              className="btn btn-primary"
            >
              {t("donate.button")} {"£" + amount / 100}
            </button>
          ) : null}
          {loader ? <Spinner animation="border" variant="light" /> : null}
        </form>
      </div>
      <Carousel
        animationSpeed={1000}
        stopAutoPlayOnHover={true}
        keepDirectionWhenDragging={true}
        arrows={false}
        dots={true}
        centered
        autoPlay={500000}
        infinite={true}
      >
        <Card style={{ width: "300px", height: "230px" }}>
          <Card.Header as="h5">{t("donate.test")} #1</Card.Header>
          <Card.Body>
            <Card.Title>
              <b>4242 4242 4242 4242</b>
            </Card.Title>
            <Card.Text>{t("donate.noAuth")}</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "280px", height: "230px" }}>
          <Card.Header as="h5">{t("donate.test")} #2</Card.Header>
          <Card.Body>
            <Card.Title>
              <b>4000 0027 6000 3184</b>
            </Card.Title>
            <Card.Text>{t("donate.auth")}</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "280px", height: "230px" }}>
          <Card.Header as="h5">{t("donate.test")} #3</Card.Header>
          <Card.Body>
            <Card.Title>
              <b>4000 0082 6000 3178</b>
            </Card.Title>
            <Card.Text>
              {t("donate.funds1")}
              <br />
              {t("donate.funds2")} <mark>{t("donate.funds3")}</mark>
              {t("donate.funds4")}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "280px",
            height: "230px",
          }}
        >
          <Card.Header as="h5">{t("donate.test")} #4</Card.Header>
          <Card.Body>
            <Card.Title>
              <b>4000 0000 0000 9979</b>
            </Card.Title>
            <Card.Text>
              {t("donate.stolen1")} <mark>{t("donate.stolen2")}</mark>
              <br />
              {t("donate.stolen3")} <mark>{t("donate.stolen4")}</mark>{" "}
              {t("donate.stolen5")} <mark>{t("donate.stolen6")}</mark>
            </Card.Text>
          </Card.Body>
        </Card>
      </Carousel>
    </div>
  );
}

Donate.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate(Donate);
