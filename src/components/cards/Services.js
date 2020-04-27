import React, { Component } from "react";
import PropTypes from "prop-types";

// npm - react-switch-lang
import { translate } from "react-switch-lang";

class Services extends Component {
  render() {
    const { t } = this.props;
    return (
      <>
        <div className="card border-light m-4">
          <div className="card-header">{t("services.title")}</div>
          <div id="stack-card" className="card-body">
            <p id="stack">{t("services.sub1")}</p>
            <a href="https://cloud.google.com/" className="badge badge-danger">
              Google Cloud
            </a>
            &nbsp;&nbsp;
            <a href="https://azure.microsoft.com/" className="badge badge-dark">
              Microsoft Azure
            </a>
            &nbsp;&nbsp;
            <a href="https://aws.amazon.com/" className="badge badge-warning">
              Amazon Web Services
            </a>
            &nbsp;&nbsp;
            <a
              href="https://www.digitalocean.com/"
              className="badge badge-primary"
            >
              DigitalOcean
            </a>
            <p id="stack2">{t("services.sub2")}</p>
            <a href="https://www.nginx.com/" className="badge badge-success">
              NGINX
            </a>
            &nbsp;&nbsp;
            <a
              href="https://www.apache.org/"
              style={{ backgroundColor: "#282661" }}
              className="badge badge-success"
            >
              Apache
            </a>
            &nbsp;&nbsp;
            <a href="http://supervisord.org/" className="badge badge-primary">
              Supervisor
            </a>
            &nbsp;&nbsp;
            <a
              href="https://gunicorn.org/"
              style={{ backgroundColor: "#1D692D" }}
              className="badge badge-success"
            >
              Gunicorn
            </a>
          </div>
        </div>
      </>
    );
  }
}

Services.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate(Services);
