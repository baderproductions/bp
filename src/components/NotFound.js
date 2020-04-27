import React, { Component } from "react";
import PropTypes from "prop-types";

// npm - react-switch-lang
import { translate } from "react-switch-lang";

class NotFound extends Component {
  render() {
    const { t } = this.props;
    return (
      <>
        <div>
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
