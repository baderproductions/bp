import React, { Component } from "react";
//import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import bg from "../bg.jpg";
import PropTypes from "prop-types";
import axios from "axios";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Tech from "./cards/Tech";
import Services from "./cards/Services";
import Lsp from "./cards/Lsp";
import Spleeter from "./cards/Spleeter";
import Fb from "./cards/Fb";

import { css } from "@emotion/core";
import SkewLoader from "react-spinners/SkewLoader";

// npm - react-switch-lang
import { translate } from "react-switch-lang";
import CookieConsent from "react-cookie-consent";

// npm - react-messenger-customer-chat
import MessengerCustomerChat from "react-messenger-customer-chat";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      mess: "",
      loading: false,
      success: false,
      error: false,
      status: undefined,
    };

    this.topRef = React.createRef();
    this.stackRef = React.createRef();
    this.proRef = React.createRef();
    this.conRef = React.createRef();
  }

  componentDidMount() {}
  componentWillUnmount() {}

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      loading: false,
      success: false,
      error: false,
    });

    const re = /\S+@\S+\.\S+/;

    if (re.test(this.state.email) === false) {
      this.setState({
        email: "",
      });
      document.getElementById("email-box").style.border = "1.5px solid red";
      document.getElementById("email-box").value = this.state.email;
      document.getElementById("email-box").placeholder =
        "Email address is incorrect";
      document.getElementById("email-box").classList.add("ph");
      this.setState({
        loading: false,
      });
    } else if (this.state.name === "") {
      this.setState({
        name: "",
      });
      document.getElementById("name-box").style.border = "1.5px solid red";
      document.getElementById("name-box").value = this.state.name;
      document.getElementById("name-box").placeholder = "Name is empty";
      document.getElementById("name-box").classList.add("ph");
    } else if (this.state.email === "") {
      this.setState({
        email: "",
      });
      document.getElementById("email-box").style.border = "1.5px solid red";
      document.getElementById("email-box").value = this.state.email;
      document.getElementById("email-box").placeholder = "Email is empty";
      document.getElementById("email-box").classList.add("ph");
    } else if (this.state.mess === "") {
      this.setState({
        mess: "",
      });
      document.getElementById("mess-box").style.border = "1.5px solid red";
      document.getElementById("mess-box").value = this.state.mess;
      document.getElementById("mess-box").placeholder = "Message is empty";
      document.getElementById("mess-box").classList.add("ph");
    } else {
      this.setState({
        loading: true,
      });
      let { name, email, mess } = this.state;
      axios
        .post("https://spleeter.co.uk/email", {
          //make an object to be handled from req.body on the backend.
          email,
          name,
          //change the name to represent text on the backend.
          text: mess,
        })
        .then((res) => {
          this.setState({
            name: "",
            email: "",
            mess: "",
          });
          if (res.data.status === "true") {
            this.setState({
              success: true,
              loading: false,
            });
            document.getElementById("name-box").removeAttribute("placeholder");
            document.getElementById("name-box").classList.remove("ph");
            document.getElementById("email-box").removeAttribute("placeholder");
            document.getElementById("email-box").classList.remove("ph");
            document.getElementById("mess-box").removeAttribute("placeholder");
            document.getElementById("mess-box").classList.remove("ph");

            setTimeout(() => {
              this.setState({
                success: false,
              });
            }, 5000);
          } else {
            this.setState({
              error: true,
              loading: false,
            });
            setTimeout(() => {
              this.setState({
                error: false,
              });
            }, 5000);
          }
        })
        .catch((err) => {
          this.setState({
            error: true,
            loading: false,
          });
          setTimeout(() => {
            this.setState({
              error: false,
            });
          }, 5000);
        });
    }
  };

  render() {
    const { t } = this.props;

    const override = css`
      width: auto;
      height: auto;
      display: block;
      margin: 15px auto;
    `;

    if (this.state.email.includes("@")) {
      document.getElementById("email-box").style.border = "0";
    }

    if (this.state.name !== "") {
      document.getElementById("name-box").style.border = "0";
    }

    if (this.state.email !== "") {
      document.getElementById("email-box").style.border = "0";
    }

    if (this.state.mess !== "") {
      document.getElementById("mess-box").style.border = "0";
    }

    return (
      <>
        <MessengerCustomerChat
          pageId="106105690995533"
          appId="3127150517308819"
          themeColor="#0084ff"
        />
        <CookieConsent
          acceptOnScroll={true}
          acceptOnScrollPercentage={25}
          location="bottom"
          buttonText={t("home.accept")}
          cookieName="cookie-consent"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            color: "white",
            fontSize: "3.5vw",
            textAlign: "center",
            textShadow: "1px 1px black",
          }}
          buttonClasses="cookie-btn"
          containerClasses="cookie-container"
          expires={365}
        >
          {t("home.cookie")}
        </CookieConsent>
        <div className="background">
          <Nav />
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
              <div className="refs">
                <span
                  onClick={() =>
                    window.scrollTo(0, this.stackRef.current.offsetTop)
                  }
                  className="btn-5"
                >
                  <span>{t("home.stack")}</span>
                </span>
                <span
                  onClick={() =>
                    window.scrollTo(0, this.proRef.current.offsetTop)
                  }
                  className="btn-4"
                >
                  <span>{t("home.pro")}</span>
                </span>
                <span
                  onClick={() =>
                    window.scrollTo(0, this.conRef.current.offsetTop)
                  }
                  className="btn-6"
                >
                  <span>{t("home.contact")}</span>
                </span>
              </div>
            </div>
            <div
              ref={this.stackRef}
              id="stack-page"
              className="projects-container"
            >
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
            <div
              ref={this.proRef}
              id="proj-cont"
              className="projects-container"
            >
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
            <div
              ref={this.conRef}
              id="contact-page"
              className="projects-container"
            >
              <form>
                <div className="form-group">
                  <label>{t("contact.name")}</label>
                  <input
                    type="text"
                    id="name-box"
                    className="form-control"
                    placeholder={t("contact.pl1")}
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>{t("contact.email")}</label>
                  <input
                    type="email"
                    id="email-box"
                    className="form-control"
                    placeholder={t("contact.pl2")}
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>{t("contact.mess")}</label>
                  <textarea
                    type="text"
                    rows="4"
                    id="mess-box"
                    className="form-control"
                    placeholder={t("contact.pl3")}
                    value={this.state.mess}
                    onChange={(e) => this.setState({ mess: e.target.value })}
                    required
                  />
                </div>
                <div className="contact-response">
                  {this.state.loading ? (
                    <SkewLoader
                      css={override}
                      size={40}
                      color={"white"}
                      loading={true}
                    />
                  ) : null}
                  {this.state.success ? (
                    <p>
                      <i className="fas fa-check-circle"></i>
                      {t("contact.success")}
                    </p>
                  ) : null}
                  {this.state.error ? (
                    <p>
                      <i className="fas fa-exclamation-circle"></i>
                      {t("contact.fail")}
                    </p>
                  ) : null}
                </div>
                <div onClick={this.handleSubmit} className="btn-10">
                  {t("contact.send")}
                </div>
                <span
                  onClick={() =>
                    window.scrollTo(0, this.topRef.current.offsetTop)
                  }
                  className="btn-up"
                >
                  <i className="fas fa-caret-up"></i>
                </span>
                <label>{t("home.back")}</label>
              </form>
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
