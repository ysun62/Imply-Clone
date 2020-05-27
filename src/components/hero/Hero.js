import React from "react";
import "./Hero.css";
import "../../App.css";

export default function Hero() {
  return (
    <div className="leader-solutions">
      <div className="section-content">
        <h1>The only complete Apache Druid solution</h1>
        <h2>
          Imply combines Druid with powerful visualization, management,
          monitoring, and security components. It can be deployed in your data
          center or as a managed service in the cloud.
        </h2>
        <div className="action-buttons">
          <a href="/">
            <div className="action-button">Download trial</div>
          </a>

          <a href="/">
            <div className="action-button">Cloud trial</div>
          </a>
        </div>
      </div>
    </div>
  );
}
