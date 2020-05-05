import React, { Component } from "react";
import PropTypes from "prop-types";

// npm - react-switch-lang
import { translate } from "react-switch-lang";

class Tech extends Component {
  render() {
    const { t } = this.props;
    return (
      <>
        <div className="card border-light ml-5 mr-5 mt-0 mb-0">
          <div className="card-header">{t("tech.title")}</div>
          <div id="stack-card" className="card-body">
            <p id="stack">{t("tech.sub1")}</p>
            <a href="https://reactjs.org/" className="badge badge-primary">
              React.js
            </a>
            <a
              style={{
                backgroundColor: "#6610f2",
              }}
              href="https://getbootstrap.com/"
              className="badge badge-secondary"
            >
              Bootstrap
            </a>
            <a
              style={{
                backgroundColor: "#bf4080",
              }}
              href="https://sass-lang.com/"
              className="badge badge-secondary"
            >
              Sass
            </a>
            <a
              href="https://www.javascript.com/"
              style={{ backgroundColor: "gold" }}
              className="badge badge-warning"
            >
              Javascript
            </a>
            <a href="https://jquery.com/" className="badge badge-dark">
              jQuery
            </a>
            <span
              style={{
                backgroundColor: "#FF4500	",
              }}
              className="badge badge-success"
            >
              HTML
            </span>
            <span className="badge badge-primary">CSS</span>
            <p id="stack2">{t("tech.sub2")}</p>
            <a href="https://nodejs.org/" className="badge badge-success">
              Node.js
            </a>
            <a href="https://expressjs.com/" className="badge badge-dark">
              Express.js
            </a>
            <a
              href="https://www.djangoproject.com/"
              style={{
                backgroundColor: "#0C4B33",
              }}
              className="badge badge-success"
            >
              Django
            </a>
            <a
              href="https://www.php.net/"
              style={{ backgroundColor: "#7249AE" }}
              className="badge badge-secondary"
            >
              PHP
            </a>
          </div>
        </div>
      </>
    );
  }
}

Tech.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate(Tech);
