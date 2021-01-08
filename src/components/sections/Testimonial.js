import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import re from "../../assets/images/re.webp";
import tw from "../../assets/images/tw.webp";
import ng from "../../assets/images/ng.webp";
import go from "../../assets/images/go.webp";
import fu from "../../assets/images/fu.webp";
import ru from "../../assets/images/ru.webp";
import py from "../../assets/images/py.webp";
import ms from "../../assets/images/ms.webp";
import ap from "../../assets/images/ap.webp";
import li from "../../assets/images/li.webp";
import ub from "../../assets/images/ub.webp";
import no from "../../assets/images/no.webp";
import bo from "../../assets/images/bo.webp";
import sa from "../../assets/images/sa.webp";
import js from "../../assets/images/js.webp";
import ht from "../../assets/images/ht.webp";
import cs from "../../assets/images/cs.webp";
import ex from "../../assets/images/ex.webp";
import pg from "../../assets/images/pg.webp";
import fs from "../../assets/images/fs.webp";
import gp from "../../assets/images/gp.webp";
import az from "../../assets/images/az.webp";
import pp from "../../assets/images/pp.webp";
import sh from "../../assets/images/sh.webp";
import as from "../../assets/images/as.webp";
import xc from "../../assets/images/xc.webp";
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
              animationSpeed={3000}
              autoPlay={2100}
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
              <Image src={tw} alt="Tailwind Logo" width={256} height={256} />
              <Image src={js} alt="Javascript Logo" width={72} height={72} />
              <Image src={ht} alt="HTML Logo" width={512} height={512} />
              <Image src={cs} alt="CSS Logo" width={512} height={512} />
              <Image
                style={{ filter: "invert(100%)" }}
                src={ex}
                alt="Express.js Logo"
                width={128}
                height={128}
              />
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
              <Image src={xc} alt="Xcode Logo" width={128} height={128} />
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
