import React from "react";
import newProfile from "../Image/sourabhImage.jpg";
import Button from "@mui/material/Button";

const Profile = () => {
  return (
    <>
      <div className="profile-inform mt-5 mb-5">
        <div className="scroll-container">
          <div className=" first-shadow" style={{ borderRadius: "10px" }}></div>
          <div className="second-shadow">
            <div className=" mt-4 d-flex align-items-center justify-content-between mx-4">
              <div className="d-flex align-items-center gap-4">
                <img className="new-profile-img" src={newProfile} alt="" />
                <div>
                  <h2>Sourabh Singh</h2>
                  <p className="new-para-profile">CEO / Co-Founder</p>
                </div>
              </div>
              <div className="new-profile-btn d-flex justify-content-around">
                <button
                  className="active new-btn-app d-flex align-items-center gap-2"
                  tabindex="1"
                >
                  <i class="bi bi-house-door-fill set-profile-icon"></i>App
                </button>
                <button
                  className=" active new-btn-app d-flex  align-items-center gap-2"
                  tabindex="2"
                >
                  <i class="bi bi-chat-left-dots-fill set-profile-icon"></i>
                  Message
                </button>
                <button
                  className="active new-btn-app d-flex align-items-center gap-2 "
                  tabindex="3"
                >
                  <i class="bi bi-gear-fill set-profile-icon"></i>Setting
                </button>
                <div className="slider"></div>
              </div>
            </div>
            <div className="  mt-5 profile-information mx-5 ">
              <div>
                <h5>Platform Settings</h5>
                <h6>Account</h6>
                <div>
                  <div class="form-check form-switch my-4 ">
                    <input
                      className="form-check-input switch-on "
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                    <p className="personel-account">
                      Email me when someone follows me
                    </p>
                  </div>
                  <div className="form-check form-switch  my-5">
                    <input
                      className="form-check-input switch-on"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                    <p className="personel-account">
                      Email me when someone answers on my post
                    </p>
                  </div>
                  <div className="form-check form-switch  my-4 ">
                    <input
                      className="form-check-input switch-on"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                    <p className="personel-account">
                      Email me when someone mentions me
                    </p>
                  </div>
                </div>
                <div className=" mt-5">
                  <h6>APPLICATION</h6>
                  <div>
                    <div class="form-check form-switch my-3 ">
                      <input
                        className="form-check-input switch-on "
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                      <p className="personel-account">
                        New Launches and Projects
                      </p>
                    </div>
                    <div className="form-check form-switch  my-3">
                      <input
                        className="form-check-input switch-on"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                      <p className="personel-account">
                        Monthley Products Updates
                      </p>
                    </div>
                    <div className="form-check form-switch  my-3 ">
                      <input
                        className="form-check-input switch-on"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                      <p className="personel-account">
                        Subscribe to newsletter
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className=" d-flex justify-content-between">
                  <h5>Profile Information</h5>
                  <i
                    class="bi bi-pen-fill"
                    style={{ color: "grey", fontSize: "1rem" }}
                  ></i>
                </div>

                <p
                  className="infor personel-account "
                  style={{ width: "20rem" }}
                >
                  Hi, I'm Sourabh Singh, Decisions: If you can't decide, the
                  answer is no. If two equally difficult paths, choose the one
                  more painful in the short term (pain avoidance is creating an
                  illusion of equality).
                </p>
                <div className=" opacity-25" style={{ marginTop: "4rem" }}>
                  <hr />
                </div>
                <div>
                  <div className="personel-info-dash">
                    <label htmlFor="">
                      <strong> FirstName:</strong>
                    </label>
                    <p className="personel-account">Sourabh singh</p>
                  </div>
                  <div className="personel-info-dash">
                    <label htmlFor="">
                      <strong>Mobile:</strong>
                    </label>
                    <p className="personel-account">(91) 880 220 7213</p>
                  </div>
                  <div className="personel-info-dash">
                    <label htmlFor="">
                      <strong>Email:</strong>
                    </label>
                    <p className="personel-account">
                      SourabhSingh1795@gmail.com
                    </p>
                  </div>
                  <div className="personel-info-dash">
                    <label htmlFor="">
                      <strong>Location:</strong>
                    </label>
                    <p className="personel-account">India</p>
                  </div>
                  <div className="personel-info-dash">
                    <label htmlFor="">
                      <strong> Social:</strong>
                    </label>
                    <div className=" d-flex gap-3">
                      <i
                        className="bi bi-facebook"
                        style={{ color: "blue" }}
                      ></i>
                      <i
                        className="bi bi-twitter-x"
                        style={{ color: "blue" }}
                      ></i>
                      <i
                        className="bi bi-instagram"
                        style={{ color: "purple" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h5>Platform Settings</h5>
                <div className=" mt-4">
                  <div className=" platform-information">
                    <div>
                      <img
                        className="new-platform-image"
                        src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-1.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h5>Aliena</h5>
                      <p className="new-platform-para">
                        Hi! I need more information...
                      </p>
                    </div>
                    <div>
                      <Button>
                        <span style={{ color: "black" }}>Reply</span>{" "}
                      </Button>
                    </div>
                  </div>
                  <div className=" platform-information mt-3">
                    <div>
                      <img
                        className="new-platform-image"
                        src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-2.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h5>Robert</h5>
                      <p className="new-platform-para">
                        Awesome work, can you...
                      </p>
                    </div>
                    <div>
                      <Button>
                        <span style={{ color: "black" }}>Reply</span>{" "}
                      </Button>
                    </div>
                  </div>
                  <div className="platform-information mt-3">
                    <div>
                      <img
                        className="new-platform-image"
                        src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-3.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h5>micalea</h5>
                      <p className="new-platform-para">About files I can...</p>
                    </div>
                    <div>
                      <Button>
                        <span style={{ color: "black" }}>Reply</span>{" "}
                      </Button>
                    </div>
                  </div>
                  <div className=" platform-information mt-3">
                    <div>
                      <img
                        className="new-platform-image"
                        src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-4.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h5>Peterson</h5>
                      <p className="new-platform-para">
                        Have a great afternoon...
                      </p>
                    </div>
                    <div>
                      <Button>
                        <span style={{ color: "black" }}>Reply</span>{" "}
                      </Button>
                    </div>
                  </div>
                  <div className=" platform-information mt-3">
                    <div>
                      <img
                        className="new-platform-image"
                        src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/bruce-mars.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h5>Bruce Mars</h5>
                      <p className="new-platform-para">
                        Hi! I need more information...
                      </p>
                    </div>
                    <div>
                      <Button>
                        <span style={{ color: "black" }}>Reply</span>{" "}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="projects mt-3">
              <div className=" mx-4">
                <h5>Projects</h5>
                <p className="new-para">Architects design houses</p>
              </div>
              <div className="four-grid-project mx-4 mt-4">
                <div>
                  <div className="card new-project-card">
                    <img
                      src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/home-decor-1.jpeg"
                      className="card-img-top image-border"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="d-flex gap-5">
                        <div>
                          <a href="#" class="btn btn-outline-dark">
                            <span className="new-view-btn"> VIEW PROJECT</span>
                          </a>
                        </div>
                        <div>
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card new-project-card">
                    <img
                      src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/home-decor-2.jpeg"
                      className="card-img-top image-border"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="d-flex gap-5">
                        <div>
                          <a href="#" class="btn btn-outline-dark">
                            <span className="new-view-btn"> VIEW PROJECT</span>
                          </a>
                        </div>
                        <div>
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card new-project-card">
                    <img
                      src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/home-decor-3.jpeg"
                      className="card-img-top image-border"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="d-flex gap-5">
                        <div>
                          <a href="#" class="btn btn-outline-dark">
                            <span className="new-view-btn"> VIEW PROJECT</span>
                          </a>
                        </div>
                        <div>
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card new-project-card">
                    <img
                      src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/home-decor-4.jpeg"
                      className="card-img-top image-border"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="d-flex gap-5">
                        <div>
                          <a href="#" class="btn btn-outline-dark">
                            <span className="new-view-btn"> VIEW PROJECT</span>
                          </a>
                        </div>
                        <div>
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
