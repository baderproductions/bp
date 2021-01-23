import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import re from "../../assets/images/re.webp";
import tw from "../../assets/images/tw.webp";
import ng from "../../assets/images/ng.webp";
import go from "../../assets/images/go.webp";
import ru from "../../assets/images/ru.webp";
import ms from "../../assets/images/ms.webp";
import ap from "../../assets/images/ap.webp";
import li from "../../assets/images/li.webp";
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
import pp from "../../assets/images/pp.webp";
import sh from "../../assets/images/sh.webp";
import as from "../../assets/images/as.webp";
import xc from "../../assets/images/xc.webp";
import Slider from "react-slick";

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

  const sectionHeader = {
    title: "Credits",
    paragraph: "",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <SectionHeader data={sectionHeader} className="center-content" />
        <Slider
          autoplay
          lazyLoad
          infinite
          centerMode
          speed={4000}
          arrows={false}
          cssEase="linear"
          slidesToShow={5}
          autoplaySpeed={0}
          slidesToScroll={1}
        >
          <div>
            <Image src={ap} alt="Apache Logo" width={42} height={42} />
          </div>
          <div>
            <Image src={go} alt="Google Cloud Logo" width={72} height={72} />
          </div>
          <div>
            <Image src={no} alt="Node.js Logo" width={72} height={72} />
          </div>
          <div>
            <Image src={ms} alt="Microsoft Logo" width={72} height={72} />
          </div>
          <div>
            <Image src={li} alt="Linux Logo" width={72} height={72} />
          </div>
          <div>
            <Image src={ru} alt="Redux Logo" width={72} height={72} />
          </div>
          <div>
            <Image src={ng} alt="NGINX Logo" width={72} height={72} />
          </div>
          <div>
            <Image src={re} alt="React Logo" width={72} height={72} />
          </div>
          <div>
            <Image src={bo} alt="Bootstrap Logo" width={72} height={72} />
          </div>
          <div>
            <Image src={sa} alt="Sass Logo" width={72} height={72} />
          </div>
          <div>
            <Image src={tw} alt="Tailwind Logo" width={72} height={72} />
          </div>
          <div>
            <Image src={js} alt="Javascript Logo" width={72} height={72} />
          </div>
          <div>
            <Image src={ht} alt="HTML Logo" width={72} height={72} />
          </div>
          <div>
            <Image src={cs} alt="CSS Logo" width={72} height={72} />
          </div>
          <div>
            <Image
              style={{ filter: "invert(100%)" }}
              src={ex}
              alt="Express.js Logo"
              width={72}
              height={72}
            />
          </div>
          <div>
            <Image src={pg} alt="PostgreSQL Logo" width={72} height={72} />
          </div>
          <div>
            <Image
              src={fs}
              alt="Firebase Firestore Logo"
              width={72}
              height={72}
            />
          </div>
          <div>
            <Image src={gp} alt="Google Cloud Logo" width={72} height={72} />
          </div>
          <div>
            <Image src={pp} alt="PayPal Logo" width={72} height={72} />
          </div>
          <div>
            <Image src={sh} alt="Shopify Logo" width={72} height={72} />
          </div>
          <div>
            <Image src={as} alt="Android Studio Logo" width={72} height={72} />
          </div>
          <div>
            <Image src={xc} alt="Xcode Logo" width={72} height={72} />
          </div>
        </Slider>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
