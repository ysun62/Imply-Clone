import React from "react";

export default function MobileMenu(props) {
  return (
    <div
      className="mobile-menu"
      style={props.showCloseBtn ? { display: "block" } : { display: "none" }}
      id="menu"
      data-datocms-noindex=""
    >
      <div className="dropdown-container product ">
        <a className="l1 dropdown" href="/product">
          Product
        </a>

        <div className="header-dropdown">
          <a className="l2" href="/product/">
            Overview
          </a>

          <a className="l2" href="/product/imply-cloud">
            Imply Cloud
          </a>

          <a className="l2" href="/product/imply-pivot">
            Imply Pivot
          </a>

          <a className="l2" href="/product/imply-clarity">
            Imply Clarity
          </a>

          <a className="l2" href="/product/imply-manager">
            Imply Manager
          </a>

          <a className="l2" href="/services">
            Services
          </a>
        </div>
      </div>

      <div className="dropdown-container druid ">
        <a className="l1 dropdown" href="/druid">
          Druid
        </a>

        <div className="header-dropdown">
          <a className="l2" href="/druid">
            What is Druid?
          </a>

          <a className="l2" href="/imply-vs-druid">
            Imply vs Druid
          </a>
        </div>
      </div>

      <div className="dropdown-container solutions ">
        <a className="l1 dropdown" href="/solutions">
          Solutions
        </a>

        <div className="header-dropdown">
          <a className="l2" href="/solutions">
            Use cases
          </a>

          <a className="l2" href="/solutions/imply-and-druid-with-hadoop">
            Hadoop analytics
          </a>
        </div>
      </div>

      <div className="dropdown-container resources ">
        <a className="l1 dropdown" href="https://imply.io/resources">
          Resources
        </a>

        <div className="header-dropdown">
          <a className="l2" href="https://docs.imply.io">
            Docs
          </a>

          <a className="l2" href="https://support.imply.io">
            Help center
          </a>

          <a className="l2" href="/videos">
            Videos
          </a>

          <a className="l2" href="/white-papers">
            White Papers
          </a>

          <a className="l2" href="/druid-university">
            Druid University
          </a>

          <a className="l2" href="/druid/cheat-sheet">
            Druid cheat sheet
          </a>

          <a className="l2" href="https://imply.io/virtual-druid-summit">
            Virtual Druid Summit
          </a>
        </div>
      </div>

      <div className="dropdown-container company ">
        <a className="l1 dropdown" href="/about">
          Company
        </a>

        <div className="header-dropdown">
          <a className="l2" href="/about">
            About us
          </a>

          <a className="l2" href="/leadership-and-board">
            Leadership &amp; Board
          </a>

          <a className="l2" href="/careers">
            Careers
          </a>

          <a className="l2" href="/press-releases">
            Press Releases
          </a>

          <a className="l2" href="/news">
            News &amp; events
          </a>

          <a className="l2" href="/newsletter">
            Newsletter
          </a>

          <a className="l2" href="https://druidsummit.org">
            Druid Summit 2020
          </a>

          <a className="l2" href="/partners">
            Partners
          </a>
        </div>
      </div>

      <div className="dropdown-container blog ">
        <a className="l1 dropdown" href="/blog">
          Blog
        </a>
      </div>

      <div className="dropdown-container contact ">
        <a className="l1 dropdown" href="/contact">
          Contact
        </a>
      </div>

      <div className="dropdown-container get-started ">
        <a className="l1 dropdown" href="/get-started">
          Get started
        </a>
      </div>

      <a className="l1 search " href="/search">
        Search
      </a>
    </div>
  );
}
