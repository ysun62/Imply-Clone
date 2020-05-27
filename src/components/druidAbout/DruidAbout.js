import React from "react";
import "./DruidAbout.css";
import "../../App.css";

export default function DruidAbout() {
  return (
    <div className="standard gray center basic-text">
      <section className="section-content">
        <h1>Outperforms data warehouses by 100X</h1>
        <p>
          Druid excels over data warehouses for ad-hoc OLAP queries where low
          latency is a must. Data warehouses are built to answer large, complex
          SQL queries, where speed is not the primary concern.
        </p>
        <div className="three-column">
          <div>
            <h3>High-speed ingestion</h3>
            <span>
              {" "}
              Druid works out of the box with stream hubs (Apache Kafka,
              Kinesis), data lakes (HDFS, S3, Google Cloud Storage, Azure
              storage), HTTP, local files, and more.{" "}
            </span>
          </div>
          <div>
            <h3>Ad-hoc analytics</h3>
            <span>
              {" "}
              Druid fully indexes data into a novel storage format that is
              highly optimized for OLAP analytic queries.{" "}
            </span>
          </div>
          <div>
            <h3>Instant results</h3>
            <span>
              {" "}
              Druid is built for sub-second SQL queries, even at high
              concurrency. Druid is great at powering analytics applications.{" "}
            </span>
          </div>
        </div>
        <p className="center">
          <a className="button-text" href="/">
            See how leading companies are using Druid
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="13"
              viewBox="0 0 16 13"
            >
              <polygon
                fill="#000000"
                fillRule="evenodd"
                points="9 5 1 5 1 8 9 8 9 12 15 6.5 9 1"
              ></polygon>
            </svg>
          </a>
        </p>
      </section>
    </div>
  );
}
