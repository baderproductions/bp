import React, { Component } from "react";
import PropTypes from "prop-types";

// npm - react-switch-lang
import { translate } from "react-switch-lang";

class NotFound extends Component {
  render() {
    const { t } = this.props;
    return (
      <>
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>{t("not.text")}</div>
        </div>
      </>
    );
  }
}

NotFound.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate(NotFound);
