import React from "react";
import "../../../App.css";

export default function DataAlerts() {
  return (
    <div className="standard continuous-section white  basic-text">
      <div className="section-content">
        <h1>Set and get custom data alerts</h1>

        <div className="two-column medium">
          <div className="image-only">
            <img src="https://www.datocms-assets.com/11147/1564162793-alerts-2.png" />
          </div>

          <div>
            <p className="data-alerts-p">
              Configurable alerts let you set triggers and get real-time
              notification of changes in your Pivot data cubes or dashboards.
              You can set relative or absolute thresholds on one or more
              conditions and even preview likely alert incidence from historical
              data. Then you can get notifications via email, in-product or from
              third party apps via webhooks integration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
