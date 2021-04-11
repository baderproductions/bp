import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import Button from "../elements/Button";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation("common");
  const { scrollBool } = useSelector((state) => state.appConfig);
  const workRef = useRef();
  const initialRender = useRef(true);
  const [isHovered, setHover] = useState(false);
  const [isHovered2, setHover2] = useState(false);
  const [isHovered3, setHover3] = useState(false);

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
							<div data-aos="fade-up-left" className="split-item">
								<div className="split-item-content center-content-mobile">
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
										"split-item-image center-content-mobile",
										imageFill && "split-item-image-fill"
									)}
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
											backgroundColor: isHovered ? "rgba(0,0,0,0.8)" : "transparent",
											transition: "0.5s ease",
										}}
									>
										<div
											style={{
												transform: `scale(${isHovered ? 1 : 0})`,
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
												color="black"
												rel="noreferrer"
												target="_blank"
												wideMobile
												href="https://raulvidican.ro"
												style={{ margin: "0 1rem" }}
											>
												Website
											</Button>
											<Button
												tag="a"
												color="black"
												rel="noreferrer"
												target="_blank"
												wideMobile
												href="https://github.com/baderproductions/rv-chef"
												style={{ margin: "0 1rem" }}
											>
												GitHub
											</Button>
										</div>
									</div>
									<Image
										src="https://dlc4jqsejiyjs.cloudfront.net/rv.jpg"
										alt="Raul Vidican"
										width={528}
										height={396}
									/>
								</div>
							</div>
							<div data-aos="fade-up-right" className="split-item">
								<div className="split-item-content center-content-mobile">
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
										"split-item-image center-content-mobile ",
										imageFill && "split-item-image-fill"
									)}
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
											backgroundColor: isHovered2 ? "rgba(0,0,0,0.8)" : "transparent",
											transition: "0.5s ease",
										}}
									>
										<div
											style={{
												transform: `scale(${isHovered2 ? 1 : 0})`,
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
												color="black"
												rel="noreferrer"
												target="_blank"
												wideMobile
												href="https://play.google.com/store/apps/details?id=com.baderproductions.fl"
												style={{ margin: "0 1rem" }}
											>
												Play Store
											</Button>
											<Button
												tag="a"
												color="black"
												rel="noreferrer"
												target="_blank"
												wideMobile
												href="https://github.com/baderproductions/filelist-app"
												style={{ margin: "0 1rem" }}
											>
												GitHub
											</Button>
										</div>
									</div>
									<Image
										src="https://dlc4jqsejiyjs.cloudfront.net/fl.jpg"
										alt="Filelist App"
										width={528}
										height={396}
									/>
								</div>
							</div>
							<div data-aos="fade-up-left" className="split-item">
								<div className="split-item-content center-content-mobile">
									<div className="text-xxs text-color-primary fw-600 tt-u mb-8">
										Node.js / Express application
									</div>
									<h3 className="mt-0 mb-12">IMDb Scraper</h3>
									<p className="m-0">{t("work.im")}</p>
								</div>
								<div
									className={classNames(
										"split-item-image center-content-mobile",
										imageFill && "split-item-image-fill"
									)}
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
											backgroundColor: isHovered3 ? "rgba(0,0,0,0.8)" : "transparent",
											transition: "0.5s ease",
										}}
									>
										<div
											style={{
												transform: `scale(${isHovered3 ? 1 : 0})`,
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
												color="black"
												rel="noreferrer"
												target="_blank"
												wideMobile
												href="https://inkthatquote.com/"
												style={{ margin: "0 1rem" }}
											>
												Live App
											</Button>
											<Button
												tag="a"
												color="black"
												rel="noreferrer"
												target="_blank"
												wideMobile
												href="https://github.com/baderproductions/imdb-scraper"
												style={{ margin: "0 1rem" }}
											>
												GitHub
											</Button>
										</div>
									</div>
									<Image
										src="https://dlc4jqsejiyjs.cloudfront.net/im.jpg"
										alt="IMDb Scraper"
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
