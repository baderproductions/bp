import React from "react";
import "../../index.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="main-nav">
          <div id="brand" />
        </div>
        <div className="first-page">
          <div className="landing-info">
            <h2>Kevin Brian</h2>
            <h1>Frontend Web Developer</h1>
            <i className="fas fa-map-marker-alt"></i>
            <p>London, England</p>
          </div>
        </div>
        <div className="second-page">
          <h1>Projects</h1>
          <section className="project-section">
            <div className="project-1">
              <div className="project-front">
                <div className="project-one-img"></div>
              </div>
              <div className="project-back">
                <h2>Project One</h2>
                <a href="https://github.com/1" title="GitHub Project Link">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
            <div className="project-2">
              <div className="project-front">
                <div className="project-two-img"></div>
              </div>
              <div className="project-back">
                <h2>Project Two</h2>
                <a href="https://github.com/2" title="GitHub Project Link">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
            <div className="project-3">
              <div className="project-front">
                <div className="project-three-img"></div>
              </div>
              <div className="project-back">
                <h2>Project Three</h2>
                <a href="https://github.com/3" title="GitHub Project Link">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </section>
        </div>
        <div className="footer">
          <div className="social-media">
            <a
              href="https://github.com/baderproductions"
              title="GitHub Account"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com/baderproductions/"
              title="Instagram Account"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com/BADERproductio1"
              title="Twitter Account"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
