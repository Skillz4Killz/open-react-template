import React from "react";
// import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
// import SectionHeader from "./partials/SectionHeader";

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
  // const outerClasses = classNames(
  //   "testimonial section",
  //   topOuterDivider && "has-top-divider",
  //   bottomOuterDivider && "has-bottom-divider",
  //   hasBgColor && "has-bg-color",
  //   invertColor && "invert-color",
  //   className
  // );

  // const innerClasses = classNames(
  //   "testimonial-inner section-inner",
  //   topDivider && "has-top-divider",
  //   bottomDivider && "has-bottom-divider"
  // );

  // const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  // const sectionHeader = {
  //   title: "Testimonials",
  //   paragraph:
  //     "Here's what our users have to say about Gamer! Check out their server's for yourself to get a view on how they make use of Gamer to create an amazing community!",
  // };

  return (
    <div></div>
    /** <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">Testimonial here</p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Server Name Here</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Admin Name & Discord Link Here To Your Server</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">Testimonial here</p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Server Name Here</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Admin Name & Discord Link Here To Your Server</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">Testimonial here</p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Server Name Here</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Admin Name & Discord Link Here To Your Server</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
