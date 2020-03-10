import React from "react";
import Helmet from "react-helmet";
import "../../index.scss";
import profilePic from "../../profile.jpg";
import bg from "../../bg.jpg";

// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, logged } from "../../actions";

class About extends React.Component {
  // const counter = useSelector(state => state.counter);
  // const isLogged = useSelector(state => state.isLogged);
  // const dispatch = useDispatch();

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    let scrollPos = window.pageYOffset;
    console.log(scrollPos);
  }

  render() {
    const page_title = "BADERproductions - Home";
    return (
      <>
        <Helmet>
          <title>{page_title}</title>
        </Helmet>
        <div className="about-page">
          <div className="darken-layer"></div>
          <img src={bg} alt="Optic Fiber Background Art" />
          <div className="intro">
            <div className="info">
              <h2>Kevin Brian</h2>
              <h1>Frontend Web Developer</h1>
              <i className="fas fa-map-marker-alt"></i>
              <p>London, England</p>
            </div>
          </div>
          <div className="main-projects">
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
          <div className="main-me-sect">
            <div className="me-container">
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
                      23
                    </p>
                  </div>
                </div>
              </div>
              <div className="main-me">
                <p>
                  Disciplined, detail attentive and a problem-solver.
                  <br />
                  Can easily blend in and adapt to working either as a team
                  member or individually and always get the job done on time.
                </p>
              </div>
            </div>
            <div className="questions">
              <i className="far fa-question-circle"></i>
              {/*
              <div className="buttons">
                <button type="button" className="collapse">
                  Tell me a little about yourself.
                </button>
                <div className="answer1">
                  <p>
                    If I were to describe myself in one word that would be <b />
                    self-taught
                    <b />. Examples: Coding (Software & Web Development), Adobe
                    Creative Suite (Video & Photo editing), Guitar.
                    <br />
                    <br />
                    Ever since my younger days I was a curious individual. After
                    playing for a few days with any of the toys my parents
                    bought me, it always ended by opening them up to find out
                    what are the mechanisms that make them work the way they do.
                    <br />
                    <br />
                    At 10 years old I builded my first computer piece by piece.
                    <br />
                    And more recently I managed to 'hack(intosh)' my AMD Ryzen
                    computer into running macOS (Apple's OS), running both
                    Windows 10 and macOS High Sierra in dual-boot.
                  </p>
                </div>
                <button type="button" className="collapse">
                  What are your biggest weaknesses ?
                </button>
                <div className="answer2">
                  <p>
                    One that comes to mind right away is getting so absorbed in
                    my work that I lose track of time. I know I should be more
                    aware of the clock, but when I love what I'm doing I just
                    can't think of anything else.
                    <br />
                    <br />
                    Another one would be the fact that I'm brutally honest with
                    people around me. Some people are finding this hard to
                    swallow but this is my way of making sure that I don't waste
                    anybody's time. Going straight to the problem's core and
                    fixing it right away.
                  </p>
                </div>
                <button type="button" className="collapse">
                  Tell me about the toughest decision you had to make in the
                  past years.
                </button>
                <div className="answer3">
                  <p>
                    The story goes such that about two years ago, working a
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
                    best decision I ever made.
                  </p>
                </div>
                <button type="button" className="collapse">
                  Why do you want to leave your current job ?
                </button>
                <div className="answer4">
                  <p>
                    Don't get me wrong, my current job as a Chef is a great
                    artistic escape and I really enjoy cooking because is a
                    primal thing we all share. I've had this job for 1.5 years
                    now, it's not a full-time job and the only reason I've had
                    theis job is to pay the bills while I was learning Web
                    Development.
                    <br />
                    <br />I feel I have to move forward in my career progression
                    as a Front-end Web Developer which I've been teaching myself
                    for some time now and I am ready to go for it, whatever it
                    takes.
                  </p>
                </div>
              </div>
              */}
            </div>
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

export default About;
