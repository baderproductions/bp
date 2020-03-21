import React from "react";
// Dynamic title
import Helmet from "react-helmet";
// Facebook messenger customer chat
import MessengerCustomerChat from "react-messenger-customer-chat";
import "../../index.scss";
import profilePic from "../../profile.jpg";
import lsLogo from "../../lslogo.png";
import spleeterLogo from "../../spleeter.png";
import bg from "../../12.jpg";
//import cv from "../../cv.pdf";

// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, logged } from "../../actions";

class Home extends React.Component {
  // const counter = useSelector(state => state.counter);
  // const isLogged = useSelector(state => state.isLogged);
  // const dispatch = useDispatch();
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      p1: "",
      p2: "",
      p3: "",
      p4: "",
      t1: "",
      t2: "",
      t3: "",
      t4: ""
    };

    this.introRef = React.createRef();
    this.projectsRef = React.createRef();
    this.aboutRef = React.createRef();
  }

  componentWillMount() {
    document.addEventListener("mousedown", this.closeBind, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.closeBind, false);
  }

  handleBind() {
    this.setState({ open: true });
  }

  closeBind = e => {
    if (this.node.contains(e.target)) {
      return;
    }
    this.setState({ open: false });
  };

  p1State() {
    this.setState({
      t1: "Tell me a little about yourself",
      p1: `If I were to describe myself in one word that would be
      <b>self-taught</b>. Examples: coding (software & web development),
      Adobe Creative Suite (video & photo editing), guitar.
      <br />
      <br />
      Ever since my younger days I was a curious individual. After
      playing for a few days with any of the toys my parents bought for
      me, it always ended by opening them up to find out what are the
      mechanisms that make them work the way they do.
      <br />
      <br />
      At 10 years old I builded my first computer piece by piece. And
      more recently I managed to 'hack(intosh)' my AMD Ryzen computer
      into running both macOS (Apple's OS) and Windows 10 in dual-boot.`,
      t2: "",
      t3: "",
      t4: "",
      p2: "",
      p3: "",
      p4: ""
    });
  }

  p2State() {
    this.setState({
      t2: "What are your biggest weaknesses ?",
      p2: `One that comes to mind right away is getting so absorbed in
      my work that I lose track of time. I know I should be more
      aware of the clock, but when I love what I'm doing I just
      can't think of anything else.
      <br />
      <br />
      Another one would be the fact that I'm brutally honest with
      people around me. Some people are finding this hard to
      swallow but this is my way of making sure that I don't waste
      anybody's time. Going straight to the problem's core and
      fixing it right away.`,
      t1: "",
      t3: "",
      t4: "",
      p1: "",
      p3: "",
      p4: ""
    });
  }

  p3State() {
    this.setState({
      t3: "What is the toughest decision you had to make ?",
      p3: `The story goes such that about two years ago, working a
      factory job in Romania I realised that there's no future for
      me there. I felt stuck in my own country with no options.
      <br />
      <br />
      Therefore I choose to look forward to a decision I wanted to
      make for a long time. I sold my computer and my guitar,
      booked my plane ticket and I flew to England.
      <br />
      <br />
      It was the thoughest decision in my life to leave home with
      £50 cash in my wallet and a plane ticket but it was worth it
      every penny because now I can honestly say that it was the
      best decision I made so far.`,
      t1: "",
      t2: "",
      t4: "",
      p1: "",
      p2: "",
      p4: ""
    });
  }

  p4State() {
    this.setState({
      t4: "Why do you want to leave your current job ?",
      p4: `My current part-time job as a waiter is just to cover the rent and other daily expenses while learning Web Development.
      I've been learning Web Development and working part-time ever since I came to England 1.5 years ago and I'm ready to jump full-time into the career that I always wanted and I worked so hard to learn.
      <br />
      <br />I feel I have to move forward in my career progression
      as a Front-end Web Developer which I've been teaching myself
      for some time now and I am ready to go for it, whatever it
      takes.`,
      t1: "",
      t2: "",
      t3: "",
      p1: "",
      p2: "",
      p3: ""
    });
  }

  render() {
    const page_title = "BADERproductions - Junior Web Developer, London";

    const st = {
      def: {},
      soHide: {
        display: this.state.open ? "block" : "none"
      }
    };

    return (
      <>
        <Helmet>
          <title>{page_title}</title>
        </Helmet>
        <MessengerCustomerChat
          pageId="106105690995533"
          appId="3127150517308819"
          themeColor="#0084ff"
        />
        <div style={{ ...st.def, ...st.soHide }} className="about-modal">
          <h3>
            {this.state.t1 || this.state.t2 || this.state.t3 || this.state.t4}
          </h3>
          <div ref={node => (this.node = node)} className="inner-modal">
            <p
              dangerouslySetInnerHTML={{
                __html:
                  this.state.p1 ||
                  this.state.p2 ||
                  this.state.p3 ||
                  this.state.p4
              }}
            />
          </div>
          <p id="close-touch">Tap outside to close</p>
        </div>
        <div ref={this.introRef} className="about-page">
          {/* <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            id="resume-btn"
            className="btn btn-danger"
          >
            Download resume
            <i className="fas fa-angle-down"></i>
          </a> */}
          <button
            className="intro-scroll"
            onClick={() => window.scrollTo(0, this.introRef.current.offsetTop)}
          >
            <i className="fas fa-circle"></i>
          </button>
          <button
            className="project-scroll"
            onClick={() =>
              window.scrollTo(0, this.projectsRef.current.offsetTop)
            }
          >
            <i className="fas fa-angle-up"></i>
            <i className="fas fa-angle-down"></i>
          </button>
          <button
            className="about-scroll"
            onClick={() => window.scrollTo(0, this.aboutRef.current.offsetTop)}
          >
            <i className="fas fa-angle-double-down"></i>
          </button>
          <div className="darken-layer"></div>
          <img src={bg} alt="Optic Fiber Background Art" />
          <div className="intro">
            <div className="info">
              <h2>Kevin Brian</h2>
              <h1>Junior Web Developer</h1>
              <i className="fas fa-map-marker-alt"></i>
              <p>London, England</p>
            </div>
          </div>
          <div ref={this.projectsRef} className="main-projects">
            <h1>Projects</h1>
            <section className="project-section">
              <div className="card">
                <img
                  src={lsLogo}
                  id="lsp"
                  className="card-img-top"
                  alt="Project Display"
                />
                <div className="card-body">
                  <h5 className="card-title">Lazăr Sergiu Photographer</h5>
                  <img
                    src={lsLogo}
                    id="lsp-body"
                    className="card-img-top"
                    alt="Project Display"
                  />
                  <p className="card-text">
                    React based website builded for a hobbyist photographer.
                    Logo design included.
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">React, Frontend</li>
                </ul>
                <div className="card-body">
                  <i title="Website Link" className="fas fa-globe-europe"></i>
                  <a
                    className="card-link"
                    href="https://lazarsergiuphotographer.com/"
                    title="Website Link"
                  >
                    Website Link
                  </a>
                  <i className="fab fa-github"></i>
                  <a
                    className="card-link"
                    href="https://github.com/baderproductions/lsp"
                    title="Github Source"
                  >
                    Source
                  </a>
                </div>
              </div>
              <div className="card">
                <img
                  src={spleeterLogo}
                  id="spleeter"
                  className="card-img-top"
                  alt="Project Display"
                />

                <div className="card-body">
                  <h5 className="card-title">Spleeter by Deezer</h5>
                  <img
                    src={spleeterLogo}
                    id="spleeter-body"
                    className="card-img-top"
                    alt="Project Display"
                  />
                  <p className="card-text">
                    Spleeter by Deezer uses Tensorflow to separate vocals and
                    accompaniment songs.
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Django, Backend</li>
                </ul>
                <div className="card-body">
                  <i title="Website Link" className="fas fa-globe-europe"></i>
                  <a
                    className="card-link"
                    href="https://spleeter.co.uk/"
                    title="Website Link"
                  >
                    Website Link
                  </a>
                  <i className="fab fa-github"></i>
                  <a
                    className="card-link"
                    href="https://github.com/baderproductions/django-spleeter"
                    title="Github Source"
                  >
                    Source
                  </a>
                </div>
              </div>
            </section>
          </div>
          <div ref={this.aboutRef} className="main-me-sect">
            <h1>About me</h1>
            <div className="me-container">
              <div className="profile-sect">
                <div className="profile">
                  <img
                    className="profile-pic"
                    src={profilePic}
                    alt="Profile Circle"
                  />
                  <div className="information">
                    <div className="country-div">
                      <i
                        title="Country of origin"
                        className="fas fa-globe-europe"
                      ></i>
                      <p title="Country of origin" className="country">
                        Romanian
                      </p>
                    </div>
                    <div className="birth-div">
                      <i title="Date of birth" className="fas fa-baby"></i>
                      <p title="Date of birth" className="birth">
                        23 Years old
                      </p>
                    </div>
                  </div>
                </div>
                <div className="personal-info">
                  <p>
                    Disciplined, detail attentive and a problem-solver.
                    <br />
                    Can easily blend in and adapt to working either as a team
                    member or individually and always get the job done on time.
                  </p>
                </div>
              </div>
            </div>
            <div className="questions">
              <i className="far fa-question-circle"></i>
              <button
                onClick={() => {
                  this.handleBind();
                  this.p1State();
                }}
                type="button"
                className="b1"
              >
                Tell me a little about yourself
              </button>

              <button
                onClick={() => {
                  this.handleBind();
                  this.p2State();
                }}
                type="button"
                className="b2"
              >
                What are your biggest weaknesses ?
              </button>

              <button
                onClick={() => {
                  this.handleBind();
                  this.p3State();
                }}
                type="button"
                className="b3"
              >
                What is the toughest decision you had to make ?
              </button>
              <button
                onClick={() => {
                  this.handleBind();
                  this.p4State();
                }}
                type="button"
                className="b4"
              >
                Why do you want to leave your current job ?
              </button>
            </div>
            <div className="main-footer">
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
                href="https://www.linkedin.com/in/kevin-bader-2137541a2/"
                title="LinkedIn Account"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          {/*
        <h1>Counter: {counter}</h1>
        <button onClick={() => dispatch(increment())}>Add</button>
        <button onClick={() => dispatch(decrement())}>Subtract</button>
        <button onClick={() => dispatch(logged())}>Subtract</button>
        {isLogged ? <h3>Valuable info I shouldn't see</h3> : ""}
        */}
        </div>
      </>
    );
  }
}

export default Home;
