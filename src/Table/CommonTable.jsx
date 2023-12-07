import React from "react";

const CommonTable = () => {
  
  return (
    <>
      <div className="table-shadow">
        <div className=" container ">
          <div class="card first-table-shadow">
            <div
              class="card-body bg-black text-white "
              style={{ borderRadius: "15px" }}
            >
              <h5 className=" mt-3 mx-2">Authors Table</h5>
            </div>
          </div>
        </div>
        <div className=" mx-4">
          <div class="card second-table-shadow">
            <div class="card-body" style={{ paddingTop: "7rem" }}>
              <table className="table">
                <thead>
                  <tr className="personel-account ">
                    <th className="col-4">AUTHOR</th>
                    <th className="col-3">FUNCTION</th>
                    <th className="col-2">STATUS</th>
                    <th className="">EMPLOYED</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex gap-4">
                        <div>
                          <img
                            className="new-img-table"
                            src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-2.jpeg"
                            alt=""
                          />
                        </div>
                        <div>
                          <h6 className=" mb-0">John Michael</h6>
                          <p className="new-para-font">john@creative-tim.com</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <h6 className="col-gre">MANAGER</h6>
                        <p className="new-para-font">Organization</p>
                      </div>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-success new-btn-online"
                      >
                        Success
                      </button>
                    </td>
                    <td>
                      <div className="d-flex justify-content-between col-gre new-bold pe-5">
                        <div>
                          <p>23/04/18</p>
                        </div>
                        <div>
                          <p>Edit</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex gap-4">
                        <div>
                          <img
                            className="new-img-table"
                            src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-1.jpeg"
                            alt=""
                          />
                        </div>
                        <div>
                          <h6 className=" mb-0">Alexa Liras</h6>
                          <p className="new-para-font">
                            alexa@creative-tim.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <h6 className="col-gre">Programator</h6>
                        <p className="new-para-font">Developer</p>
                      </div>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-secondary new-btn-online"
                      >
                        OFFLINE
                      </button>
                    </td>
                    <td>
                      <div className="d-flex justify-content-between col-gre new-bold pe-5">
                        <div>
                          <p>11/01/19</p>
                        </div>
                        <div>
                          <p>Edit</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex gap-4">
                        <div>
                          <img
                            className="new-img-table"
                            src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-4.jpeg"
                            alt=""
                          />
                        </div>
                        <div>
                          <h6 className=" mb-0">Laurent Perrier</h6>
                          <p className="new-para-font">
                            laurent@creative-tim.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <h6 className="col-gre">Executive</h6>
                        <p className="new-para-font">Projects</p>
                      </div>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-success new-btn-online"
                      >
                        ONLINE
                      </button>
                    </td>
                    <td>
                      <div className="d-flex justify-content-between col-gre new-bold pe-5">
                        <div>
                          <p>19/09/17</p>
                        </div>
                        <div>
                          <p>Edit</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex gap-4">
                        <div>
                          <img
                            className="new-img-table"
                            src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-3.jpeg"
                            alt=""
                          />
                        </div>
                        <div>
                          <h6 className=" mb-0">Michael Levi</h6>
                          <p className="new-para-font">
                            michael@creative-tim.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <h6 className="col-gre">Programator</h6>
                        <p className="new-para-font">Developer</p>
                      </div>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-success new-btn-online"
                      >
                        ONLINE
                      </button>
                    </td>
                    <td>
                      <div className="d-flex justify-content-between col-gre new-bold pe-5">
                        <div>
                          <p>24/12/08</p>
                        </div>
                        <div>
                          <p>Edit</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex gap-4">
                        <div>
                          <img
                            className="new-img-table"
                            src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/bruce-mars.jpeg"
                            alt=""
                          />
                        </div>
                        <div>
                          <h6 className=" mb-0">Bruce Mars</h6>
                          <p className="new-para-font">
                            bruce@creative-tim.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <h6 className="col-gre">MANAGER</h6>
                        <p className="new-para-font">Executive</p>
                      </div>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-secondary new-btn-online"
                      >
                        OFFLINE
                      </button>
                    </td>
                    <td>
                      <div className="d-flex justify-content-between col-gre new-bold pe-5">
                        <div>
                          <p>04/10/21</p>
                        </div>
                        <div>
                          <p>Edit</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex gap-4">
                        <div>
                          <img
                            className="new-img-table"
                            src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/bruce-mars.jpeg"
                            alt=""
                          />
                        </div>
                        <div>
                          <h6 className=" mb-0">Bruce Mars</h6>
                          <p className="new-para-font">
                            bruce@creative-tim.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <h6 className="col-gre">MANAGER</h6>
                        <p className="new-para-font">Executive</p>
                      </div>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-secondary new-btn-online"
                      >
                        OFFLINE
                      </button>
                    </td>
                    <td>
                      <div className="d-flex justify-content-between col-gre new-bold pe-5">
                        <div>
                          <p>04/10/21</p>
                        </div>
                        <div>
                          <p>Edit</p>
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

export default CommonTable;
