import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
};

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
};

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {
  const outerClasses = classNames(
    "cta section center-content-mobile reveal-from-bottom",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "cta-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider",
    split && "cta-split"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div className="cta-slogan">
            <h3 className="m-0">Join Discord for more info!</h3>
            <h3 className="m-0">Get The Bot Today!</h3>
            <p className="m-0">10,000+ servers!</p>
            <p className="m-0">2,000,000+ users!</p>
          </div>
          <ButtonGroup className="cta-action">
            <Button tag="a" color="primary" wideMobile href="https://discord.gg/J4NqJ72">
              Join Discord!
            </Button>
            <Button
              tag="a"
              color="dark"
              wideMobile
              href="https://discordapp.com/oauth2/authorize?client_id=635877338462027783&scope=bot+applications.commands&permissions=2111302911"
            >
              Invite The Bot
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </section>
  );
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
