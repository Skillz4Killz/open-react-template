import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

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
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap center-content", pushLeft && "push-left");

  const sectionHeader = {
    title: "What Gamer Can Do For You!",
    paragraph:
      "Gamer is one of the most advanced bots on Discord. It was designed for specifically for official gaming servers. But it is built in a way that it can be used by any server!",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-01.svg")}
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Idle Game & Counting Game & Free Nitro</h4>
                  <p className="m-0 text-sm">
                    An amazingly entertaining idle game to keep your server constantly active and giving your users a
                    chance to win Discord Nitro!
                  </p>
                  <img src="https://i.imgur.com/54JXspA.png" alt="" />
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-02.svg")}
                      alt="Features tile icon 02"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Leveling, Missions/Quests, XP!</h4>
                  <p className="m-0 text-sm">
                    The most beautiful and extremely customizable profile/rank cards on Discord! Give or take roles when
                    users gain or lose levels. Remove XP automatically for inactivity and reward XP for activity!
                  </p>
                  <img src="https://i.imgur.com/3MTeIXH.png" alt="" />
                  <img src="https://i.imgur.com/mznXR6k.png" alt="" />
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-03.svg")}
                      alt="Features tile icon 03"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Looking For Group / Events</h4>
                  <p className="m-0 text-sm">
                    Organize and schedule a gathering whether it be in real life, or on the server. It will provide you
                    with a method of sending out pertinent information to those you want, while allowing users the
                    ability to RSVP to the event to let you know they’ll be there (or that they can’t make it).
                  </p>
                  <img src="https://i.imgur.com/iKaUFKU.gif" alt="" />
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-04.svg")}
                      alt="Features tile icon 04"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Subscribe To Alerts You Care About!</h4>
                  <p className="m-0 text-sm">
                    Don't you hate getting @ mentions for posts that don't matter? Using Gamers advanced alerts system
                    you can filter them to be exactly what you want!
                  </p>
                  <img src="https://i.imgur.com/gSAJCUL.png" alt="" />
                  <img src="https://i.imgur.com/NzlRwVY.png" alt="" />
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-05.svg")}
                      alt="Features tile icon 05"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Feedback / Bug Reports Feature</h4>
                  <p className="m-0 text-sm">
                    Collect suggestions or bug reports from your users. A flexible and customizable feedback feature
                    that provides the best experience for not just developers but users as well for sending feedback.
                  </p>
                  <img src="https://i.imgur.com/Q0dNsCc.png" alt="" />
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-06.svg")}
                      alt="Features tile icon 06"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Best Support System Ever!</h4>
                  <p className="m-0 text-sm">
                    Allow users to create private tickets right on Discord! Create a list of questions users must answer
                    to send a ticket! Set up custom template responses for FAQ! Why waste money on third party support
                    who don't really understand your game, when you can just have your most helpful players like your
                    moderators help the players! They understand the players needs and concerns better than anyone else!
                  </p>
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
