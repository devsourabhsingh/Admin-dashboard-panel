import React from "react";

const FirstBoard = () => {
  
  return (
    <>
      <div className="four-grid  ">
        <div className="first-card ">
          <div class="card new-border-radius " style={{ width: "18rem" }}>
            <ul class="list-group list-group-flush">
              <li class="list-group-item p-4 d-flex justify-content-between align-items-center">
                <i
                  class="bi bi-cash-stack"
                  style={{
                    fontSize: "2rem",
                    backgroundColor: "black",
                    color: "white",
                    padding: "4px",
                    borderRadius: "10px",
                  }}
                ></i>
                <li>
                  <p
                    className=" mb-0"
                    style={{ color: "grey", fontSize: "1.2rem" }}
                  >
                    Today's Money
                  </p>
                  <span style={{ fontSize: "2rem", fontWeight: "700" }}>
                    <i class="bi bi-currency-dollar"></i>
                    53k
                  </span>
                </li>
              </li>
              <li class="list-group-item">
                <h5 style={{ opacity: "0.5" }}>
                  <span
                    style={{
                      color: "green",
                      fontSize: "2rem",
                      fontWeight: "500",
                      marginRight: "1rem",
                    }}
                  >
                    +55%
                  </span>
                  than last week
                </h5>
              </li>
            </ul>
          </div>
        </div>
        <div className="first-card">
          <div class="card new-border-radius" style={{ width: "18rem" }}>
            <ul class="list-group list-group-flush">
              <li class="list-group-item p-4 d-flex justify-content-between align-items-center">
                <i
                  class="bi bi-people"
                  style={{
                    fontSize: "2rem",
                    backgroundColor: "black",
                    color: "white",
                    padding: "4px",
                    borderRadius: "10px",
                  }}
                ></i>
                <li>
                  <p
                    className=" mb-0"
                    style={{ color: "grey", fontSize: "1.2rem" }}
                  >
                    Today's Users
                  </p>
                  <span style={{ fontSize: "2rem", fontWeight: "700" }}>
                    2300
                  </span>
                </li>
              </li>
              <li class="list-group-item">
                <h5 style={{ opacity: "0.5" }}>
                  <span
                    style={{
                      color: "green",
                      fontSize: "2rem",
                      fontWeight: "500",
                      marginRight: "1rem",
                    }}
                  >
                    +3%
                  </span>
                  than last Month
                </h5>
              </li>
            </ul>
          </div>
        </div>
        <div className="first-card">
          <div class="card new-border-radius" style={{ width: "18rem" }}>
            <ul class="list-group list-group-flush">
              <li class="list-group-item p-4 d-flex justify-content-between align-items-center ">
                <i
                  class="bi bi-person-plus"
                  style={{
                    fontSize: "2rem",
                    backgroundColor: "black",
                    color: "white",
                    padding: "4px",
                    borderRadius: "10px",
                  }}
                ></i>
                <li>
                  <p
                    className=" mb-0"
                    style={{ color: "grey", fontSize: "1.2rem" }}
                  >
                    New Clients
                  </p>
                  <span style={{ fontSize: "2rem", fontWeight: "700" }}>
                    3462
                  </span>
                </li>
              </li>
              <li class="list-group-item">
                <h5 style={{ opacity: "0.5" }}>
                  <span
                    style={{
                      color: "green",
                      fontSize: "2rem",
                      fontWeight: "500",
                      marginRight: "1rem",
                    }}
                  >
                    -2%
                  </span>
                  than yesterday
                </h5>
              </li>
            </ul>
          </div>
        </div>
        <div className="first-card">
          <div class="card new-border-radius" style={{ width: "18rem" }}>
            <ul class="list-group list-group-flush">
              <li class="list-group-item p-4 d-flex justify-content-between align-items-center ">
                <i
                  class="bi bi-bar-chart-fill"
                  style={{
                    fontSize: "2rem",
                    backgroundColor: "black",
                    color: "white",
                    padding: "4px",
                    borderRadius: "10px",
                  }}
                ></i>
                <li>
                  <p
                    className=" mb-0"
                    style={{ color: "grey", fontSize: "1.2rem" }}
                  >
                    Sales
                  </p>
                  <span style={{ fontSize: "2rem", fontWeight: "700" }}>
                    <i class="bi bi-currency-dollar"></i>
                    103430
                  </span>
                </li>
              </li>
              <li class="list-group-item">
                <h5 style={{ opacity: "0.5" }}>
                  <span
                    style={{
                      color: "green",
                      fontSize: "2rem",
                      fontWeight: "500",
                      marginRight: "1rem",
                    }}
                  >
                    +5%
                  </span>
                  than yesterday
                </h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstBoard;
