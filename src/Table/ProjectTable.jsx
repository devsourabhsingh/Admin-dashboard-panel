import React from "react";
import firstLogo from "../Image/Apple.jpg";
import newAmd from "../Image/amd.svg";
import newAccenture from "../Image/accenture.png";
import newCongnizant from "../Image/Cognizant-.png";
import newQualcomm from "../Image/Qualcomm.png";
import newIntel from "../Image/IntelLogo.png";
import newTsmc from "../Image/TSMCLogo.png";

const ProjectTable = () => {
  return (
    <>
      <div className="table-shadow">
        <div className=" container ">
          <div class="card first-table-shadow">
            <div
              class="card-body bg-black text-white "
              style={{ borderRadius: "15px" }}
            >
              <h5 className=" mt-3 mx-2">Project Table</h5>
            </div>
          </div>
        </div>
        <div className=" mx-4">
          <div class="card second-table-shadow">
            <div class="card-body" style={{ paddingTop: "7rem" }}>
              <table className="table">
                <thead>
                  <tr className="personel-account ">
                    <th className="col-4">COMPANIES</th>
                    <th className="col-3">MEMBER</th>
                    <th className="col-2"> BUDGET</th>
                    <th className="">COMPLETION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        className="new-img-table-project"
                        src={firstLogo}
                        alt=""
                      />
                    </td>
                    <td>
                      <div>
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
                      </div>
                    </td>
                    <td style={{ fontWeight: "500" }}>$14000</td>
                    <td>
                      <div className="d-flex justify-content-between  col-gre new-bold pe-5">
                        <div className="flex-column ">
                          <p style={{ fontWeight: "500", marginBottom: "0" }}>
                            60%
                          </p>
                          <progress id="file" max="100" value="60"></progress>
                        </div>
                        <div>
                          <div class="dropdown">
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
                                className="bi bi-three-dots-vertical"
                                style={{ fontSize: "1.5rem" }}
                              ></i>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-dark">
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
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        className="new-img-table-project"
                        src={newAmd}
                        alt=""
                      />
                    </td>
                    <td>
                      <div>
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
                      </div>
                    </td>
                    <td style={{ fontWeight: "500" }}>$12000</td>
                    <td>
                      <div className="d-flex justify-content-between  col-gre new-bold pe-5">
                        <div className="flex-column ">
                          <p style={{ fontWeight: "500", marginBottom: "0" }}>
                            50%
                          </p>
                          <progress id="file" max="100" value="50"></progress>
                        </div>
                        <div>
                          <div class="dropdown">
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
                                className="bi bi-three-dots-vertical"
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
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        className="new-img-table-project"
                        src={newAccenture}
                        alt=""
                      />
                    </td>
                    <td>
                      <div>
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
                      </div>
                    </td>
                    <td style={{ fontWeight: "500" }}>$10000</td>
                    <td>
                      <div className="d-flex justify-content-between  col-gre new-bold pe-5">
                        <div className="flex-column ">
                          <p style={{ fontWeight: "500", marginBottom: "0" }}>
                            40%
                          </p>
                          <progress id="file" max="100" value="40"></progress>
                        </div>
                        <div>
                          <div class="dropdown">
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
                                className="bi bi-three-dots-vertical"
                                style={{ fontSize: "1.5rem" }}
                              ></i>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-dark">
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
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        className="new-img-table-project"
                        src={newCongnizant}
                        alt=""
                      />
                    </td>
                    <td>
                      <div>
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
                      </div>
                    </td>
                    <td style={{ fontWeight: "500" }}>$20000</td>
                    <td>
                      <div className="d-flex justify-content-between  col-gre new-bold pe-5">
                        <div className="flex-column ">
                          <p style={{ fontWeight: "500", marginBottom: "0" }}>
                            70%
                          </p>
                          <progress id="file" max="100" value="60"></progress>
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
                                className="bi bi-three-dots-vertical"
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
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        className="new-img-table-project"
                        src={newQualcomm}
                        alt=""
                      />
                    </td>
                    <td>
                      <div>
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
                      </div>
                    </td>
                    <td style={{ fontWeight: "500" }}>$14000</td>
                    <td>
                      <div className="d-flex justify-content-between  col-gre new-bold pe-5">
                        <div className="flex-column ">
                          <p style={{ fontWeight: "500", marginBottom: "0" }}>
                            60%
                          </p>
                          <progress id="file" max="100" value="60"></progress>
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
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        className="new-img-table-project"
                        src={newIntel}
                        alt=""
                      />
                    </td>
                    <td>
                      <div>
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
                      </div>
                    </td>
                    <td style={{ fontWeight: "500" }}>$30000</td>
                    <td>
                      <div className="d-flex justify-content-between  col-gre new-bold pe-5">
                        <div className="flex-column ">
                          <p style={{ fontWeight: "500", marginBottom: "0" }}>
                            90%
                          </p>
                          <progress id="file" max="100" value="90"></progress>
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
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        className="new-img-table-project"
                        src={newTsmc}
                        alt=""
                      />
                    </td>
                    <td>
                      <div>
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
                      </div>
                    </td>
                    <td style={{ fontWeight: "500" }}>$27000</td>
                    <td>
                      <div className="d-flex justify-content-between  col-gre new-bold pe-5">
                        <div className="flex-column ">
                          <p style={{ fontWeight: "500", marginBottom: "0" }}>
                            25%
                          </p>
                          <progress id="file" max="100" value="25"></progress>
                        </div>
                        <div>
                          <div class="dropdown">
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
                                className="bi bi-three-dots-vertical"
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
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectTable;
