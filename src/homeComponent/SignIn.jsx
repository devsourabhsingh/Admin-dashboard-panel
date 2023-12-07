import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import newDiamond from "../Image/DiamondImage.jpeg";

const SignIn = ({ setHideAll, setSignupHide }) => {
  let location = useLocation();
  const navigate = useNavigate();
  
  const handleHomeClick = () => {
    setHideAll(false);
    setSignupHide(false);
    if (location.pathname === "/signin") {
      navigate("/");
    }
  };

  return (
    <>
      <div className="sign-in mx-5">
        <form>
          <div className="sign-grid">
            <div className=" mt-2">
              <button
                className=" border-0"
                onClick={handleHomeClick}
                style={{ backgroundColor: "transparent", marginRight: "15rem" }}
              >
                <i
                  class="bi bi-arrow-left-circle-fill"
                  style={{ fontSize: "2.5rem" }}
                ></i>
              </button>
            </div>
            <div className="form-grid">
              <div className=" text-center">
                <h1>Sign In</h1>
                <p>Enter your email and password to Sign In.</p>
              </div>
              <div className="mb-3 ">
                <div className="d-flex flex-column">
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="new-input-width"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="name@email.com"
                  />
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex flex-column">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className=" new-input-width"
                    id="exampleInputPassword1"
                    placeholder="********"
                  />
                </div>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  i agree the
                  <span className=" text-decoration-underline">
                    Terms and Conditions
                  </span>
                </label>
              </div>
              <button
                style={{ height: "2.5rem" }}
                type="submit"
                className="btn btn-primary"
              >
                SIGN IN
              </button>
            </div>
            <div className="mt-5 mb-5">
              <img
                style={{
                  height: "55rem",
                  width: "40rem",
                  borderRadius: "30px",
                }}
                src={newDiamond}
                alt=""
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
