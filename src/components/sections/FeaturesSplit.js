import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import Button from "../elements/Button";
import fb from "../../assets/images/fb.png";
import fl from "../../assets/images/fl.png";
import im from "../../assets/images/im.png";
import rv from "../../assets/images/rv.png";
import sp from "../../assets/images/sp.png";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useCookies } from "react-cookie";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const [cookies] = useCookies(["lang"]);
  const { t } = useTranslation("common");
  const { scrollBool } = useSelector((state) => state.appConfig);
  const workRef = useRef();
  const initialRender = useRef(true);
  const [isHovered, setHover] = useState(false);
  const [isHovered2, setHover2] = useState(false);
  const [isHovered3, setHover3] = useState(false);
  const [isHovered4, setHover4] = useState(false);
  const [isHovered5, setHover5] = useState(false);

  useEffect(() => {
    if (initialRender.current === true) {
      initialRender.current = false;
    } else {
      window.scrollTo(0, workRef.current.offsetTop);
    }
  }, [scrollBool]);

  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "Work",
    paragraph: t("work.sub"),
  };

  return (
    <section ref={workRef} {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  One page website
                </div>
                <h3 className="mt-0 mb-12">{t("work.rv1")}</h3>
                <p className="m-0">
                  {t("work.rv2")}
                  <br />
                  {t("work.rv3")}
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{ cursor: "pointer" }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: isHovered
                      ? "rgba(0,0,0,0.5)"
                      : "transparent",
                    transition: "0.5s ease",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      top: isHovered ? 0 : -100,
                      opacity: isHovered ? 1 : 0,
                      width: "100%",
                      padding: "0 1rem",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      backgroundColor: "transparent",
                      transition: "0.5s ease",
                    }}
                  >
                    <Button
                      tag="a"
                      color="light"
                      wideMobile
                      className="button-black"
                      href="https://raulvidican.ro"
                      style={{ margin: "0 1rem" }}
                    >
                      Website
                    </Button>
                    <Button
                      tag="a"
                      color="light"
                      wideMobile
                      className="button-black"
                      href="https://github.com/baderproductions/rv-chef"
                      style={{ margin: "0 1rem" }}
                    >
                      GitHub
                    </Button>
                  </div>
                </div>
                <Image src={rv} alt="Raul Vidican" width={528} height={396} />
              </div>
            </div>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  React native Application
                </div>
                <h3 className="mt-0 mb-12">Filelist App</h3>
                <p className="m-0">
                  {t("work.fl1")}
                  <br />
                  {t("work.fl2")}
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
                onMouseOver={() => setHover2(true)}
                onMouseLeave={() => setHover2(false)}
                style={{ cursor: "pointer" }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: isHovered2
                      ? "rgba(0,0,0,0.5)"
                      : "transparent",
                    transition: "0.5s ease",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      top: isHovered2 ? 0 : -100,
                      opacity: isHovered2 ? 1 : 0,
                      width: "100%",
                      padding: "0 1rem",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      backgroundColor: "transparent",
                      transition: "0.5s ease",
                    }}
                  >
                    <Button
                      tag="a"
                      color="light"
                      wideMobile
                      className="button-black"
                      href="https://play.google.com/store/apps/details?id=com.baderproductions.fl"
                      style={{ margin: "0 1rem" }}
                    >
                      Play Store
                    </Button>
                    <Button
                      tag="a"
                      color="light"
                      wideMobile
                      className="button-black"
                      href="https://github.com/baderproductions/filelist-app"
                      style={{ margin: "0 1rem" }}
                    >
                      GitHub
                    </Button>
                  </div>
                </div>
                <Image src={fl} alt="Filelist App" width={528} height={396} />
              </div>
            </div>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Node.js / Express application
                </div>
                <h3 className="mt-0 mb-12">IMDb Scraper</h3>
                <p className="m-0">{t("work.im")}</p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
                onMouseOver={() => setHover3(true)}
                onMouseLeave={() => setHover3(false)}
                style={{ cursor: "pointer" }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: isHovered3
                      ? "rgba(0,0,0,0.5)"
                      : "transparent",
                    transition: "0.5s ease",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      top: isHovered3 ? 0 : -100,
                      opacity: isHovered3 ? 1 : 0,
                      width: "100%",
                      padding: "0 1rem",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      backgroundColor: "transparent",
                      transition: "0.5s ease",
                    }}
                  >
                    <Button
                      tag="a"
                      color="light"
                      wideMobile
                      className="button-black"
                      href="https://spleeter.co.uk"
                      style={{ margin: "0 1rem" }}
                    >
                      Live App
                    </Button>
                    <Button
                      tag="a"
                      color="light"
                      wideMobile
                      className="button-black"
                      href="https://github.com/baderproductions/imdb-scraper"
                      style={{ margin: "0 1rem" }}
                    >
                      GitHub
                    </Button>
                  </div>
                </div>
                <Image src={im} alt="IMDb Scraper" width={528} height={396} />
              </div>
            </div>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Machine learning
                </div>
                <h3 className="mt-0 mb-12">Spleeter by Deezer</h3>
                <p className="m-0">
                  {t("work.sp1")}
                  <br />
                  {t("work.sp2")}{" "}
                  <span style={{ color: "crimson" }}>{t("work.sp3")}</span>{" "}
                  {t("work.sp4")}
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
                onMouseOver={() => setHover4(true)}
                onMouseLeave={() => setHover4(false)}
                style={{ cursor: "pointer" }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: isHovered4
                      ? "rgba(0,0,0,0.5)"
                      : "transparent",
                    transition: "0.5s ease",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      top: isHovered4 ? 0 : -100,
                      opacity: isHovered4 ? 1 : 0,
                      width: "100%",
                      padding: "0 1rem",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      backgroundColor: "transparent",
                      transition: "0.5s ease",
                    }}
                  >
                    <Button
                      tag="a"
                      color="light"
                      wideMobile
                      className="button-black"
                      href="https://github.com/baderproductions/react-django-spleeter"
                      style={{ margin: "0 6rem" }}
                    >
                      GitHub
                    </Button>
                  </div>
                </div>
                <Image
                  src={sp}
                  alt="Spleeter by Deezer"
                  width={528}
                  height={396}
                />
              </div>
            </div>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  HTML, CSS, JAVASCRIPT
                </div>
                <h3 className="mt-0 mb-12">Facebook Sign-Up</h3>
                <p className="m-0">
                  {t("work.fb1")}
                  <br />
                  {t("work.fb2")}
                  {cookies.lang === "ro" ? (
                    <a
                      className="fb-href"
                      href="https://www.youtube.com/watch?v=3zURq7aNmOc"
                    >
                      Facebook - Clona pagina inregistrare | Ep.1 Practica
                    </a>
                  ) : null}
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
                onMouseOver={() => setHover5(true)}
                onMouseLeave={() => setHover5(false)}
                style={{ cursor: "pointer" }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: isHovered5
                      ? "rgba(0,0,0,0.5)"
                      : "transparent",
                    transition: "0.5s ease",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      top: isHovered5 ? 0 : -100,
                      opacity: isHovered5 ? 1 : 0,
                      width: "100%",
                      padding: "0 1rem",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      backgroundColor: "transparent",
                      transition: "0.5s ease",
                    }}
                  >
                    <Button
                      tag="a"
                      color="light"
                      wideMobile
                      className="button-black"
                      href="https://baderproductions.github.io/facebook-sign-up/"
                      style={{ margin: "0 1rem" }}
                    >
                      GitHub Pages
                    </Button>
                    <Button
                      tag="a"
                      color="light"
                      wideMobile
                      className="button-black"
                      href="https://github.com/baderproductions/facebook-sign-up"
                      style={{ margin: "0 1rem" }}
                    >
                      GitHub
                    </Button>
                  </div>
                </div>
                <Image
                  src={fb}
                  alt="Facebook Sign-Up"
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
