import React from "react";
import Helmet from "react-helmet";
import logoBP from "../../logo.png";

export default class NotFound extends React.Component {
  render() {
    const page_title = "BADERproductions - Page not found";
    return (
      <>
        <Helmet>
          <title>{page_title}</title>
        </Helmet>
        <div className="notfound-container">
          <img src={logoBP} alt="BADERproductions Logo" />
          <h1>Page not found</h1>
          <p>The page you tried to access was not found</p>
        </div>
      </>
    );
  }
}
