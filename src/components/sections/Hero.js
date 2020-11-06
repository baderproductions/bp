import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Modal from "../elements/Modal";
import bsModal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { AppConfigActions } from "../../redux/actions";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const dispatch = useDispatch();
  const [who, setWho] = useState(false);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [forth, setForth] = useState(false);
  const [fifth, setFifth] = useState(false);
  // const [sixth, setSixth] = useState(false);
  // const [seventh, setSeventh] = useState(false);
  // const [eight, setEight] = useState(false);
  // const [nine, setNine] = useState(false);
  // const [ten, setTen] = useState(false);
  const [formLoad, setFormLoad] = useState(false);
  const { aboutModal, contactModal } = useSelector((state) => state.appConfig);
  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const closeAboutModal = (e) => {
    e.preventDefault();
    document.getElementById("html").style.overflowY = "scroll";
    dispatch(AppConfigActions.toggleAboutModal());
    setWho(false);
    setFirst(false);
    setSecond(false);
    setThird(false);
    setForth(false);
    setFifth(false);
    // setSixth(false);
    // setSeventh(false);
    // setEight(false);
    // setNine(false);
    // setTen(false);
  };

  const closeContactModal = (e) => {
    e.preventDefault();
    document.getElementById("html").style.overflowY = "scroll";
    dispatch(AppConfigActions.toggleContactModal());
  };

  const submitForm = (e) => {
    e.preventDefault();
    setFormLoad(true);
    setTimeout(() => {
      setFormLoad(false);
      alert("Message was sent.");
    }, 4000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              Kevin <span className="text-color-primary">Bader</span>
            </h1>
            <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
              >
                Lifelong learner mindset.
                <br />
                Always on the lookout for problems to solve and ideas to build
                into reality.
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button
                    style={{ color: "#151719" }}
                    tag="div"
                    color="primary"
                    wideMobile
                    onClick={() => dispatch(AppConfigActions.toggleScroll())}
                  >
                    Work
                  </Button>
                  <Button
                    tag="a"
                    color="dark"
                    wideMobile
                    href="https://github.com/baderproductions"
                  >
                    GitHub
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <Modal
            id="about-modal"
            show={aboutModal}
            handleClose={closeAboutModal}
          >
            <bsModal.Header
              style={{
                borderBottom: "0.05rem solid #33363a",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <bsModal.Title>📜 Story time</bsModal.Title>
            </bsModal.Header>
            <bsModal.Body>
              <div className="modal-body-container">
                {who ? (
                  <div className="modal-body-p-container">
                    <div className="modal-body-p">
                      <b>👦 Who am I ?</b>
                      <br />
                      <br />
                      Born in <b>Romania</b> in the summer of 1996, my full name
                      is <b>Kevin Bria Bader</b>, currently{" "}
                      <b>{currentYear - 1996} years old</b> and yes you read
                      that right and you might be wondering two things:
                      <br />
                      <br />
                      1.<b>What kind of name is Bria ?</b> Well, that was the
                      nurse's mistake shortly after being born she asked my mom
                      what she wants to name me and what my mom actually said
                      was Brian but the nurse misheard and wrote down Bria
                      instead. 😅
                      <br />
                      <br />
                      2.<b>Are Kevin or Brian common names in Romania ?</b> Not
                      at all, but I guess my parents had different plans when it
                      came to naming me and I don't blame them. Their name
                      choice influenced my life in a weirdly interesting way,
                      that's all I can say when it comes to my name.
                      <br />
                      <br />
                      When it came to school and school subjects I was doing
                      great only at those who either I had a personal interest
                      in or those at which had great teachers which always made
                      me interested in the subject. When it came to the rest of
                      the subjects I was good enough to pass them at the end of
                      every semester.
                      <br />
                      <br />
                      I followed the basic romanian education plan that ended
                      with high-school which is equivalent to 12th grade.
                      <br />
                      <br />
                      That's how far I my parents afforded to support me in
                      terms of education and even if I was curious to learn
                      more, I wouldn't afford it and also the options I had in
                      my home town were basically zero, zip, none when it came
                      to what I was actually interested in which was computer
                      science.
                      <br />
                      <br />
                      To be continued...
                    </div>
                    <div className="backButton" onClick={() => setWho(false)}>
                      Go back
                    </div>
                  </div>
                ) : first ? (
                  <div className="modal-body-p-container">
                    <div className="modal-body-p">
                      <b>👶 Early curiosity</b>
                      <br />
                      <br />
                      I remember back in my preschool days parents buying me
                      toys like remote control cars and other mechanical toys
                      with which I'd play for a few hours then always
                      disassemble them in order to find out how they work from
                      the inside.
                      <br />
                      <br />
                      At around 10 years old I was given my first computer, it
                      was a Intel Pentium 4 processor and one day, out of
                      curiosity just like I did with all my other toys I took it
                      apart, wrote numbers on every component so I'd know how to
                      put them back together and ever since that day I always
                      assembled my own computers.
                      <br />
                      <br />
                      As I grew up I learned by listening to other people in the
                      industry that we have very similar stories in terms of
                      curiosity and taking things apart to see how they work.
                      <br />
                      <br />
                      <a href="https://www.youtube.com/watch?v=ESd5Nt8sHE0">
                        How I Became a Software Developer @ GitHub - Brooks
                        Swinnerton's
                      </a>{" "}
                      interview is a great example of that mindset. I couldn't
                      have said it better myself in terms of <b>*my story*</b>.
                      <br />
                      <br />
                      To be continued...
                    </div>
                    <div className="backButton" onClick={() => setFirst(false)}>
                      Go back
                    </div>
                  </div>
                ) : second ? (
                  <div className="modal-body-p-container">
                    <div className="modal-body-p">
                      <b>👣 First contact</b>
                      <br />
                      <br />
                      I used to play Metin2, a MMORPG game during high-school
                      with a friend of mine. After a few good months of playing
                      it I got bored even though most of the players (even my
                      friend, to this day) stay addicted to that game, all I
                      wanted was to find out how the game works from the inside,
                      how the mechanics of the gameplay are programmed, the
                      linking of the 3D models and how things get implemented in
                      the game's C++ source code.
                      <br />
                      <br />
                      So I opened my own private-server from open sourced files
                      found on the internet and started messing around with the
                      game's source code (server-side, client-side and
                      database).
                      <br />
                      <br />
                      After getting familiar with how the game works, it hit me
                      one day that there's a player-related vulnerability that I
                      can exploit. Because the Metin2 official servers are hard
                      and take long time investment to get a decent character,
                      players tend to go for the private server which are
                      easier.
                      <br />
                      <br />
                      The vulnerability was that players tend to use the same{" "}
                      <b>username</b> and <b>password</b> for their accounts on
                      the official servers as they do on the private servers. I
                      then started to check if the vulnerability was in fact
                      real and I was right.
                      <br />
                      <br />
                      After exploiting the vulnerability for a few days by
                      cross-checking accounts from private servers on the
                      official servers with the <b>copy-paste</b> method I was
                      thinking <b>How can I make this faster ?</b> and that's
                      how I coded my first VB.Net application by copying pieces
                      of code from{" "}
                      <a href="https://stackoverflow.com/">Stack Overflow</a>{" "}
                      and sticking them together in order to make my computer do
                      the work for me.
                      <br />
                      <br />
                      After getting familiar with <b>
                        Microsoft Visual Studio
                      </b>{" "}
                      I decided to rewrite the application in C# because at that
                      time I liked the syntax and structure of C# more than that
                      of VB.NET (don't ask me why 😅).
                      <br />
                      <br />[ <span>WARNING - bad code ahead</span> ]
                      <br />
                      The code can be seen on GitHub @{" "}
                      <a href="https://github.com/baderproductions/metin2verifyCont">
                        metin2verifyCont
                      </a>
                      , even though I'm not proud of this code, it's a testament
                      of my beginnings as a developer and for my first app I was
                      surprised it actually worked and did what I wanted,
                      sparing me countless hours of doing all that checking
                      manually.
                      <br />
                      <br />
                      To be continued...
                    </div>
                    <div
                      className="backButton"
                      onClick={() => setSecond(false)}
                    >
                      Go back
                    </div>
                  </div>
                ) : third ? (
                  <div className="modal-body-p-container">
                    <div className="modal-body-p">
                      <b>✈ Flying to United Kingdom</b>
                      <br />
                      <br />
                      After high-school I started working factory jobs in
                      Romania that lasted about two years until one day when I
                      felt that I'm wasting my life trapped there without any
                      substantial progress, doing work I had no passion for just
                      to be able to feed myself and keep being stuck.
                      <br />
                      <br />I had to make a change and having decent english
                      understanding, speaking and writing level I decided to
                      sell my computer and guitar and bought a plane ticked to{" "}
                      <b>United Kingdom</b> where I arrived on{" "}
                      <b>16th of October, 2018</b> and two weeks later I started
                      working as a part-time <b>Chef</b> at <b>PizzaExpress</b>.
                      <br />
                      <br />I opted for part-time job because I wanted enough
                      free time to be able to do what really interested me. This
                      job was very easy-going, meet amazing people during my
                      time there and it was just the right balance between free
                      time, housing and living expenses.
                      <br />
                      <br />
                      To be continued...
                    </div>
                    <div className="backButton" onClick={() => setThird(false)}>
                      Go back
                    </div>
                  </div>
                ) : forth ? (
                  <div className="modal-body-p-container">
                    <div className="modal-body-p">
                      <b>🌎 Web development</b>
                      <br />
                      <br />
                      If you read the <b>✈ Flying to United Kingdom</b> chapter
                      you know that on <b>November, 2018</b> I started working
                      as a <b>Chef</b> at <b>PizzaExpress</b> which allowed me
                      to buy the most powerful computer I ever had, which was a
                      requirement for me to be able to do everything I wanted to
                      do from gaming to video editing and the most important
                      thing, after getting bored of all the games was{" "}
                      <b>coding, building something with my own hands.</b>
                      <br />
                      <br />
                      As I didn't play games anymore (reference to the{" "}
                      <b>👣 First contact</b> chapter), I didn't have any ideas
                      of what I should build in order to learn a new programming
                      language or improve the ones I started with, therefore
                      searching for ideas I came across some{" "}
                      <b>life changing people</b> and their YouTube channels, I
                      will name a few in no particular order:
                      <br />
                      <b>
                        Brad @{" "}
                        <a href="https://www.youtube.com/user/TechGuyWeb">
                          Traversy Media
                        </a>
                      </b>
                      <br />
                      <b>
                        Ed @{" "}
                        <a href="https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q">
                          Dev Ed
                        </a>{" "}
                        (fellow romanian)
                      </b>
                      <br />
                      <b>
                        Kyle @{" "}
                        <a href="https://www.youtube.com/c/WebDevSimplified">
                          Web Dev Simplified
                        </a>
                      </b>
                      <br />
                      <br />
                      That's how I got <b>inspired</b> and started{" "}
                      <b>learning web development</b> from scratch. Started with{" "}
                      <b>HTML, CSS, JAVASCRIPT and jQuery</b> as most newbies do
                      and after playing around with those for about one week I
                      noticed a very interesting things that some websites did
                      and I couldn't replicate with vanilla HTML, CSS and
                      JAVASCRIPT.
                      <br />
                      <br />
                      To be continued...
                    </div>
                    <div className="backButton" onClick={() => setForth(false)}>
                      Go back
                    </div>
                  </div>
                ) : fifth ? (
                  <div className="modal-body-p-container">
                    <div className="modal-body-p">
                      <b>📘 React.js library</b>
                      <br />
                      <br />
                      As I said in the previous chapter, I noticed some
                      interesting things that some websites did and I couldn't
                      replicate the way I've seen with just vanilla{" "}
                      <b>HTML, CSS and JAVASCRIPT</b>, for instance if I want to
                      build a website with more than one pages, the website will{" "}
                      <b>refresh</b> everytime I go to the other pages.
                      <br />
                      <br />
                      After doing some research on{" "}
                      <a href="https://stackoverflow.com/">Stack Overflow</a> I
                      found out that the way you do what I was looking for is
                      with a Javascript library and the first I stumbled upon
                      was{" "}
                      <b>
                        <a href="https://reactjs.org/">React.js</a>
                      </b>{" "}
                      which has this object called{" "}
                      <b>
                        <a href="https://reactjs.org/docs/react-dom.html">
                          ReactDOM
                        </a>
                      </b>{" "}
                      that basically attaches itself to one HTML{" "}
                      <b>"root" element</b> and from there on you build your
                      HTML as components inside the <b>React app</b> with a
                      specific syntax called{" "}
                      <b>
                        <a href="https://reactjs.org/docs/introducing-jsx.html">
                          JSX
                        </a>
                      </b>
                      .
                      <br />
                      <br />
                      After discovering <b>Javascript libraries</b> it felt like
                      unlocking the level of a game, from here on the
                      possibilities for building complex website structures were
                      endless.
                      <br />
                      <br />
                      To be continued...
                    </div>
                    <div className="backButton" onClick={() => setFifth(false)}>
                      Go back
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="modal-body-item">
                      <div className="modal-body-upper">
                        <div
                          onClick={() => setWho(true)}
                          className="modal-body-dot"
                        ></div>
                      </div>
                      <div className="modal-body-lower">👦 Who am I ?</div>
                    </div>
                    <div className="modal-body-item">
                      <div className="modal-body-upper">
                        <div
                          onClick={() => setFirst(true)}
                          className="modal-body-dot"
                        ></div>
                      </div>
                      <div className="modal-body-lower">👶 Early curiosity</div>
                    </div>
                    <div className="modal-body-item">
                      <div className="modal-body-upper">
                        <div
                          onClick={() => setSecond(true)}
                          className="modal-body-dot"
                        ></div>
                      </div>
                      <div className="modal-body-lower">👣 First contact</div>
                    </div>
                    <div className="modal-body-item">
                      <div className="modal-body-upper">
                        <div
                          onClick={() => setThird(true)}
                          className="modal-body-dot"
                        ></div>
                      </div>
                      <div className="modal-body-lower">
                        ✈ Flying to United Kingdom
                      </div>
                    </div>
                    <div className="modal-body-item">
                      <div className="modal-body-upper">
                        <div
                          onClick={() => setForth(true)}
                          className="modal-body-dot"
                        ></div>
                      </div>
                      <div className="modal-body-lower">🌎 Web development</div>
                    </div>
                    <div className="modal-body-item">
                      <div className="modal-body-upper">
                        <div
                          onClick={() => setFifth(true)}
                          className="modal-body-dot"
                        ></div>
                      </div>
                      <div className="modal-body-lower">
                        📘 React.js library
                      </div>
                    </div>
                  </>
                )}
              </div>
            </bsModal.Body>
            <bsModal.Footer
              style={{
                borderTop: "0.05rem solid #33363a",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                style={{ color: "#151719" }}
                className="button button-primary button-wide-mobile button-sm"
                onClick={closeAboutModal}
              >
                Close
              </Button>
            </bsModal.Footer>
          </Modal>
          <Modal
            id="contact-modal"
            show={contactModal}
            handleClose={closeContactModal}
          >
            <bsModal.Header
              style={{
                borderBottom: "0.05rem solid #33363a",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <bsModal.Title>✉ Get in touch</bsModal.Title>
            </bsModal.Header>
            <bsModal.Body>
              <div className="modal-body-container">
                <div className="modal-body-c-container">
                  <div className="modal-body-c">Work in progress...</div>
                </div>
              </div>
            </bsModal.Body>
            <bsModal.Footer
              style={{
                borderTop: "0.05rem solid #33363a",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {formLoad ? (
                <div className="load-spinner">❎</div>
              ) : (
                <>
                  <div
                    style={{ color: "#151719" }}
                    className="button button-send button-wide-mobile button-sm"
                    onClick={submitForm}
                  >
                    Send
                  </div>
                  <div className="closeButton" onClick={closeContactModal}>
                    Close
                  </div>
                </>
              )}
            </bsModal.Footer>
          </Modal>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
