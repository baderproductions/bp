import React, { Component } from "react";
import Nav from "./Nav";
import Lsp from "./cards/Lsp";
import Spleeter from "./cards/Spleeter";
import Fb from "./cards/Fb";
import bg from "../bg.jpg";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="background">
          <Nav />
          <div className="body">
            <div className="darken"></div>
            <img src={bg} alt="Background Art" />
            <div id="proj-cont" className="projects-container">
              <Lsp />
              <Spleeter />
              <Fb />
            </div>
          </div>
        </div>
      </>
    );
  }
}
