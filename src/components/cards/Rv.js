import React, { Component } from "react";
import PropTypes from "prop-types";

// npm - react-switch-lang
import { translate } from "react-switch-lang";

class Rv extends Component {
  render() {
    const { t } = this.props;
    return (
      <>
        <div className="card border-light m-0">
          <div className="card-header">
            {t("rv.title")}{" "}
            <span href="https://reactjs.org/" className="badge badge-danger">
              {t("rv.prog")}
            </span>
            <p>{t("rv.subt")}</p>
          </div>
          <div className="card-body">
            <p className="card-text">
              {t("rv.p1")}
              {t("rv.p2")}
              <br />
              <br />
              {t("rv.p3")}
            </p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Stack:
                <a href="https://reactjs.org/" className="badge badge-primary">
                  React.js
                </a>
                <a
                  href="https://www.npmjs.com/package/json-server"
                  className="badge badge-dark"
                >
                  JSON Server
                </a>
                <a href="https://nodejs.org/" className="badge badge-success">
                  Node.js
                </a>
                <a href="https://expressjs.com/" className="badge badge-dark">
                  Express.js
                </a>
              </li>
              <li className="list-group-item">
                Server:
                <a
                  href="https://cloud.google.com/"
                  className="badge badge-danger"
                >
                  Google Cloud Computing
                </a>
                <a
                  href="https://www.nginx.com/"
                  className="badge badge-success"
                >
                  NGINX
                </a>
                <a
                  href="http://supervisord.org/"
                  className="badge badge-primary"
                >
                  Supervisor
                </a>
              </li>
            </ul>
            <div className="buttons">
              <a
                href="https://fervent-booth-05a86d.netlify.app"
                className="btn-7"
              >
                {t("rv.demo")}
              </a>
              <a
                href="https://github.com/baderproductions/rv-chef"
                className="btn-8"
              >
                {t("rv.source")}
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Rv.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate(Rv);
