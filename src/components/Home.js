import React, { Component } from "react";
import Nav from "./Nav";
import bg from "../bg.jpg";
import PropTypes from "prop-types";
//import axios from "axios";
import Tech from "./cards/Tech";
import Services from "./cards/Services";
import TagManager from "react-gtm-module";
import Carousel from "@brainhubeu/react-carousel";
import { CSSTransition } from "react-transition-group";
import { translate } from "react-switch-lang";

// Google Analitics
const tagManagerArgs = {
  gtmId: "GTM-KLC4WCB",
};

TagManager.initialize(tagManagerArgs);

class Home extends Component {
  constructor() {
    super();
    this.state = {
      nameValidation: false,
      emailValidation: false,
      messValidation: false,
      loading: false,
      success: false,
      error: false,
      isTop: false,
      status: undefined,
    };

    this.topRef = React.createRef();
    this.stackRef = React.createRef();
    this.proRef = React.createRef();
    this.conRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 399) {
        this.setState({ isTop: true });
      } else {
        this.setState({ isTop: false });
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", () => {
      if (window.scrollY > 399) {
        this.setState({ isTop: true });
      } else {
        this.setState({ isTop: false });
      }
    });
  }

  render() {
    const { t } = this.props;
    let currentYear = new Date().getFullYear();

    return (
      <>
        <div className="background">
          <Nav />
          <CSSTransition
            in={this.state.isTop}
            timeout={1000}
            classNames="up"
            unmountOnExit
          >
            <div
              onClick={() => window.scrollTo(0, this.topRef.current.offsetTop)}
              className="up-cont"
            >
              <span
                onClick={() =>
                  window.scrollTo(0, this.topRef.current.offsetTop)
                }
                className="btn-up"
              >
                <i className="fas fa-caret-up"></i>
              </span>
            </div>
          </CSSTransition>
          <div className="body">
            <div className="darken"></div>
            <img src={bg} alt="Background Art" />
            <span ref={this.topRef}></span>

            <div className="intro">
              <div className="text-container">
                <p className="hello">
                  {t("home.p1")}
                  <span id="span1">{t("home.p2")}</span>.
                  <br />
                  {t("home.p3")}
                </p>
              </div>
            </div>

            <div
              ref={this.stackRef}
              id="stack-page"
              className="projects-container"
            >
              <div className="stack-container">
                <p id="title">{t("home.stackCont")}</p>
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
                  <Tech />
                  <Services />
                </Carousel>
              </div>
            </div>
            <div
              ref={this.conRef}
              id="contact-page"
              className="projects-container"
            >
              <div className="copy">{currentYear} &copy; BADERproductions</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Home.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate(Home);
