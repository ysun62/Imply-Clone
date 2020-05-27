import React from "react";
import ImplyPivor from "./solution/ImplyPivot";
import ImplyManager from "./solution/ImplyManager";
import ImplyClarity from "./solution/ImplyClarity";
import DataAlerts from "./solution/DataAlerts";
import ImplySecurity from "./solution/ImplySecurity";
import "./Solutions.css";
import "../../App.css";

export default function Solution() {
  return (
    <>
      <div className="center basic-text title-section">
        <div className="section-content">
          <h1>Imply makes Druid enterprise-ready</h1>
        </div>
      </div>
      <ImplyPivor />
      <ImplyManager />
      <ImplyClarity />
      <DataAlerts />
      <ImplySecurity />
    </>
  );
}
