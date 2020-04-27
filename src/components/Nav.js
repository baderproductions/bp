import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

// npm - react-switch-lang
import { setLanguage, translate } from "react-switch-lang";
import { Cookies } from "react-cookie-consent";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      extra: false,
      langSwitch: false,
    };
    this.handleSwitch = this.handleSwitch.bind(this);
  }

  componentDidMount() {
    // Detect page and add Back button
    let href = window.location.href;
    let locationIndex = href.lastIndexOf("/");
    let location = href.substring(locationIndex);

    if (location === "/projects") {
      this.setState({
        extra: true,
      });
    } else if (location === "/stack") {
      this.setState({
        extra: true,
      });
    } else if (location === "/contact") {
      this.setState({
        extra: true,
      });
    } else {
      this.setState({
        extra: false,
      });
    }

    // Lang switch buttons
    if (Cookies.get("lang") === "ro") {
      this.setState({
        langSwitch: true,
      });
    } else if (Cookies.get("lang") === undefined) {
      this.setState({
        langSwitch: false,
      });
    } else {
      this.setState({
        langSwitch: false,
      });
    }
  }

  handleSwitch() {
    this.setState({ langSwitch: !this.state.langSwitch });
  }

  handleSetLanguage = (key) => () => {
    setLanguage(key);
    this.handleSwitch();
  };

  render() {
    const { t } = this.props;
    return (
      <>
        <div className="nav">
          {this.state.extra ? (
            <NavLink className="go-back" to="/">
              <i className="fas fa-chevron-circle-left"></i>
              <p>{t("nav.back")}</p>
            </NavLink>
          ) : null}
          <div className="media">
            <a title={t("nav.git")} href="https://github.com/baderproductions">
              <i className="fab fa-github-square"></i>
            </a>
            <a
              title={t("nav.li")}
              href="https://www.linkedin.com/in/kevin-bader-2137541a2/"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              title={t("nav.fb")}
              href="https://www.facebook.com/baderproductions/"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
          </div>
          <div className="lang">
            {this.state.langSwitch ? (
              <>
                <span
                  onClick={this.handleSetLanguage("en")}
                  title={t("nav.en")}
                  className="flag-icon flag-icon-gb"
                ></span>
                <span
                  style={{ filter: "grayscale(100%)", pointerEvents: "none" }}
                  title={t("nav.ro")}
                  className="flag-icon flag-icon-ro"
                ></span>
              </>
            ) : (
              <>
                <span
                  style={{ filter: "grayscale(100%)", pointerEvents: "none" }}
                  title={t("nav.en")}
                  className="flag-icon flag-icon-gb"
                ></span>
                <span
                  onClick={this.handleSetLanguage("ro")}
                  title={t("nav.ro")}
                  className="flag-icon flag-icon-ro"
                ></span>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}

Nav.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate(Nav);
