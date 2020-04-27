import React, { Component } from "react";
import PropTypes from "prop-types";

// npm - react-switch-lang
import { translate } from "react-switch-lang";

class Tech extends Component {
  render() {
    const { t } = this.props;
    return (
      <>
        <div className="card border-light m-4">
          <div className="card-header">{t("tech.title")}</div>
          <div id="stack-card" className="card-body">
            <p id="stack">{t("tech.sub1")}</p>
            <a href="https://reactjs.org/" className="badge badge-primary">
              React.js
            </a>
            &nbsp;&nbsp;
            <a
              style={{
                backgroundColor: "#6610f2",
              }}
              href="https://getbootstrap.com/"
              className="badge badge-secondary"
            >
              Bootstrap
            </a>
            &nbsp;&nbsp;
            <a
              style={{
                backgroundColor: "#bf4080",
              }}
              href="https://sass-lang.com/"
              className="badge badge-secondary"
            >
              Sass
            </a>
            &nbsp;&nbsp;
            <a
              href="https://www.javascript.com/"
              style={{ backgroundColor: "gold" }}
              className="badge badge-warning"
            >
              Javascript
            </a>
            &nbsp;&nbsp;
            <a href="https://jquery.com/" className="badge badge-dark">
              jQuery
            </a>
            &nbsp;&nbsp;
            <span
              style={{
                backgroundColor: "#FF4500	",
              }}
              className="badge badge-success"
            >
              HTML
            </span>
            &nbsp;&nbsp;
            <span className="badge badge-primary">CSS</span>
            <p id="stack2">{t("tech.sub2")}</p>
            <a href="https://nodejs.org/" className="badge badge-success">
              Node.js
            </a>
            &nbsp;&nbsp;
            <a href="https://expressjs.com/" className="badge badge-dark">
              Express.js
            </a>
            &nbsp;&nbsp;
            <a
              href="https://www.djangoproject.com/"
              style={{
                backgroundColor: "#0C4B33",
              }}
              className="badge badge-success"
            >
              Django
            </a>
            &nbsp;&nbsp;
            <a
              href="https://docs.celeryproject.org/"
              style={{ backgroundColor: "#348613" }}
              className="badge badge-dark"
            >
              Celery
            </a>
            &nbsp;&nbsp;
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
