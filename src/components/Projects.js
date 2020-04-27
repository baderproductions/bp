import React, { Component } from "react";
import Nav from "./Nav";
import Lsp from "./cards/Lsp";
import Spleeter from "./cards/Spleeter";
import Fb from "./cards/Fb";
import bg from "../bg.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
            <div className="projects-container">
              <Carousel
                showThumbs={false}
                style={{
                  backgroundColor: "transparent",
                }}
              >
                <Lsp />
                <Spleeter />
                <Fb />
              </Carousel>
            </div>
          </div>
        </div>
      </>
    );
  }
}
