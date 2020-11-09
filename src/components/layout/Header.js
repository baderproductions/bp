import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { AppConfigActions } from "../../redux/actions";
import { useTranslation } from "react-i18next";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import { useCookies } from "react-cookie";

const AntSwitch = withStyles(() => ({
  switchBase: {
    color: "grey",
    "&$checked": {
      "& + $track": {
        opacity: 1,
        backgroundColor: "grey",
      },
    },
  },
  thumb: {
    padding: 0,
    color: "grey",
    backgroundColor: "grey",
  },
  track: {
    backgroundColor: "grey",
  },
  checked: {},
}))(Switch);

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool,
};

const defaultProps = {
  navPosition: "",
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false,
};

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {
  const dispatch = useDispatch();
  const [langSwitch, setLang] = useState(false);
  const [cookies, setCookie] = useCookies(["lang"]);
  const [isActive, setIsactive] = useState(false);
  const nav = useRef(null);
  const hamburger = useRef(null);
  const { t, i18n } = useTranslation("common");

  useEffect(() => {
    if (cookies.lang === "ro") {
      i18n.changeLanguage("ro");
      setLang(true);
    } else {
      i18n.changeLanguage("en");
      setLang(false);
    }
    isActive && openMenu();
    document.addEventListener("keydown", keyPress);
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("keydown", keyPress);
      document.addEventListener("click", clickOutside);
      closeMenu();
    };
  }, [cookies.lang]);

  const openMenu = () => {
    document.body.classList.add("off-nav-is-active");
    nav.current.style.maxHeight = nav.current.scrollHeight + "px";
    setIsactive(true);
  };

  const closeMenu = () => {
    document.body.classList.remove("off-nav-is-active");
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  };

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  };

  const clickOutside = (e) => {
    if (!nav.current) return;
    if (
      !isActive ||
      nav.current.contains(e.target) ||
      e.target === hamburger.current
    )
      return;
    closeMenu();
  };

  const classes = classNames(
    "site-header",
    bottomOuterDivider && "has-bottom-divider",
    className
  );

  const openAboutModal = (e) => {
    e.preventDefault();
    document.getElementById("html").style.overflowY = "hidden";
    dispatch(AppConfigActions.toggleAboutModal());
  };

  const openContactModal = (e) => {
    e.preventDefault();
    document.getElementById("html").style.overflowY = "hidden";
    dispatch(AppConfigActions.toggleContactModal());
  };

  const handleSwitch = () => {
    if (cookies.lang === "ro") {
      i18n.changeLanguage("en");
      setCookie("lang", "en", { path: "/", maxAge: 31540000 });
      setLang(false);
    } else {
      i18n.changeLanguage("ro");
      setCookie("lang", "ro", { path: "/", maxAge: 31540000 });
      setLang(true);
    }
  };

  return (
    <header {...props} className={classes}>
      <div className="container">
        <div
          className={classNames(
            "site-header-inner",
            bottomDivider && "has-bottom-divider"
          )}
        >
          {!hideNav && (
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={classNames("header-nav", isActive && "is-active")}
              >
                <div className="header-nav-inner">
                  <ul
                    className={classNames(
                      "list-reset text-xs",
                      navPosition && `header-nav-${navPosition}`
                    )}
                    style={{ margin: "1rem 0" }}
                  >
                    <li>
                      <div
                        style={{
                          margin: "0",
                          position: "absolute",
                          top: "0.5rem",
                          left: "0.5rem",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            fontWeight: "bold",
                          }}
                          title={t("header.lang")}
                        >
                          <AntSwitch
                            icon={
                              <span
                                style={{
                                  width: "19px",
                                  height: "19px",
                                  borderRadius: "100%",
                                }}
                                className="flag-icon flag-icon-gb"
                              />
                            }
                            checkedIcon={
                              <span
                                style={{
                                  width: "19px",
                                  height: "19px",
                                  borderRadius: "100%",
                                }}
                                className="flag-icon flag-icon-ro"
                              />
                            }
                            color="default"
                            inputProps={{
                              "aria-label": "checkbox with default color",
                            }}
                            checked={langSwitch}
                            onChange={handleSwitch}
                          />
                          EN/RO
                        </span>
                      </div>
                    </li>
                  </ul>
                  <ul
                    className={classNames(
                      "list-reset text-xs",
                      navPosition && `header-nav-${navPosition}`
                    )}
                    style={{ margin: "0.5rem 0" }}
                  >
                    <li>
                      <div className="story-btn" onClick={openAboutModal}>
                        {t("header.story")}
                      </div>
                    </li>
                  </ul>

                  {!hideSignin && (
                    <ul
                      style={{ margin: "0.5rem 0" }}
                      className="list-reset header-nav-right"
                    >
                      <li>
                        <div
                          style={{ color: "#151719" }}
                          className="button button-primary button-wide-mobile button-sm"
                          onClick={openContactModal}
                        >
                          Contact
                        </div>
                      </li>
                    </ul>
                  )}
                </div>
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
