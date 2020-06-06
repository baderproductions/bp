import React, { Component } from "react";
import PropTypes from "prop-types";

// npm - react-switch-lang
import { translate } from "react-switch-lang";

class Lsp extends Component {
  render() {
    const { t } = this.props;
    return (
      <>
        <div className="card border-light m-0">
          <div className="card-header">
            {t("lsp.title")}
            <p>{t("lsp.subt")}</p>
          </div>
          <div className="card-body">
            <p className="card-text">
              {t("lsp.p1")}
              <br />
              <br />
              {t("lsp.p2")}
              <a id="x" href="https://lazarsergiuphotographer.com/lsp">
                {t("lsp.a")}
              </a>
              {t("lsp.p3")}
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
              <a href="https://lazarsergiuphotographer.com/" className="btn-7">
                {t("lsp.web")}
              </a>
              <a
                href="https://github.com/baderproductions/lsp"
                className="btn-8"
              >
                {t("lsp.source")}
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Lsp.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate(Lsp);
