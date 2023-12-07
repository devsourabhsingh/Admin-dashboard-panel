import React from "react";
import firstLogo from "../Image/Apple.jpg";
import newAmd from "../Image/amd.svg";
import newAccenture from "../Image/accenture.png";
import newCongnizant from "../Image/Cognizant-.png";
import newQualcomm from "../Image/Qualcomm.png";

const Project = () => {
  return (
    <>
      <div className="two-grid mt-4 ">
        <div className="project-data new-border-radius">
          <div className=" mx-4 mt-4 d-flex justify-content-between">
            <div>
              <h5>Projects</h5>
              <span>
                <i className="bi bi-check-circle-fill"></i> 30 done this month
              </span>
            </div>

            <div>
              <div className="dropdown">
                <button
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    color: "black",
                  }}
                >
                  <i
                    class="bi bi-three-dots-vertical"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li>
                    <a className="dropdown-item active" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th className="col-3">COMPANIES</th>
                <th className="col-2">MEMBER</th>
                <th className="col-2"> BUDGET</th>
                <th className="col-2">COMPLETION</th>
              </tr>
            </thead>
            {/* <div style={{ borderBottom: "1px solid grey", width: "52rem" }}></div> */}
            <tbody>
              <tr>
                <td>
                  <div className=" d-flex align-items-end">
                    <img className="new-img" src={firstLogo} alt="" />
                  </div>
                </td>
                <td>
                  <div
                    className=" new-round  d-flex "
                    style={{ marginLeft: "3rem" }}
                  >
                    <img
                      className="new-img-mem "
                      src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-1.jpeg"
                      alt=""
                    />
                    <img
                      className="new-img-mem new-index"
                      src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-2.jpeg"
                      alt=""
                    />
                    <img
                      className="new-img-mem new-index"
                      src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-3.jpeg"
                      alt=""
                    />
                    <img
                      className="new-img-mem new-index"
                      src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-4.jpeg"
                      alt=""
                    />
                  </div>
                </td>
                <td style={{ fontWeight: "500" }}>$14000</td>
                <td>
                  <p style={{ fontWeight: "500", marginBottom: "0" }}>60%</p>
                  <progress id="file" max="100" value="60"></progress>
                </td>
              </tr>
              <tr>
                <td>
                  <div className=" d-flex align-items-end">
                    <img className="new-img-amd" src={newAmd} alt="" />
                  </div>
                </td>
                <td>
                  <div
                    className=" new-round  d-flex  "
                    style={{ marginLeft: "3rem" }}
                  >
                    <img
                      className="new-img-mem "
                      src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-1.jpeg"
                      alt=""
                    />
                    <img
                      className="new-img-mem new-index"
                      src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-2.jpeg"
                      alt=""
                    />
                    <img
                      className="new-img-mem new-index"
                      src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-3.jpeg"
                      alt=""
                    />
                    <img
                      className="new-img-mem new-index"
                      src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-4.jpeg"
                      alt=""
                    />
                  </div>
                </td>
                <td style={{ fontWeight: "500" }}>$16000</td>
                <td>
                  <p style={{ fontWeight: "500", marginBottom: "0" }}>50%</p>
                  <progress id="file" max="100" value="50"></progress>
                </td>
              </tr>
              <tr>
                <td>
                  <div className=" d-flex align-items-end">
                    <img className="new-img-amd" src={newAccenture} alt="" />
                  </div>
                </td>
                <td>
                  <div
                    className=" new-round  d-flex  "
                    style={{ marginLeft: "3rem" }}
                  >
                    <img
                      className="new-img-mem "
                      src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-1.jpeg"
                      alt=""
                    />
                    <img
                      className="new-img-mem new-index"
                      src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-2.jpeg"
                      alt=""
                    />
                    <img
                      className="new-img-mem new-index"
                      src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-3.jpeg"
                      alt=""
                    />
                    <img
                      className="new-img-mem new-index"
                      src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-4.jpeg"
                      alt=""
                    />
                  </div>
                </td>
                <td style={{ fontWeight: "500" }}>$20000</td>
                <td>
                  <p style={{ fontWeight: "500", marginBottom: "0" }}>30%</p>
                  <progress id="file" max="100" value="30"></progress>
                </td>
              </tr>
              <tr>
                <td>
                  <div className=" d-flex align-items-end">
                    <img className="new-img-amd" src={newCongnizant} alt="" />
                  </div>
                </td>
                <td>
                  <div
                    className=" new-round  d-flex  "
                    style={{ marginLeft: "3rem" }}
                  >
                    <img
                      className="new-img-mem "
                      src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-1.jpeg"
                      alt=""
                    />
                    <img
                      className="new-img-mem new-index"
                      src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-2.jpeg"
                      alt=""
                    />
                    <img
                      className="new-img-mem new-index"
                      src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-3.jpeg"
                      alt=""
                    />
                    <img
                      className="new-img-mem new-index"
                      src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-4.jpeg"
                      alt=""
                    />
                  </div>
                </td>
                <td style={{ fontWeight: "500" }}>$12000</td>
                <td>
                  <p style={{ fontWeight: "500", marginBottom: "0" }}>70%</p>
                  <progress id="file" max="100" value="70"></progress>
                </td>
              </tr>

              <tr>
                <td>
                  <div className=" d-flex align-items-end">
                    <img className="new-img-amd" src={newQualcomm} alt="" />
                  </div>
                </td>
                <td>
                  <div
                    className=" new-round  d-flex  "
                    style={{ marginLeft: "3rem" }}
                  >
                    <img
                      className="new-img-mem "
                      src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-1.jpeg"
                      alt=""
                    />
                    <img
                      className="new-img-mem new-index"
                      src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-2.jpeg"
                      alt=""
                    />
                    <img
                      className="new-img-mem new-index"
                      src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-3.jpeg"
                      alt=""
                    />
                    <img
                      className="new-img-mem new-index"
                      src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-4.jpeg"
                      alt=""
                    />
                  </div>
                </td>
                <td style={{ fontWeight: "500" }}>$25000</td>
                <td>
                  <p style={{ fontWeight: "500", marginBottom: "0" }}>80%</p>
                  <progress id="file" max="100" value="80"></progress>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="overview-data new-border-radius">
          <div className=" mt-4 mx-4">
            <ul>
              <li>
                <h5>Orders Overview</h5>
              </li>
              <li>
                <p>
                  <span>
                    <i
                      class="bi bi-arrow-up"
                      style={{
                        fontSize: "1.5rem",
                        color: "green",
                      }}
                    ></i>
                  </span>
                  24%
                  <span style={{ color: "grey", fontWeight: "500" }}>
                    this month
                  </span>
                </p>
              </li>
            </ul>
            <div className="">
              <div className=" d-flex align-items-center gap-5">
                <i class="bi bi-bell-fill new-size"></i>
                <div>
                  <p
                    style={{
                      marginBottom: "0",
                      fontWeight: "500",
                    }}
                  >
                    $2400, Design changes
                  </p>
                  <p className="new-para">22 DEC 7:20 PM</p>
                </div>
              </div>
              <div className="new-overview mx-2">|</div>
              <div className=" d-flex align-items-center gap-5">
                <i class="bi bi-plus-circle-fill new-size"></i>{" "}
                <div>
                  <p
                    style={{
                      marginBottom: "0",
                      fontWeight: "500",
                    }}
                  >
                    New order #1832412
                  </p>
                  <p className="new-para">21 DEC 11 PM</p>
                </div>
              </div>
              <div className="new-overview mx-2"> |</div>
              <div className="d-flex align-items-center gap-5 ">
                <i class="bi bi-cart-fill new-size"></i>
                <div>
                  <p
                    style={{
                      marginBottom: "0",
                      fontWeight: "500",
                    }}
                  >
                    Server payments for April
                  </p>
                  <p className="new-para">21 DEC 9:34 PM</p>
                </div>
              </div>
              <div className="new-overview mx-2">|</div>
              <div className="d-flex align-items-center gap-5">
                <i class="bi bi-credit-card-2-front-fill new-size"></i>
                <div>
                  <p
                    style={{
                      marginBottom: "0",
                      fontWeight: "500",
                    }}
                  >
                    New card added for order #4395133
                  </p>
                  <p className="new-para">20 DEC 2:20 AM</p>
                </div>
              </div>
              <div className="new-overview mx-2">|</div>
              <div className="d-flex align-items-center gap-5">
                <i class="bi bi-unlock-fill new-size"></i>
                <div>
                  <p
                    style={{
                      marginBottom: "0",
                      fontWeight: "500",
                    }}
                  >
                    Unlock packages for development
                  </p>
                  <p className="new-para">18 DEC 4:54 AM</p>
                </div>
              </div>
              <div className="new-overview mx-2 ">|</div>
              <div className="d-flex align-items-center gap-5">
                <i class="bi bi-wallet-fill new-size"></i>
                <div>
                  <p
                    style={{
                      marginBottom: "0",
                      fontWeight: "500",
                    }}
                  >
                    New order #9583120
                  </p>
                  <p className="new-para">17 DEC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
