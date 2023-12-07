import { NavLink, useLocation } from "react-router-dom";
import newLogo from "../Image/Remove-bg-logo.png";

const Home = ({ newColor, newActive, onClick3, onClick4 }) => {
  let location = useLocation();

  return (
    <>
      <div className="main-section">
        <div>
          <section className={`mt-4 side-bar mx-3 ${newColor}`}>
            <div className=" mx-5 pt-2">
              <img
                style={{ width: "10rem", height: "3rem" }}
                src={newLogo}
                alt=""
              />
            </div>

            <ul
              className={"mt-5 dashboard-data mx-2"}
              style={{ paddingLeft: "0rem" }}
            >
              <li>
                <NavLink
                  className={`newely-highlight ${
                    location.pathname === "/" ? newActive : ""
                  }`}
                  to="/"
                >
                  <span>
                    <i className="bi bi-house-door-fill mx-3"></i>
                    Dashboard
                  </span>
                </NavLink>
              </li>
              <li className="my-2">
                <NavLink
                  className={` newely-highlight  ${
                    location.pathname === "/profile" ? newActive : ""
                  }`}
                  to="/profile"
                >
                  <span className="">
                    <i className="bi bi-person-circle mx-3"></i>
                    Profile
                  </span>
                </NavLink>
              </li>
              <li className="my-2">
                <NavLink
                  className={` newely-highlight  ${
                    location.pathname === "/tables" ? newActive : ""
                  }`}
                  to="/tables"
                >
                  <i className="bi bi-table mx-3"></i>Tables
                </NavLink>
              </li>
              <li className=" my-2">
                <NavLink
                  className={` newely-highlight  ${
                    location.pathname === "/notifications" ? newActive : ""
                  }`}
                  to="/notifications"
                >
                  <i className="bi bi-info-circle-fill mx-3"></i>Notifications
                </NavLink>
              </li>
            </ul>
            <h5 className=" mx-4" style={{ fontWeight: "700", color: "grey" }}>
              AUTHPAGES
            </h5>
            <ul
              className=" mx-2"
              style={{ color: "grey", paddingLeft: "0rem" }}
            >
              <li className="mt-4">
                <NavLink
                  className="newely-highlight"
                  to="/signin"
                  onClick={onClick3}
                >
                  <span className=" d-flex gap-1">
                    <i class="bi bi-x-diamond mx-3"></i>
                    <h5>Sign in</h5>
                  </span>
                </NavLink>
              </li>

              <li className="mt-2">
                <NavLink
                  className="newely-highlight"
                  to="/signup"
                  onClick={onClick4}
                >
                  <span className=" d-flex gap-1">
                    <i class="bi bi-x-diamond-fill mx-3"></i>
                    <h5>Sign up</h5>
                  </span>
                </NavLink>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
