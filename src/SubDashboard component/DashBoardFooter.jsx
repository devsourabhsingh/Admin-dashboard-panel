import React from "react";
import { NavLink } from "react-router-dom";

const DashBoardFooter = () => {
  return (
    <>
      <div className="d-flex justify-content-between mt-3">
        <div>
          <p style={{ fontSize: "1.2rem" }}>
            © 2023, made with by Sourabh
            <span>
              <i class="bi bi-heart-fill" style={{ color: "red" }}></i>
            </span>
            for a better web.
          </p>
        </div>
        <div>
          <ul className="d-flex gap-2">
            <NavLink to="">
              <li>Dashboard</li>
            </NavLink>
            <NavLink to="">
              <li>About Us</li>
            </NavLink>
            <NavLink to="">
              <li>Blog</li>
            </NavLink>
            <NavLink to="">
              <li>License</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashBoardFooter;
