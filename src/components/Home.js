import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import bg from "../bg.jpg";
import PropTypes from "prop-types";

// npm - react-switch-lang
import { translate } from "react-switch-lang";
import CookieConsent from "react-cookie-consent";

// npm - react-messenger-customer-chat
import MessengerCustomerChat from "react-messenger-customer-chat";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    const { t } = this.props;
    return (
      <>
        <MessengerCustomerChat
          pageId="106105690995533"
          appId="3127150517308819"
          themeColor="#0084ff"
        />
        <CookieConsent
          enableDeclineButton
          flipButtons
          location="bottom"
          buttonText={t("home.accept")}
          declineButtonText={t("home.decline")}
          cookieName="cookie-consent"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            color: "white",
            fontSize: "3.5vw",
            textAlign: "center",
            textShadow: "1px 1px black",
          }}
          buttonStyle={{
            outline: "none",
            color: "#fff",
            fontSize: "13px",
            textShadow: "1px 1px black",
            border: "1px solid white",
            background: "transparent",
          }}
          declineButtonStyle={{
            outline: "none",
            color: "#fff",
            fontSize: "13px",
            textShadow: "1px 1px black",
            border: "1px solid white",
            background: "transparent",
          }}
          expires={365}
        >
          {t("home.cookie")}
        </CookieConsent>
        <div className="background">
          <Nav />
          <div className="body">
            <div className="darken"></div>
            <img src={bg} alt="Background Art" />
            <div className="text-container">
              <p className="hello">
                <span id="span1">{t("home.p1")}</span>
                {t("home.p2")}
                <br />
                {t("home.p3")}
              </p>
            </div>
            <NavLink className="btn-4" to="/projects">
              <span>{t("home.pro")}</span>
            </NavLink>
            <NavLink className="btn-5" to="/stack">
              <span>{t("home.stack")}</span>
            </NavLink>
            <NavLink className="btn-6" to="/">
              <span>{t("home.contact")}</span>
            </NavLink>
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
