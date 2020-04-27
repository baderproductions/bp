import React, { Component } from "react";
import Nav from "./Nav";
import bg from "../bg.jpg";
import PropTypes from "prop-types";

// npm - react-switch-lang
import { translate } from "react-switch-lang";

class Contact extends Component {
  render() {
    const { t } = this.props;
    return (
      <>
        <div className="background">
          <Nav />
          <div className="body">
            <div className="darken"></div>
            <img src={bg} alt="Background Art" />
            <div id="stack-page" className="projects-container">
              <form>
                <div className="form-group">
                  <label>{t("contact.name")}</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={t("contact.pl1")}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>{t("contact.email")}</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder={t("contact.pl2")}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>{t("contact.mess")}</label>
                  <textarea
                    type="text"
                    rows="4"
                    className="form-control"
                    placeholder={t("contact.pl3")}
                    required
                  />
                </div>
                <div className="btn-10">{t("contact.send")}</div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Contact.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate(Contact);
