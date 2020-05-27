import React from "react";
import "../../../App.css";

export default function ImplyManager() {
  return (
    <div className="standard continuous-section white basic-text">
      <div className="section-content">
        <h1>Manage Druid clusters with Imply Manager</h1>
        <div className="two-column medium">
          <div className="image-only">
            <img src="https://www.datocms-assets.com/11147/1563205144-manager.png" />
          </div>
          <div>
            <ul>
              <li>Deploy, scale and update clusters</li>
              <li>Easily view your cluster status.</li>
              <li>One click, no downtime software updates.</li>
              <li>Designed to work with Kubernetes.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
