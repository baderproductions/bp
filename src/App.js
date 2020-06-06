import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

// Styles
import "./index.scss";
import "../node_modules/flag-icon-css/sass/flag-icon.scss";

// Pages
import Home from "./components/Home";
import NotFound from "./components/NotFound";

// Helmet Async
import { HelmetProvider } from "react-helmet-async";

// React Language Switch
import {
  setTranslations,
  setDefaultLanguage,
  setLanguageCookie,
} from "react-switch-lang";

import en from "./en.json";
import ro from "./ro.json";

setTranslations({ en, ro });
setDefaultLanguage("en");
setLanguageCookie("lang", { path: "/", maxAge: 31540000 });

class App extends React.Component {
  render() {
    return (
      <HelmetProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </HelmetProvider>
    );
  }
}

export default App;
