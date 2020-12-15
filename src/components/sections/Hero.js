import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Modal from "../elements/Modal";
import Spinner from "react-bootstrap/Spinner";
import bsModal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AppConfigActions } from "../../redux/actions";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation("common");
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
  const [isLoading, setLoad] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
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
  const disableCloseContactModal = (e) => {
    e.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      msg: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(1).required(t("hero.requiredName")),
      email: Yup.string()
        .email(t("hero.emailValidation"))
        .required(t("hero.requiredEmail")),
    }),
    onSubmit: (values, { setSubmitting, setErrors, setStatus, resetForm }) => {
      setLoad(true);
      axios
        .post(process.env.REACT_APP_EMAIL, {
          name: values.name,
          email: values.email,
          msg: values.msg,
        })
        .then((res) => {
          if (res.data.status === "true") {
            resetForm({});
            setLoad(false);
            setSuccess(true);
            setTimeout(() => {
              setSuccess(false);
            }, 4000);
          } else {
            resetForm({});
            setLoad(false);
            setError(true);
            setTimeout(() => {
              setError(false);
            }, 4000);
          }
        })
        .catch(() => {
          setLoad(false);
          setError(true);
          resetForm({});
          setTimeout(() => {
            setError(false);
          }, 4000);
        });
    },
  });

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div data-aos="zoom-in" className="hero-content container-xs">
            <h1>
              Kevin <span className="text-color-primary">Bader</span>
            </h1>
            <div>
              <p>
                Self-taught, lifelong learner always on the lookout for problems to solve and ideas to build into reality.
              </p>
              <div>
                <ButtonGroup>
                  <Button
                    style={{ color: "#151719" }}
                    tag="div"
                    color="primary"
                    wideMobile
                    onClick={() => dispatch(AppConfigActions.toggleScroll())}
                  >
                    {t("hero.work")}
                  </Button>
                  <Button
                    tag="a"
                    color="black"
                    wideMobile
                    href="https://github.com/baderproductions"
                  >
                    GitHub
                  </Button>
                  <Button
                    style={{ color: "#151719" }}
                    tag="div"
                    color="primary"
                    wideMobile
                    onClick={() =>
                      dispatch(AppConfigActions.toggleScrollStack())
                    }
                  >
                    Stack
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
              <bsModal.Title>{t("modal.header")}</bsModal.Title>
            </bsModal.Header>
            <bsModal.Body>
              <div className="modal-body-container">
                {who ? (
                  <div className="modal-body-p-container">
                    <div className="modal-body-p">
                      <b>{t("modal.who")}</b>
                      <br />
                      <br />
                      {t("modal.who1")}
                      {t("modal.who2")}
                      <br />
                      <br />
                      {t("modal.who3")}
                      <br />
                      <br />
                      {t("modal.who4")}
                      <br />
                      <br />
                      {t("modal.who5")}
                      <br />
                      <br />
                      {t("modal.who6")}
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div className="backButton" onClick={() => setWho(false)}>
                        {t("modal.menu")}
                      </div>
                      <div
                        className="backButton"
                        onClick={() => {
                          setWho(false);
                          setFirst(true);
                        }}
                      >
                        {t("modal.next")}
                      </div>
                    </div>
                  </div>
                ) : first ? (
                  <div className="modal-body-p-container">
                    <div className="modal-body-p">
                      <b>{t("modal.first")}</b>
                      <br />
                      <br />
                      {t("modal.first1")}
                      <br />
                      <br />
                      {t("modal.first2")}
                      <br />
                      <br />
                      {t("modal.first3")}
                      <br />
                      <br />
                      <a href="https://www.youtube.com/watch?v=ESd5Nt8sHE0">
                        How I Became a Software Developer @ GitHub - Brooks
                        Swinnerton
                      </a>
                      {t("modal.first4")}
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div
                        className="backButton"
                        onClick={() => {
                          setWho(false);
                          setFirst(false);
                          setSecond(false);
                          setThird(false);
                          setForth(false);
                          setFifth(false);
                        }}
                      >
                        {t("modal.menu")}
                      </div>
                      <div
                        className="backButton"
                        onClick={() => {
                          setFirst(false);
                          setWho(true);
                        }}
                      >
                        {t("modal.back")}
                      </div>
                      <div
                        className="backButton"
                        onClick={() => {
                          setFirst(false);
                          setSecond(true);
                        }}
                      >
                        {t("modal.next")}
                      </div>
                    </div>
                  </div>
                ) : second ? (
                  <div className="modal-body-p-container">
                    <div className="modal-body-p">
                      <b>{t("modal.second")}</b>
                      <br />
                      <br />
                      {t("modal.second1")}
                      <br />
                      <br />
                      {t("modal.second2")}
                      <br />
                      <br />
                      {t("modal.second3")}
                      <br />
                      <br />
                      {t("modal.second4")}
                      <br />
                      <br />
                      {t("modal.second5")}
                      <a href="https://stackoverflow.com/">Stack Overflow</a>
                      {t("modal.second6")}
                      <br />
                      <br />
                      {t("modal.second7")}
                      <br />
                      <br />[<span>{t("modal.second8")}</span>]
                      <br />
                      {t("modal.second9")}
                      <a href="https://github.com/baderproductions/metin2verifyCont">
                        metin2verifyCont
                      </a>
                      {t("modal.second10")}
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div
                        className="backButton"
                        onClick={() => {
                          setWho(false);
                          setFirst(false);
                          setSecond(false);
                          setThird(false);
                          setForth(false);
                          setFifth(false);
                        }}
                      >
                        {t("modal.menu")}
                      </div>
                      <div
                        className="backButton"
                        onClick={() => {
                          setSecond(false);
                          setFirst(true);
                        }}
                      >
                        {t("modal.back")}
                      </div>
                      <div
                        className="backButton"
                        onClick={() => {
                          setSecond(false);
                          setThird(true);
                        }}
                      >
                        {t("modal.next")}
                      </div>
                    </div>
                  </div>
                ) : third ? (
                  <div className="modal-body-p-container">
                    <div className="modal-body-p">
                      <b>{t("modal.third")}</b>
                      <br />
                      <br />
                      {t("modal.third1")}
                      <br />
                      <br />
                      {t("modal.third2")}
                      <a href="https://www.pizzaexpress.com/">PizzaExpress</a>.
                      <br />
                      <br />
                      {t("modal.third3")}
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div
                        className="backButton"
                        onClick={() => {
                          setWho(false);
                          setFirst(false);
                          setSecond(false);
                          setThird(false);
                          setForth(false);
                          setFifth(false);
                        }}
                      >
                        {t("modal.menu")}
                      </div>
                      <div
                        className="backButton"
                        onClick={() => {
                          setThird(false);
                          setSecond(true);
                        }}
                      >
                        {t("modal.back")}
                      </div>
                      <div
                        className="backButton"
                        onClick={() => {
                          setThird(false);
                          setForth(true);
                        }}
                      >
                        {t("modal.next")}
                      </div>
                    </div>
                  </div>
                ) : forth ? (
                  <div className="modal-body-p-container">
                    <div className="modal-body-p">
                      <b>{t("modal.forth")}</b>
                      <br />
                      <br />
                      {t("modal.forth1")}
                      <br />
                      <br />
                      {t("modal.forth2")}
                      <br />
                      <br />
                      Brad @{" "}
                      <a href="https://www.youtube.com/user/TechGuyWeb">
                        Traversy Media
                      </a>
                      <br />
                      Ed @{" "}
                      <a href="https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q">
                        Dev Ed
                      </a>
                      <br />
                      Kyle @{" "}
                      <a href="https://www.youtube.com/c/WebDevSimplified">
                        Web Dev Simplified
                      </a>
                      <br />
                      <br />
                      {t("modal.forth3")}
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div
                        className="backButton"
                        onClick={() => {
                          setWho(false);
                          setFirst(false);
                          setSecond(false);
                          setThird(false);
                          setForth(false);
                          setFifth(false);
                        }}
                      >
                        {t("modal.menu")}
                      </div>
                      <div
                        className="backButton"
                        onClick={() => {
                          setForth(false);
                          setThird(true);
                        }}
                      >
                        {t("modal.back")}
                      </div>
                      <div
                        className="backButton"
                        onClick={() => {
                          setForth(false);
                          setFifth(true);
                        }}
                      >
                        {t("modal.next")}
                      </div>
                    </div>
                  </div>
                ) : fifth ? (
                  <div className="modal-body-p-container">
                    <div className="modal-body-p">
                      <b>{t("modal.fifth")}</b>
                      <br />
                      <br />
                      {t("modal.fifth1")}
                      <br />
                      <br />
                      {t("modal.fifth2")}
                      <a href="https://stackoverflow.com/">Stack Overflow</a>
                      {t("modal.fifth3")}
                      <a href="https://reactjs.org/">React.js</a>
                      {t("modal.fifth4")}
                      <a href="https://reactjs.org/docs/react-dom.html">
                        ReactDOM
                      </a>
                      {t("modal.fifth5")}
                      <a href="https://reactjs.org/docs/introducing-jsx.html">
                        JSX
                      </a>
                      .
                      <br />
                      <br />
                      {t("modal.fifth6")}
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div
                        className="backButton"
                        onClick={() => {
                          setWho(false);
                          setFirst(false);
                          setSecond(false);
                          setThird(false);
                          setForth(false);
                          setFifth(false);
                        }}
                      >
                        {t("modal.menu")}
                      </div>
                      <div
                        className="backButton"
                        onClick={() => {
                          setFifth(false);
                          setForth(true);
                        }}
                      >
                        {t("modal.back")}
                      </div>
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
                      <div className="modal-body-lower">{t("modal.who")}</div>
                    </div>
                    <div className="modal-body-item">
                      <div className="modal-body-upper">
                        <div
                          onClick={() => setFirst(true)}
                          className="modal-body-dot"
                        ></div>
                      </div>
                      <div className="modal-body-lower">{t("modal.first")}</div>
                    </div>
                    <div className="modal-body-item">
                      <div className="modal-body-upper">
                        <div
                          onClick={() => setSecond(true)}
                          className="modal-body-dot"
                        ></div>
                      </div>
                      <div className="modal-body-lower">
                        {t("modal.second")}
                      </div>
                    </div>
                    <div className="modal-body-item">
                      <div className="modal-body-upper">
                        <div
                          onClick={() => setThird(true)}
                          className="modal-body-dot"
                        ></div>
                      </div>
                      <div className="modal-body-lower">{t("modal.third")}</div>
                    </div>
                    <div className="modal-body-item">
                      <div className="modal-body-upper">
                        <div
                          onClick={() => setForth(true)}
                          className="modal-body-dot"
                        ></div>
                      </div>
                      <div className="modal-body-lower">{t("modal.forth")}</div>
                    </div>
                    <div className="modal-body-item">
                      <div className="modal-body-upper">
                        <div
                          onClick={() => setFifth(true)}
                          className="modal-body-dot"
                        ></div>
                      </div>
                      <div className="modal-body-lower">{t("modal.fifth")}</div>
                    </div>
                    <div className="modal-body-item">
                      <div className="modal-body-upper">
                        <div className="modal-body-dot"></div>
                      </div>
                      <div className="modal-body-lower">{t("modal.tobe")}</div>
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
                tag="div"
                color="primary"
                className="button-sm"
                wideMobile
                onClick={closeAboutModal}
              >
                {t("modal.footer")}
              </Button>
            </bsModal.Footer>
          </Modal>
          <Modal
            id="contact-modal"
            show={contactModal}
            handleClose={
              isLoading ? disableCloseContactModal : closeContactModal
            }
          >
            <bsModal.Header
              style={{
                borderBottom: "0.05rem solid #33363a",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <bsModal.Title>{t("hero.contact")}</bsModal.Title>
            </bsModal.Header>
            <bsModal.Body>
              <Form className="modal-body-form">
                <Form.Label className="input-label">
                  {t("hero.name")}
                </Form.Label>
                <Form.Control
                  placeholder={t("hero.namePl")}
                  type="text"
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name ? (
                  <span className="text-error">{formik.errors.name}</span>
                ) : null}
                <Form.Label className="input-label">
                  {t("hero.email")}
                </Form.Label>
                <Form.Control
                  placeholder={t("hero.emailPl")}
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <span className="text-error">{formik.errors.email}</span>
                ) : null}
                <Form.Label className="input-label">{t("hero.msg")}</Form.Label>
                <Form.Control
                  placeholder={t("hero.msgPl")}
                  as="textarea"
                  rows={3}
                  {...formik.getFieldProps("msg")}
                />
              </Form>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {success ? (
                  <span className="text-succ">{t("hero.success")}</span>
                ) : null}
                {error ? (
                  <span className="text-err">{t("hero.error")}</span>
                ) : null}
                {isLoading ? (
                  <Spinner
                    className="text-spin"
                    size="sm"
                    animation="border"
                    variant="warning"
                  />
                ) : null}
              </div>
            </bsModal.Body>
            <bsModal.Footer
              style={{
                border: 0,
                paddingTop: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginTop: !success && !error && !isLoading ? "1.5rem" : "0",
                }}
              >
                <div
                  style={{
                    color: "#151719",
                    pointerEvents: isLoading ? "none" : "all",
                    backgroundColor: isLoading
                      ? "rgba(255, 187, 0, 0.5)"
                      : "#ffb400",
                  }}
                  className="button button-send button-wide-mobile button-sm"
                  onClick={formik.handleSubmit}
                >
                  {t("hero.send")}
                </div>
                <div
                  style={{
                    pointerEvents: isLoading ? "none" : "all",
                    color: isLoading ? "rgba(128, 128, 128, 0.3)" : "#9ca9b3",
                  }}
                  className="closeButton"
                  onClick={closeContactModal}
                >
                  {t("hero.close")}
                </div>
              </div>
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
