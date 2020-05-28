import React from "react";
import PropTypes from "prop-types";

MobileMenu.propTypes = {
  showCloseBtn: PropTypes.bool,
};

export default function MobileMenu(props) {
  return (
    <div
      className="mobile-menu"
      style={props.showCloseBtn ? { display: "block" } : { display: "none" }}
      id="menu"
      data-datocms-noindex=""
    >
      <div className="dropdown-container product ">
        <a className="l1 dropdown" href="/">
          Product
        </a>

        <div className="header-dropdown">
          <a className="l2" href="/">
            Overview
          </a>

          <a className="l2" href="/">
            Imply Cloud
          </a>

          <a className="l2" href="/">
            Imply Pivot
          </a>

          <a className="l2" href="/">
            Imply Clarity
          </a>

          <a className="l2" href="/">
            Imply Manager
          </a>

          <a className="l2" href="/">
            Services
          </a>
        </div>
      </div>

      <div className="dropdown-container druid ">
        <a className="l1 dropdown" href="/">
          Druid
        </a>

        <div className="header-dropdown">
          <a className="l2" href="/">
            What is Druid?
          </a>

          <a className="l2" href="/">
            Imply vs Druid
          </a>
        </div>
      </div>

      <div className="dropdown-container solutions ">
        <a className="l1 dropdown" href="/">
          Solutions
        </a>

        <div className="header-dropdown">
          <a className="l2" href="/">
            Use cases
          </a>

          <a className="l2" href="/">
            Hadoop analytics
          </a>
        </div>
      </div>

      <div className="dropdown-container resources ">
        <a className="l1 dropdown" href="/">
          Resources
        </a>

        <div className="header-dropdown">
          <a className="l2" href="/">
            Docs
          </a>

          <a className="l2" href="/">
            Help center
          </a>

          <a className="l2" href="/">
            Videos
          </a>

          <a className="l2" href="/">
            White Papers
          </a>

          <a className="l2" href="/">
            Druid University
          </a>

          <a className="l2" href="/">
            Druid cheat sheet
          </a>

          <a className="l2" href="/">
            Virtual Druid Summit
          </a>
        </div>
      </div>

      <div className="dropdown-container company ">
        <a className="l1 dropdown" href="/">
          Company
        </a>

        <div className="header-dropdown">
          <a className="l2" href="/">
            About us
          </a>

          <a className="l2" href="/">
            Leadership &amp; Board
          </a>

          <a className="l2" href="/">
            Careers
          </a>

          <a className="l2" href="/">
            Press Releases
          </a>

          <a className="l2" href="/">
            News &amp; events
          </a>

          <a className="l2" href="/">
            Newsletter
          </a>

          <a className="l2" href="/">
            Druid Summit 2020
          </a>

          <a className="l2" href="/">
            Partners
          </a>
        </div>
      </div>

      <div className="dropdown-container blog ">
        <a className="l1 dropdown" href="/">
          Blog
        </a>
      </div>

      <div className="dropdown-container contact ">
        <a className="l1 dropdown" href="/">
          Contact
        </a>
      </div>

      <div className="dropdown-container get-started ">
        <a className="l1 dropdown" href="/">
          Get started
        </a>
      </div>

      <a className="l1 search " href="/">
        Search
      </a>
    </div>
  );
}
