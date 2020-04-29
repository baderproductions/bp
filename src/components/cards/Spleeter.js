import React, { Component } from "react";
import PropTypes from "prop-types";

// npm - react-switch-lang
import { translate } from "react-switch-lang";

class Spleeter extends Component {
  render() {
    const { t } = this.props;
    return (
      <>
        <div className="card border-light m-5">
          <div className="card-header">
            {t("spleeter.title")}
            <p>{t("spleeter.subt")}</p>
          </div>

          <div className="card-body">
            <p className="card-text">
              {t("spleeter.p1")}
              <br />
              <br />
              <a id="x" href="https://github.com/deezer/spleeter">
                {t("spleeter.a")}
              </a>
              {t("spleeter.p2")}
            </p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item p-0 pt-2 pb-2">
                Stack:
                <a href="https://reactjs.org/" className="badge badge-primary">
                  React.js
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
                  href="https://docs.celeryproject.org/"
                  style={{ backgroundColor: "#348613" }}
                  className="badge badge-dark"
                >
                  Celery
                </a>
                <a
                  href="https://github.com/deezer/spleeter"
                  className="badge badge-dark"
                >
                  Spleeter by Deezer
                </a>
              </li>
              <li className="list-group-item p-0 pt-2 pb-2">
                Server:
                <a
                  href="https://www.digitalocean.com/"
                  className="badge badge-primary"
                >
                  DigitalOcean
                </a>
                <a
                  href="https://www.nginx.com/"
                  className="badge badge-success"
                >
                  NGINX
                </a>
                <a href="http://supervisord.org/" className="badge badge-dark">
                  Supervisor
                </a>
                <a
                  href="https://gunicorn.org/"
                  style={{ backgroundColor: "#1D692D" }}
                  className="badge badge-success"
                >
                  Gunicorn
                </a>
              </li>
            </ul>
            <div id="spleeter" className="buttons">
              <a
                href="https://github.com/baderproductions/react-django-spleeter"
                className="btn-8"
              >
                {t("spleeter.source")}
              </a>
            </div>
            <p>{t("spleeter.web")}</p>
          </div>
        </div>
      </>
    );
  }
}

Spleeter.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate(Spleeter);
