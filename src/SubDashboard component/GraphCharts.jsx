import React from "react";
import NewPiecharts from "../charts/NewPiecharts";
import NewBarCharts from "../charts/NewBarCharts";
import NewLineCharts from "../charts/NewLineCharts";

const GraphCharts = () => {
  
  return (
    <>
      <div className=" three-grid mt-5">
        <div className="card new-border-radius">
          <NewPiecharts />
          <div class="card-body">
            <div>
              <h6 className="new-head-chart">Website View</h6>
              <p className="new-para">Last Campaign Performance</p>
            </div>
            <div>
              <hr />
            </div>
            <p class="card-text new-time">
              <span>
                <i class="bi bi-stopwatch-fill"></i>
              </span>
              campaign sent 2 days ago
            </p>
          </div>
        </div>
        <div className="card new-border-radius">
          <NewBarCharts />
          <div class="card-body">
            <div>
              <h6 className="new-head-chart">Website View</h6>
              <p className="new-para">Last Campaign Performance</p>
            </div>
            <p class="card-text">
              This report summarizes the recommendations of the JWST Data
              Analysis Advisory Group (DAAG) that were presented to the JWST
              Users Committee on December 11, 2020.: Over the period of
              July–December 2020 the DAAG focused its attention on the general
              landscape of data analysis tools that will be available to the
              JWST community.
            </p>
          </div>
          <div>
            <hr />
          </div>
          <p class="card-text new-time mx-4 pb-5">
            <span>
              <i class="bi bi-stopwatch-fill"></i>
            </span>
            updated 4 min ago
          </p>
        </div>
        <div className="card new-border-radius" style={{ width: "24rem" }}>
          <NewLineCharts />
          <div class="card-body">
            <div>
              <h6 className="new-head-chart">Website View</h6>
              <p className="new-para">Last Campaign Performance</p>
            </div>
            <p class="card-text">
              This report was produced by CSR under contract number
              GS-10F-0114L, awarded by the Office for Victims of Crime, Office
              of Justice Programs, U.S. Department of Justice. The opinions,
              findings, and conclusions or recommendations expressed in this
              report are those of the contributors and do not necessarily
              represent the official positions or policies of the U.S.
              Department of Justice.
            </p>
            <div>
              <hr />
            </div>
            <p class="card-text new-time mx-4 pb-3">
              <span>
                <i class="bi bi-stopwatch-fill"></i>
              </span>
              just updated
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GraphCharts;
