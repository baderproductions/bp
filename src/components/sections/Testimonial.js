import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import re from "../../assets/images/re.png";
import ng from "../../assets/images/ng.png";
import go from "../../assets/images/go.png";
import fu from "../../assets/images/fu.png";
import ru from "../../assets/images/ru.png";
import py from "../../assets/images/py.png";
import ms from "../../assets/images/ms.png";
import ap from "../../assets/images/ap.png";
import li from "../../assets/images/li.png";
import ub from "../../assets/images/ub.png";
import no from "../../assets/images/no.png";
import bo from "../../assets/images/bo.png";
import sa from "../../assets/images/sa.png";
import js from "../../assets/images/js.png";
import ht from "../../assets/images/ht.png";
import cs from "../../assets/images/cs.png";
import ex from "../../assets/images/ex.png";
import pg from "../../assets/images/pg.png";
import fs from "../../assets/images/fs.png";
import gp from "../../assets/images/gp.png";
import az from "../../assets/images/az.png";
import pp from "../../assets/images/pp.png";
import sh from "../../assets/images/sh.png";
import as from "../../assets/images/as.png";
import xc from "../../assets/images/xc.png";
import Carousel from "@brainhubeu/react-carousel";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Testimonial = ({
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
  const outerClasses = classNames(
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: "Credits",
    paragraph: "",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div style={{ paddingBottom: "7rem" }} className={innerClasses}>
          <SectionHeader
            style={{ paddingBottom: "5rem" }}
            data={sectionHeader}
            className="center-content"
          />
          <div className={tilesClasses}>
            <Carousel
              infinite
              lazyLoad
              centered
              draggable={false}
              stopAutoPlayOnHover={false}
              slidesPerPage={10}
              offset={80}
              animationSpeed={4000}
              autoPlay={2000}
            >
              <Image src={ap} alt="Apache Logo" width={48} height={48} />
              <Image
                src={go}
                alt="Google Cloud Logo"
                width={128}
                height={128}
              />
              <Image src={no} alt="Node.js Logo" width={128} height={128} />
              <Image src={ub} alt="Ubuntu Logo" width={256} height={256} />
              <Image src={ms} alt="Microsoft Logo" width={128} height={128} />
              <Image src={fu} alt="Flutter Logo" width={512} height={512} />
              <Image src={li} alt="Linux Logo" width={48} height={48} />
              <Image src={ru} alt="Redux Logo" width={128} height={128} />
              <Image src={ng} alt="NGINX Logo" width={64} height={64} />
              <Image src={py} alt="Python Logo" width={128} height={128} />
              <Image src={re} alt="React Logo" width={64} height={64} />
              <Image src={bo} alt="Bootstrap Logo" width={72} height={72} />
              <Image src={sa} alt="Sass Logo" width={256} height={256} />
              <Image src={js} alt="Javascript Logo" width={72} height={72} />
              <Image src={ht} alt="HTML Logo" width={512} height={512} />
              <Image src={cs} alt="CSS Logo" width={512} height={512} />
              <Image src={ex} alt="Express.js Logo" width={128} height={128} />
              <Image src={pg} alt="PostgreSQL Logo" width={128} height={128} />
              <Image
                src={fs}
                alt="Firebase Firestore Logo"
                width={128}
                height={128}
              />
              <Image
                src={gp}
                alt="Google Cloud Logo"
                width={128}
                height={128}
              />
              <Image
                src={az}
                alt="Amazon Web Services Logo"
                width={256}
                height={256}
              />
              <Image src={pp} alt="PayPal Logo" width={128} height={128} />
              <Image src={sh} alt="Shopify Logo" width={128} height={128} />
              <Image
                src={as}
                alt="Android Studio Logo"
                width={129}
                height={129}
              />
              <Image src={xc} alt="Xcode Logo" width={64} height={64} />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
