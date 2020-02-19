import React from 'react';
import {
  Route,
  BrowserRouter,
  Switch
} from "react-router-dom";
import "./index.scss";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import NotFound from "./components/Pages/NotFound";

class App extends React.Component {

  render(){
    return(
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route component={NotFound}/>
        </Switch>
        </BrowserRouter>
    )
  }
}

export default App;
