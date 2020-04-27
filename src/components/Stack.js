import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Tech from "./cards/Tech";
import Services from "./cards/Services";
import Nav from "./Nav";
import bg from "../bg.jpg";

export default class Stack extends Component {
  render() {
    return (
      <>
        <div className="background">
          <Nav />
          <div className="body">
            <div className="darken"></div>
            <img src={bg} alt="Background Art" />
            <div id="stack-page" className="projects-container">
              <Carousel
                showThumbs={false}
                style={{
                  backgroundColor: "transparent",
                }}
              >
                <Tech />
                <Services />
              </Carousel>
            </div>
          </div>
        </div>
      </>
    );
  }
}
