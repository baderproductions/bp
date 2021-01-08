import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Badge from "react-bootstrap/Badge";
import re from "../../assets/images/re.webp";
import tw from "../../assets/images/tw.webp";
import bo from "../../assets/images/bo.webp";
import sa from "../../assets/images/sa.webp";
import js from "../../assets/images/js.webp";
import ht from "../../assets/images/ht.webp";
import cs from "../../assets/images/cs.webp";
import no from "../../assets/images/no.webp";
import ex from "../../assets/images/ex.webp";
import dj from "../../assets/images/dj.webp";
import mo from "../../assets/images/mo.webp";
import pg from "../../assets/images/pg.webp";
import rd from "../../assets/images/rd.webp";
import my from "../../assets/images/my.webp";
import fs from "../../assets/images/fs.webp";
import jo from "../../assets/images/jo.webp";
import gp from "../../assets/images/gp.webp";
import az from "../../assets/images/az.webp";
import ma from "../../assets/images/ma.webp";
import ap from "../../assets/images/ap.webp";
import ng from "../../assets/images/ng.webp";
import st from "../../assets/images/st.webp";
import pp from "../../assets/images/pp.webp";
import sh from "../../assets/images/sh.webp";
import fu from "../../assets/images/fu.webp";
import as from "../../assets/images/as.webp";
import xc from "../../assets/images/xc.webp";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const { t } = useTranslation("common");
  const { scrollStack } = useSelector((state) => state.appConfig);
  const stackRef = useRef();
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current === true) {
      initialRender.current = false;
    } else {
      window.scrollTo(0, stackRef.current.offsetTop);
    }
  }, [scrollStack]);

  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "Stack",
    paragraph: "Development stack, frameworks and services",
  };

  return (
    <section ref={stackRef} {...props} className={outerClasses}>
      <div className="container">
        <div
          style={{ paddingBottom: "6rem", paddingTop: "6rem" }}
          className={innerClasses}
        >
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-items">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <div
                      style={{
                        width: 64,
                        height: 64,
                      }}
                    >
                      <svg
                        version="1.1"
                        id="Capa_1"
                        fill="#000"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          marginTop: 16.5,
                          marginLeft: 16.5,
                        }}
                        viewBox="0 0 780 780"
                      >
                        <g>
                          <g>
                            <path
                              d="M502.002,10.249H10c-5.523,0-10,4.478-10,10v102.859c0,5.522,4.477,10,10,10h492.002c5.523,0,10-4.478,10-10V20.249
			C512.002,14.727,507.525,10.249,502.002,10.249z M492.002,113.108H20V30.249h472.002V113.108z"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M469.41,90.394l-8.167-8.167c2.229-4.408,3.416-9.306,3.416-14.388c0-8.533-3.323-16.557-9.357-22.591
			c-12.456-12.455-32.723-12.456-45.18,0c-6.034,6.034-9.357,14.058-9.357,22.591c0,8.533,3.324,16.557,9.357,22.59
			c6.035,6.034,14.058,9.357,22.591,9.357c5.083,0,9.98-1.188,14.388-3.416l8.167,8.167c1.953,1.952,4.512,2.929,7.071,2.929
			s5.119-0.977,7.071-2.929C473.315,100.632,473.315,94.3,469.41,90.394z M441.161,76.286c-2.256,2.257-5.256,3.5-8.448,3.5
			c-3.192,0-6.191-1.243-8.448-3.5c-2.256-2.257-3.5-5.256-3.5-8.447s1.244-6.192,3.5-8.448c2.329-2.329,5.389-3.493,8.448-3.493
			c3.059,0,6.119,1.164,8.448,3.493c2.256,2.257,3.5,5.257,3.5,8.448S443.418,74.03,441.161,76.286z"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M358.341,87.831c-0.13-0.641-0.32-1.271-0.57-1.87c-0.25-0.601-0.56-1.19-0.92-1.73c-0.36-0.54-0.78-1.06-1.24-1.52
			c-0.46-0.46-0.97-0.88-1.52-1.24c-0.54-0.36-1.12-0.67-1.73-0.92c-0.6-0.25-1.23-0.44-1.87-0.57c-1.29-0.26-2.62-0.26-3.91,0
			c-0.64,0.13-1.27,0.32-1.87,0.57c-0.6,0.25-1.18,0.56-1.72,0.92c-0.55,0.36-1.06,0.78-1.53,1.24c-0.46,0.46-0.87,0.979-1.24,1.52
			c-0.36,0.54-0.67,1.13-0.92,1.73c-0.25,0.6-0.44,1.229-0.57,1.87c-0.13,0.649-0.19,1.3-0.19,1.96c0,0.649,0.06,1.3,0.19,1.95
			c0.13,0.64,0.32,1.27,0.57,1.869c0.25,0.601,0.56,1.181,0.92,1.73c0.37,0.54,0.78,1.06,1.24,1.52c0.47,0.46,0.98,0.881,1.53,1.24
			c0.54,0.36,1.12,0.67,1.72,0.92c0.61,0.25,1.24,0.44,1.87,0.57c0.65,0.13,1.31,0.19,1.96,0.19c0.65,0,1.31-0.061,1.95-0.19
			c0.64-0.129,1.27-0.32,1.87-0.57c0.6-0.25,1.19-0.56,1.73-0.92c0.55-0.359,1.06-0.78,1.52-1.24c1.86-1.869,2.93-4.439,2.93-7.069
			C358.541,89.131,358.471,88.48,358.341,87.831z"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M310.627,79.786H102.794c-5.523,0-10,4.478-10,10c0,5.522,4.477,10,10,10h207.833c5.523,0,10-4.478,10-10
			C320.627,84.264,316.15,79.786,310.627,79.786z"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M314.821,147.364H11.181c-5.523,0-10,4.478-10,10v197.199c0,5.523,4.477,10,10,10h303.64c5.523,0,10-4.478,10-10V157.364
			C324.821,151.842,320.344,147.364,314.821,147.364z M121.806,344.562H36.925l57.165-66.186l41.4,47.94L121.806,344.562z
			 M146.806,344.562l18.646-24.861h48.489c5.523,0,10-4.478,10-10c0-5.522-4.477-10-10-10h-33.488l7.016-9.354h62.789l40.665,54.215
			H146.806z M202.468,270.347l16.395-21.859l16.395,21.859H202.468z M304.821,329.76l-77.958-103.94c-1.889-2.518-4.853-4-8-4
			c-3.147,0-6.111,1.482-8,4l-63.09,84.119l-46.114-53.4c-1.899-2.199-4.662-3.464-7.568-3.464s-5.668,1.265-7.568,3.464
			l-65.342,75.653V167.364h283.64V329.76z"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M137.648,178.846c-19.494,0-35.353,15.859-35.353,35.353c0,19.494,15.86,35.353,35.353,35.353
			c19.494,0,35.353-15.859,35.353-35.353C173.001,194.705,157.142,178.846,137.648,178.846z M137.648,229.553
			c-8.466,0-15.353-6.887-15.353-15.353s6.888-15.353,15.353-15.353c8.465,0,15.353,6.887,15.353,15.353
			S146.114,229.553,137.648,229.553z"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M502.002,147.364h-153.69c-5.523,0-10,4.478-10,10v197.199c0,5.522,4.477,10,10,10h153.69c5.523,0,10-4.478,10-10V157.364
			C512.002,151.842,507.525,147.364,502.002,147.364z M492.002,344.563h-133.69V167.364h133.69V344.563z"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M468.719,183.835h-87.124c-5.523,0-10,4.478-10,10c0,5.522,4.477,10,10,10h87.124c5.523,0,10-4.478,10-10
			C478.719,188.313,474.242,183.835,468.719,183.835z"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M468.719,223.969h-87.124c-5.523,0-10,4.478-10,10c0,5.522,4.477,10,10,10h87.124c5.523,0,10-4.478,10-10
			C478.719,228.447,474.242,223.969,468.719,223.969z"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M468.719,264.103h-87.124c-5.523,0-10,4.478-10,10c0,5.522,4.477,10,10,10h87.124c5.523,0,10-4.478,10-10
			C478.719,268.581,474.242,264.103,468.719,264.103z"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M391.401,312.281c-0.13-0.641-0.32-1.271-0.57-1.87c-0.25-0.601-0.56-1.181-0.92-1.73c-0.37-0.54-0.78-1.06-1.25-1.52
			c-2.32-2.32-5.77-3.391-9.02-2.73c-0.64,0.13-1.27,0.32-1.87,0.57c-0.6,0.25-1.18,0.56-1.73,0.92c-0.54,0.36-1.06,0.78-1.52,1.24
			c-0.46,0.46-0.88,0.979-1.24,1.52c-0.36,0.55-0.67,1.13-0.92,1.73c-0.25,0.6-0.44,1.229-0.57,1.87c-0.13,0.649-0.2,1.3-0.2,1.949
			c0,0.66,0.07,1.311,0.2,1.96c0.13,0.641,0.32,1.271,0.57,1.871c0.25,0.601,0.56,1.181,0.92,1.73c0.36,0.54,0.78,1.06,1.24,1.52
			c0.46,0.46,0.98,0.88,1.52,1.24c0.55,0.36,1.13,0.67,1.73,0.92c0.6,0.25,1.23,0.44,1.87,0.57c0.65,0.13,1.3,0.2,1.96,0.2
			c2.63,0,5.2-1.07,7.06-2.931c0.46-0.46,0.88-0.979,1.25-1.52c0.36-0.55,0.67-1.13,0.92-1.73c0.25-0.6,0.44-1.229,0.57-1.87
			c0.13-0.649,0.19-1.3,0.19-1.96C391.591,313.581,391.531,312.93,391.401,312.281z"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M468.719,304.236h-49.214c-5.523,0-10,4.478-10,10c0,5.522,4.477,10,10,10h49.214c5.523,0,10-4.478,10-10
			C478.719,308.714,474.242,304.236,468.719,304.236z"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M164.871,378.751H11.181c-5.523,0-10,4.478-10,10v103.002c0,5.522,4.477,10,10,10h153.69c5.523,0,10-4.478,10-10V388.751
			C174.871,383.229,170.394,378.751,164.871,378.751z M154.871,481.753H21.181v-83.002h133.69V481.753z"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M502.002,378.751H199.728c-5.523,0-10,4.478-10,10v103.002c0,5.522,4.477,10,10,10h302.274c5.523,0,10-4.478,10-10
			V388.751C512.002,383.229,507.525,378.751,502.002,378.751z M492.002,481.753H209.728v-83.002h282.274V481.753z"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M255.281,438.302c-0.13-0.639-0.32-1.27-0.57-1.87c-0.25-0.61-0.56-1.189-0.92-1.729c-0.36-0.551-0.78-1.061-1.24-1.521
			c-0.46-0.46-0.97-0.88-1.52-1.24c-0.54-0.359-1.12-0.67-1.73-0.92c-0.6-0.25-1.23-0.45-1.87-0.58c-1.29-0.25-2.62-0.25-3.91,0
			c-0.63,0.13-1.26,0.33-1.87,0.58c-0.6,0.25-1.18,0.561-1.72,0.92c-0.55,0.36-1.06,0.78-1.52,1.24c-0.46,0.46-0.88,0.97-1.25,1.521
			c-0.36,0.54-0.67,1.119-0.92,1.729c-0.25,0.601-0.44,1.23-0.57,1.87c-0.13,0.64-0.19,1.3-0.19,1.95c0,0.649,0.06,1.31,0.19,1.95
			c0.13,0.639,0.32,1.269,0.57,1.879c0.25,0.6,0.56,1.18,0.92,1.72c0.37,0.55,0.79,1.06,1.25,1.52c1.86,1.86,4.44,2.931,7.07,2.931
			c0.65,0,1.31-0.061,1.95-0.19c0.64-0.13,1.27-0.33,1.87-0.58c0.61-0.25,1.19-0.55,1.73-0.92c0.55-0.359,1.06-0.779,1.52-1.24
			c0.46-0.46,0.88-0.97,1.24-1.52c0.36-0.54,0.67-1.12,0.92-1.72c0.25-0.61,0.44-1.24,0.57-1.88c0.13-0.641,0.2-1.301,0.2-1.95
			C255.481,439.602,255.411,438.941,255.281,438.302z"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M451.319,430.252h-167.93c-5.523,0-10,4.478-10,10c0,5.522,4.477,10,10,10h167.93c5.523,0,10-4.478,10-10
			C461.319,434.73,456.842,430.252,451.319,430.252z"
                            />
                          </g>
                        </g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <p className="mt-0 mb-8 h4-para">Front-end</p>
                  <p className="m-0 text-sm">{t("dev.front")}</p>
                </div>
                <div className="modal-body-container">
                  <div className="modal-body-devContainer">
                    <a
                      data-aos="flip-right"
                      rel="noreferrer"
                      target="_blank"
                      href="https://reactjs.org"
                      className="modal-body-devItem"
                    >
                      <div className="modal-body-upper">
                        <img
                          className="logo-img-l"
                          src={re}
                          width="64"
                          height="64"
                          alt="React Logo"
                        />
                        React
                      </div>
                      <div className="modal-body-lower">
                        <Badge variant="warning">{t("dev.lib")}</Badge>
                      </div>
                    </a>
                    <a
                      data-aos="flip-right"
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.w3schools.com/html"
                      className="modal-body-devItem"
                    >
                      <div className="modal-body-upper">
                        <img
                          className="logo-img"
                          src={ht}
                          width="720"
                          height="720"
                          alt="HTML Logo"
                        />
                        HTML
                      </div>
                      <div className="modal-body-lower">
                        <Badge variant="warning">{t("dev.mar")}</Badge>
                      </div>
                    </a>
                    <a
                      data-aos="flip-right"
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.w3schools.com/css"
                      className="modal-body-devItem"
                    >
                      <div className="modal-body-upper">
                        <img
                          className="logo-img"
                          src={cs}
                          width="1280"
                          height="1280"
                          alt="CSS Logo"
                        />
                        CSS
                      </div>
                      <div className="modal-body-lower">
                        <Badge variant="warning">{t("dev.sty")}</Badge>
                      </div>
                    </a>
                    <a
                      data-aos="flip-right"
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.w3schools.com/js"
                      className="modal-body-devItem"
                    >
                      <div className="modal-body-upper">
                        <img
                          className="logo-img"
                          src={js}
                          width="1024"
                          height="1024"
                          alt="Javascript Logo"
                        />
                        Javascript
                      </div>
                      <div className="modal-body-lower">
                        <Badge variant="warning">{t("dev.lan")}</Badge>
                      </div>
                    </a>
                    <a
                      data-aos="flip-right"
                      rel="noreferrer"
                      target="_blank"
                      href="https://sass-lang.com"
                      className="modal-body-devItem"
                    >
                      <div className="modal-body-upper">
                        <img
                          className="logo-img"
                          src={sa}
                          width="1280"
                          height="960"
                          alt="Sass Logo"
                        />
                        Sass
                      </div>
                      <div className="modal-body-lower">
                        <Badge variant="warning">{t("dev.styEx")}</Badge>
                      </div>
                    </a>
                    <a
                      data-aos="flip-right"
                      rel="noreferrer"
                      target="_blank"
                      href="https://tailwindcss.com/"
                      className="modal-body-devItem"
                    >
                      <div className="modal-body-upper">
                        <img
                          className="logo-img"
                          src={tw}
                          width="200"
                          height="200"
                          alt="Tailwind Logo"
                        />
                        Tailwind CSS
                      </div>
                      <div className="modal-body-lower">
                        <Badge variant="warning">{t("dev.fra")}</Badge>
                      </div>
                    </a>
                    <a
                      data-aos="flip-right"
                      rel="noreferrer"
                      target="_blank"
                      href="https://getbootstrap.com"
                      className="modal-body-devItem"
                    >
                      <div className="modal-body-upper">
                        <img
                          className="logo-img"
                          src={bo}
                          width="768"
                          height="768"
                          alt="Bootstrap Logo"
                        />
                        Bootstrap
                      </div>
                      <div className="modal-body-lower">
                        <Badge variant="warning">{t("dev.fra")}</Badge>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tiles-items">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <div
                      style={{
                        width: 64,
                        height: 64,
                      }}
                    >
                      <svg
                        version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="512.000000pt"
                        height="512.000000pt"
                        viewBox="0 0 142 142"
                        style={{
                          marginTop: 15,
                          marginLeft: 15.9,
                        }}
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path d="m69 72.008h-64a3 3 0 0 1 -3-3v-64a3 3 0 0 1 3-3h64a3 3 0 0 1 3 3v64a3 3 0 0 1 -3 3zm-64-68a1 1 0 0 0 -1 1v64a1 1 0 0 0 1 1h64a1 1 0 0 0 1-1v-64a1 1 0 0 0 -1-1z" />
                        <path d="m71 21h-68a1 1 0 0 1 0-2h68a1 1 0 0 1 0 2z" />
                        <path d="m12.134 15.457a3.82 3.82 0 1 1 3.82-3.82 3.824 3.824 0 0 1 -3.82 3.82zm0-5.64a1.82 1.82 0 1 0 1.82 1.82 1.822 1.822 0 0 0 -1.82-1.82z" />
                        <path d="m22.281 15.457a3.82 3.82 0 1 1 3.82-3.82 3.824 3.824 0 0 1 -3.82 3.82zm0-5.64a1.82 1.82 0 1 0 1.82 1.82 1.821 1.821 0 0 0 -1.82-1.82z" />
                        <path d="m32.429 15.457a3.82 3.82 0 1 1 3.819-3.82 3.825 3.825 0 0 1 -3.819 3.82zm0-5.64a1.82 1.82 0 1 0 1.819 1.82 1.822 1.822 0 0 0 -1.819-1.82z" />
                        <path d="m64.686 12.637h-24a1 1 0 0 1 0-2h24a1 1 0 0 1 0 2z" />
                        <path d="m39.207 65.445h-4.414a1.564 1.564 0 0 1 -1.523-1.233l-.444-2.077a17.033 17.033 0 0 1 -4.635-1.92l-1.785 1.156a1.56 1.56 0 0 1 -1.948-.207l-3.119-3.119a1.566 1.566 0 0 1 -.207-1.947l1.157-1.786a16.983 16.983 0 0 1 -1.92-4.635l-2.079-.443a1.565 1.565 0 0 1 -1.231-1.523v-4.411a1.564 1.564 0 0 1 1.232-1.523l2.078-.443a16.989 16.989 0 0 1 1.92-4.636l-1.156-1.788a1.565 1.565 0 0 1 .205-1.947l3.121-3.12a1.562 1.562 0 0 1 1.947-.206l1.785 1.156a17 17 0 0 1 4.635-1.92l.445-2.079a1.563 1.563 0 0 1 1.522-1.232h4.414a1.565 1.565 0 0 1 1.523 1.238l.444 2.078a17 17 0 0 1 4.635 1.92l1.785-1.156a1.562 1.562 0 0 1 1.948.207l3.119 3.118a1.567 1.567 0 0 1 .207 1.948l-1.157 1.785a16.989 16.989 0 0 1 1.92 4.636l2.079.443a1.564 1.564 0 0 1 1.231 1.521v4.414a1.565 1.565 0 0 1 -1.232 1.523l-2.078.443a16.983 16.983 0 0 1 -1.92 4.635l1.156 1.785a1.564 1.564 0 0 1 -.2 1.946l-3.121 3.121a1.564 1.564 0 0 1 -1.947.206l-1.785-1.156a17.033 17.033 0 0 1 -4.635 1.92l-.445 2.078a1.562 1.562 0 0 1 -1.527 1.23zm-4.056-2h3.7l.5-2.351a1 1 0 0 1 .773-.77 15.019 15.019 0 0 0 5.147-2.133 1.008 1.008 0 0 1 1.09 0l2.019 1.309 2.614-2.614-1.306-2.018a1 1 0 0 1 0-1.088 15.064 15.064 0 0 0 2.132-5.15 1 1 0 0 1 .77-.774l2.351-.5v-3.7l-2.351-.5a1 1 0 0 1 -.77-.774 15.059 15.059 0 0 0 -2.132-5.149 1 1 0 0 1 0-1.088l1.306-2.018-2.614-2.617-2.018 1.307a1 1 0 0 1 -1.09 0 15.016 15.016 0 0 0 -5.147-2.132 1 1 0 0 1 -.773-.77l-.5-2.352h-3.7l-.5 2.352a1 1 0 0 1 -.773.77 15.016 15.016 0 0 0 -5.147 2.132 1 1 0 0 1 -1.09 0l-2.022-1.307-2.614 2.614 1.306 2.018a1 1 0 0 1 0 1.088 15.059 15.059 0 0 0 -2.132 5.149 1 1 0 0 1 -.77.774l-2.351.5v3.7l2.351.5a1 1 0 0 1 .77.774 15.064 15.064 0 0 0 2.132 5.15 1 1 0 0 1 0 1.088l-1.306 2.018 2.614 2.617 2.018-1.308a1.006 1.006 0 0 1 1.09 0 15.019 15.019 0 0 0 5.147 2.133 1 1 0 0 1 .773.77z" />
                        <path d="m37 56.591a11.087 11.087 0 1 1 11.087-11.091 11.1 11.1 0 0 1 -11.087 11.091zm0-20.174a9.087 9.087 0 1 0 9.087 9.083 9.1 9.1 0 0 0 -9.087-9.083z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <p className="mt-0 mb-8 h4-para">Back-end</p>
                  <p className="m-0 text-sm">{t("dev.back")}</p>
                </div>
                <div className="modal-body-container">
                  <div className="modal-body-devContainer">
                    <a
                      data-aos="flip-right"
                      rel="noreferrer"
                      target="_blank"
                      href="https://nodejs.org"
                      className="modal-body-devItem"
                    >
                      <div className="modal-body-upper">
                        <img
                          className="logo-img-l"
                          src={no}
                          width="128"
                          height="78"
                          alt="Node.js Logo"
                        />
                        Node.js
                      </div>
                      <div className="modal-body-lower">
                        <Badge variant="warning">{t("dev.rue")}</Badge>
                      </div>
                    </a>
                    <a
                      data-aos="flip-right"
                      rel="noreferrer"
                      target="_blank"
                      href="https://expressjs.com"
                      className="modal-body-devItem"
                    >
                      <div className="modal-body-upper">
                        <img
                          className="logo-img-invert-l"
                          src={ex}
                          width="800"
                          height="800"
                          alt="Express.js Logo"
                        />
                        Express.js
                      </div>
                      <div className="modal-body-lower">
                        <Badge variant="warning">{t("dev.fra")}</Badge>
                      </div>
                    </a>
                    <a
                      data-aos="flip-right"
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.djangoproject.com"
                      className="modal-body-devItem"
                    >
                      <div className="modal-body-upper">
                        <img
                          className="logo-img"
                          src={dj}
                          width="300"
                          height="240"
                          alt="Django Logo"
                        />
                        Django
                      </div>
                      <div className="modal-body-lower">
                        <Badge variant="warning">{t("dev.fra")}</Badge>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tiles-items">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <div
                      style={{
                        width: 64,
                        height: 64,
                      }}
                    >
                      <svg
                        version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="512.000000pt"
                        height="512.000000pt"
                        style={{
                          marginTop: 12,
                          marginLeft: 12,
                        }}
                        fill="#000"
                        viewBox="0 0 800.000000 800.000000"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g fill="#000" stroke="none">
                          <path
                            d="M448,88c0-49.344-87.848-88-200-88S48,38.656,48,88c0.009,2.686,0.277,5.365,0.8,8H48v312c0,49.344,87.848,88,200,88
			s200-38.656,200-88V96h-0.8C447.723,93.365,447.991,90.686,448,88z M432,408c0,34.768-73.936,72-184,72S64,442.768,64,408v-44.92
			C94.24,394.488,164.352,416,248,416s153.76-21.512,184-52.92V408z M432,328c0,34.768-73.936,72-184,72S64,362.768,64,328v-44.92
			C94.24,314.488,164.352,336,248,336s153.76-21.512,184-52.92V328z M432,248c0,34.768-73.936,72-184,72S64,282.768,64,248v-44.92
			C94.24,234.488,164.352,256,248,256s153.76-21.512,184-52.92V248z M432,168c0,34.768-73.936,72-184,72S64,202.768,64,168v-44.92
			C94.24,154.488,164.352,176,248,176s153.76-21.512,184-52.92V168z M248,160c-110.064,0-184-37.232-184-72s73.936-72,184-72
			s184,37.232,184,72S358.064,160,248,160z"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <p className="mt-0 mb-8 h4-para">{t("modal.database")}</p>
                  <p className="m-0 text-sm">{t("dev.data")}</p>
                </div>
                <div className="modal-body-container">
                  <div className="modal-body-devContainer">
                    <a
                      data-aos="flip-right"
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.mongodb.com"
                      className="modal-body-devItem"
                    >
                      <div className="modal-body-upper">
                        <img
                          className="logo-img"
                          src={mo}
                          width="413"
                          height="384"
                          alt="MongoDB Logo"
                        />
                        MongoDB
                      </div>
                      <div className="modal-body-lower">
                        <Badge variant="warning">{t("dev.nos")}</Badge>
                      </div>
                    </a>
                    <a
                      data-aos="flip-right"
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.postgresql.org"
                      className="modal-body-devItem"
                    >
                      <div className="modal-body-upper">
                        <img
                          className="logo-img"
                          src={pg}
                          width="256"
                          height="256"
                          alt="PostgreSQL Logo"
                        />
                        PostgreSQL
                      </div>
                      <div className="modal-body-lower">
                        <Badge variant="warning">{t("dev.sql")}</Badge>
                      </div>
                    </a>
                    <a
                      data-aos="flip-right"
                      rel="noreferrer"
                      target="_blank"
                      href="https://firebase.google.com/docs/database"
                      className="modal-body-devItem"
                    >
                      <div className="modal-body-upper">
                        <img
                          className="logo-img"
                          src={rd}
                          width="200"
                          height="200"
                          alt="Firebase Realtime Logo"
                        />
                        Realtime Database
                      </div>
                      <div className="modal-body-lower">
                        <Badge variant="warning">{t("dev.nos")}</Badge>
                      </div>
                    </a>
                    <a
                      data-aos="flip-right"
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.mysql.com"
                      className="modal-body-devItem"
                    >
                      <div className="modal-body-upper">
                        <img
                          className="logo-img-l"
                          src={my}
                          width="3000"
                          height="2000"
                          alt="MySQL Logo"
                        />
                        MySQL
                      </div>
                      <div className="modal-body-lower">
                        <Badge variant="warning">{t("dev.sql")}</Badge>
                      </div>
                    </a>
                    <a
                      data-aos="flip-right"
                      rel="noreferrer"
                      target="_blank"
                      href="https://firebase.google.com/docs/firestore"
                      className="modal-body-devItem"
                    >
                      <div className="modal-body-upper">
                        <img
                          className="logo-img"
                          src={fs}
                          width="200"
                          height="200"
                          alt="Cloud Firestore Logo"
                        />
                        Cloud Firestore
                      </div>
                      <div className="modal-body-lower">
                        <Badge variant="warning">{t("dev.nos")}</Badge>
                      </div>
                    </a>
                    <a
                      data-aos="flip-right"
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.json.org"
                      className="modal-body-devItem"
                    >
                      <div className="modal-body-upper">
                        <img
                          className="logo-img-invert"
                          src={jo}
                          width="800"
                          height="600"
                          alt="JSON Logo"
                        />
                        JSON
                      </div>
                      <div className="modal-body-lower">
                        <Badge variant="warning">{t("dev.jsn")}</Badge>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tiles-items">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <div
                      style={{
                        width: 64,
                        height: 64,
                      }}
                    >
                      <svg
                        version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="512.000000pt"
                        height="512.000000pt"
                        style={{
                          marginTop: 15,
                          marginLeft: 15,
                        }}
                        viewBox="0 0 920 920"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g fill="#000" stroke="none">
                          <g>
                            <g>
                              <path
                                d="M456,144c13.255,0,24-10.745,24-24V24c0-13.255-10.745-24-24-24H24C10.745,0,0,10.745,0,24v96c0,13.255,10.745,24,24,24
			h24v24H24c-13.255,0-24,10.745-24,24v96c0,13.255,10.745,24,24,24h24v24H24c-13.255,0-24,10.745-24,24v96
			c0,13.255,10.745,24,24,24h432c13.255,0,24-10.745,24-24v-96c0-13.255-10.745-24-24-24h-24v-24h24c13.255,0,24-10.745,24-24v-96
			c0-13.255-10.745-24-24-24h-24v-24H456z M456,352c4.418,0,8,3.582,8,8v96c0,4.418-3.582,8-8,8H24c-4.418,0-8-3.582-8-8v-96
			c0-4.418,3.582-8,8-8H456z M64,336v-24h16v24H64z M96,336v-24h288v24H96z M400,336v-24h16v24H400z M456,184c4.418,0,8,3.582,8,8
			v96c0,4.418-3.582,8-8,8H24c-4.418,0-8-3.582-8-8v-96c0-4.418,3.582-8,8-8H456z M64,168v-24h16v24H64z M96,168v-24h288v24H96z
			 M400,168v-24h16v24H400z M24,128c-4.418,0-8-3.582-8-8V24c0-4.418,3.582-8,8-8h432c4.418,0,8,3.582,8,8v96c0,4.418-3.582,8-8,8
			H24z"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="M256,64H94.528C90.11,51.503,76.397,44.954,63.901,49.373S44.855,67.503,49.273,80s18.131,19.046,30.627,14.627
			C86.735,92.211,92.112,86.835,94.528,80H256c4.418,0,8-3.582,8-8S260.418,64,256,64z M72,80c-4.418,0-8-3.582-8-8s3.582-8,8-8
			s8,3.582,8,8S76.418,80,72,80z"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="352" y="32" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="384" y="32" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="416" y="32" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="320" y="32" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="288" y="32" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="352" y="64" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="384" y="64" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="416" y="64" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="320" y="64" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="288" y="64" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="352" y="96" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="384" y="96" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="416" y="96" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="320" y="96" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="288" y="96" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="M256,232H94.528c-4.418-12.497-18.131-19.046-30.627-14.627S44.855,235.503,49.273,248s18.131,19.046,30.627,14.627
			c6.835-2.416,12.211-7.793,14.627-14.627H256c4.418,0,8-3.582,8-8S260.418,232,256,232z M72,248c-4.418,0-8-3.582-8-8s3.582-8,8-8
			s8,3.582,8,8S76.418,248,72,248z"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="352" y="200" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="384" y="200" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="416" y="200" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="320" y="200" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="288" y="200" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="352" y="232" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="384" y="232" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="416" y="232" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="320" y="232" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="288" y="232" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="352" y="264" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="384" y="264" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="416" y="264" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="320" y="264" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="288" y="264" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="M256,400H94.528c-4.418-12.497-18.131-19.046-30.627-14.627S44.855,403.503,49.273,416s18.131,19.046,30.627,14.627
			c6.835-2.416,12.211-7.793,14.627-14.627H256c4.418,0,8-3.582,8-8S260.418,400,256,400z M72,416c-4.418,0-8-3.582-8-8s3.582-8,8-8
			s8,3.582,8,8S76.418,416,72,416z"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="352" y="368" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="384" y="368" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="416" y="368" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="320" y="368" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="288" y="368" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="352" y="400" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="384" y="400" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="416" y="400" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="320" y="400" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="288" y="400" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="352" y="432" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="384" y="432" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="416" y="432" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="320" y="432" width="16" height="16" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <rect x="288" y="432" width="16" height="16" />
                            </g>
                          </g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <p className="mt-0 mb-8 h4-para">{t("modal.server")}</p>
                  <p className="m-0 text-sm">{t("dev.server")}</p>
                </div>
                <div className="modal-body-container">
                  <div className="modal-body-devContainer">
                    <a
                      data-aos="flip-right"
                      rel="noreferrer"
                      target="_blank"
                      href="https://cloud.google.com"
                      className="modal-body-devItem"
                    >
                      <div className="modal-body-upper">
                        <img
                          className="logo-img"
                          src={gp}
                          width="300"
                          height="300"
                          alt="Google Cloud Platform Logo"
                        />
                        Google Cloud
                      </div>
                      <div className="modal-body-lower">
                        <Badge variant="warning">{t("dev.csv")}</Badge>
                      </div>
                    </a>
                    <a
                      data-aos="flip-right"
                      rel="noreferrer"
                      target="_blank"
                      href="https://aws.amazon.com"
                      className="modal-body-devItem"
                    >
                      <div className="modal-body-upper">
                        <img
                          className="logo-img-l"
                          src={az}
                          width="1416"
                          height="551"
                          alt="Amazon Web Services Logo"
                        />
                        AWS
                      </div>
                      <div className="modal-body-lower">
                        <Badge variant="warning">{t("dev.csv")}</Badge>
                      </div>
                    </a>
                    <a
                      data-aos="flip-right"
                      rel="noreferrer"
                      target="_blank"
                      href="https://azure.microsoft.com"
                      className="modal-body-devItem"
                    >
                      <div className="modal-body-upper">
                        <img
                          className="logo-img-l"
                          src={ma}
                          width="3000"
                          height="2000"
                          alt="Microsoft Azure Logo"
                        />
                        Microsoft Azure
                      </div>
                      <div className="modal-body-lower">
                        <Badge variant="warning">{t("dev.csv")}</Badge>
                      </div>
                    </a>
                    <a
                      data-aos="flip-right"
                      rel="noreferrer"
                      target="_blank"
                      href="https://httpd.apache.org"
                      className="modal-body-devItem"
                    >
                      <div className="modal-body-upper">
                        <img
                          className="logo-img"
                          src={ap}
                          width="128"
                          height="226"
                          alt="Apache Logo"
                        />
                        Apache
                      </div>
                      <div className="modal-body-lower">
                        <Badge variant="warning">{t("dev.wsv")}</Badge>
                      </div>
                    </a>
                    <a
                      data-aos="flip-right"
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.nginx.com"
                      className="modal-body-devItem"
                    >
                      <div className="modal-body-upper">
                        <img
                          className="logo-img-l"
                          src={ng}
                          width="64"
                          height="64"
                          alt="NGINX Logo"
                        />
                      </div>
                      <div className="modal-body-lower">
                        <Badge variant="warning">{t("dev.wsv")}</Badge>
                      </div>
                    </a>
                    <a
                      data-aos="flip-right"
                      rel="noreferrer"
                      target="_blank"
                      href="https://stripe.com"
                      className="modal-body-devItem"
                    >
                      <div className="modal-body-upper">
                        <img
                          className="logo-img-xl"
                          src={st}
                          width="520"
                          height="300"
                          alt="Stripe Logo"
                        />
                      </div>
                      <div className="modal-body-lower">
                        <Badge variant="warning">{t("dev.psy")}</Badge>
                      </div>
                    </a>
                    <a
                      data-aos="flip-right"
                      rel="noreferrer"
                      target="_blank"
                      href="https://developers.shopify.com"
                      className="modal-body-devItem"
                    >
                      <div className="modal-body-upper">
                        <img
                          className="logo-img"
                          src={sh}
                          width="220"
                          height="230"
                          alt="Shopify Logo"
                        />
                        Shopify
                      </div>
                      <div className="modal-body-lower">
                        <Badge variant="warning">{t("dev.ecm")}</Badge>
                      </div>
                    </a>
                    <a
                      data-aos="flip-right"
                      rel="noreferrer"
                      target="_blank"
                      href="https://developer.paypal.com"
                      className="modal-body-devItem"
                    >
                      <div className="modal-body-upper">
                        <img
                          className="logo-img-xl"
                          src={pp}
                          width="225"
                          height="225"
                          alt="PayPal Logo"
                        />
                      </div>
                      <div className="modal-body-lower">
                        <Badge variant="warning">{t("dev.psy")}</Badge>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tiles-items">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <div
                      style={{
                        width: 64,
                        height: 64,
                      }}
                    >
                      <svg
                        version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="512.000000pt"
                        height="512.000000pt"
                        style={{
                          marginTop: 12,
                          marginLeft: 12,
                        }}
                        fill="#000"
                        viewBox="0 0 800.000000 800.000000"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g
                          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                          fill="#000"
                          stroke="none"
                        >
                          <path
                            d="M1550 5104 c-80 -21 -174 -78 -240 -144 -65 -65 -99 -118 -132 -206
l-23 -59 -3 -2095 c-2 -1488 0 -2114 8 -2160 17 -97 70 -200 143 -274 77 -78
125 -109 221 -141 l75 -25 953 0 c1051 0 1010 -2 1131 63 70 37 171 132 209
197 14 25 37 75 50 110 l23 65 3 2090 c2 1502 0 2109 -8 2157 -18 105 -69 199
-153 282 -80 79 -144 118 -232 141 -87 22 -1941 22 -2025 -1z m1314 -333 c34
-32 34 -70 0 -102 l-26 -24 -275 0 -275 0 -24 28 c-13 15 -24 36 -24 46 0 26
36 69 63 74 12 3 138 4 279 3 l256 -1 26 -24z m-746 -1 c45 -42 15 -123 -46
-123 -43 0 -72 28 -72 69 0 40 32 74 70 74 14 0 36 -9 48 -20z m1592 -2190 l0
-1780 -1135 0 -1135 0 0 1780 0 1780 1135 0 1135 0 0 -1780z m-1065 -1974 c87
-40 135 -115 135 -208 -1 -248 -337 -319 -441 -93 -24 52 -24 138 0 191 21 46
91 111 136 123 55 17 118 12 170 -13z"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <p className="mt-0 mb-8 h4-para">Mobile</p>
                  <p className="m-0 text-sm">{t("dev.mobile")}</p>
                </div>
                <div className="modal-body-container">
                  <div className="modal-body-devContainer">
                    <a
                      data-aos="flip-right"
                      rel="noreferrer"
                      target="_blank"
                      href="https://reactnative.dev"
                      className="modal-body-devItem"
                    >
                      <div className="modal-body-upper">
                        <img
                          className="logo-img"
                          src={re}
                          width="64"
                          height="64"
                          alt="React Native Logo"
                        />
                        React Native
                      </div>
                      <div className="modal-body-lower">
                        <Badge variant="warning">{t("dev.fra")}</Badge>
                      </div>
                    </a>
                    <a
                      data-aos="flip-right"
                      rel="noreferrer"
                      target="_blank"
                      href="https://flutter.dev"
                      className="modal-body-devItem"
                    >
                      <div className="modal-body-upper">
                        <img
                          className="logo-img-xl"
                          src={fu}
                          width="512"
                          height="165"
                          alt="Flutter Logo"
                        />
                      </div>
                      <div className="modal-body-lower">
                        <Badge variant="warning">{t("dev.fra")}</Badge>
                      </div>
                    </a>
                    <a
                      data-aos="flip-right"
                      rel="noreferrer"
                      target="_blank"
                      href="https://developer.android.com/studio"
                      className="modal-body-devItem"
                    >
                      <div className="modal-body-upper">
                        <img
                          className="logo-img-l"
                          src={as}
                          width="1200"
                          height="1259"
                          alt="Android Studio Logo"
                        />
                        Android Studio
                      </div>
                      <div className="modal-body-lower">
                        <Badge variant="warning">{t("dev.rud")}</Badge>
                      </div>
                    </a>
                    <a
                      data-aos="flip-right"
                      rel="noreferrer"
                      target="_blank"
                      href="https://developer.apple.com/xcode"
                      className="modal-body-devItem"
                    >
                      <div className="modal-body-upper">
                        <img
                          className="logo-img"
                          src={xc}
                          width="750"
                          height="750"
                          alt="Xcode Logo"
                        />
                        Xcode
                      </div>
                      <div className="modal-body-lower">
                        <Badge variant="warning">{t("dev.rud")}</Badge>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
