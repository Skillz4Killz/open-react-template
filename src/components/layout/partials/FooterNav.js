import React from "react";
import classNames from "classnames";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <a href="https://gamer.mod.land">Guides</a>
        </li>
        <li>
          <a href="https://gamer.mod.land/docs/policy.html">Privacy Policy</a>
        </li>
        <li>
          <a href="https://gamer.mod.land/docs/faq.html">FAQ's</a>
        </li>
        <li>
          <a href="https://gamer.mod.land/docs/vip.html">VIP</a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
