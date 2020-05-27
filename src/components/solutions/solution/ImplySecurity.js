import React from "react";
import "../../../App.css";

export default function ImplySecurity() {
  return (
    <div className="standard continuous-section white  basic-text">
      <div className="section-content">
        <h1>Protect your cluster with Imply Security</h1>

        <div className="two-column medium wrap-reverse">
          <div className="image-only">
            <img src="https://www.datocms-assets.com/11147/1561064808-user-roles.png" />
          </div>

          <div>
            <ul>
              <li>Row, column and table level security</li>
              <li>Role-based access control</li>
              <li>End-to-end data encryption</li>
              <li>Integrate with LDAP, Kerberos, OAuth and more</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
