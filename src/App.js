import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
// Pages
import Home from "./components/Pages/Home";
import NotFound from "./components/Pages/NotFound";
import "./index.scss";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
