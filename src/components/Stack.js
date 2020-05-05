import React, { Component } from "react";
import PropTypes from "prop-types";
import { translate } from "react-switch-lang";

import Tech from "./cards/Tech";
import Services from "./cards/Services";
import bg from "../bg.jpg";

class Stack extends Component {
  render() {
    const { t } = this.props;
    return (
      <>
        <div className="background">
          <div className="body">
            <div className="darken"></div>
            <img src={bg} alt="Background Art" />
            <div id="stack-page" className="projects-container">
              <div className="stack-container">{t("home.stackCont")}</div>
              <Tech />
              <Services />
            </div>
          </div>
        </div>
      </>
    );
  }
}

Stack.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate(Stack);
