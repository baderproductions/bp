import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

// Styles
import "./index.scss";
import "../node_modules/flag-icon-css/sass/flag-icon.scss";
import "@brainhubeu/react-carousel/lib/style.css";

//Stripe
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// Pages
import Home from "./components/Home";
import Donate from "./components/Donate";
import NotFound from "./components/NotFound";

// React Language Switch
import {
  setTranslations,
  setDefaultLanguage,
  setLanguageCookie,
} from "react-switch-lang";

import en from "./en.json";
import ro from "./ro.json";
// Stripe
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_T);

setTranslations({ en, ro });
setDefaultLanguage("en");
setLanguageCookie("lang", { path: "/", maxAge: 31540000 });

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Elements stripe={stripePromise}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/donate" component={Donate} />
            <Route component={NotFound} />
          </Switch>
        </Elements>
      </BrowserRouter>
    );
  }
}

export default App;
