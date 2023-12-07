import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import RightDrawer from "../SubDashboard component/RightDrawer";
import UpperNotifications from "../AlertNotifications/UpperNotifications";

const SearchBar = ({ onClick1, onClick2 }) => {
  const location = useLocation();
  const elementRef = useRef(null);
  const pathname = location.pathname;
  const routName = pathname.substring(1);

  const [newGear, setGear] = useState();
  const [closeDrop, setCloseDrop] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (elementRef.current && !elementRef?.current?.contains(event.target)) {
        setCloseDrop(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNotiClick = () => {
    setCloseDrop(!closeDrop);
  };

  const handleGearClick = () => {
    setGear(true);
  };

  return (
    <>
      <div className=" search-nav">
        <div style={{ width: "100%", textTransform: "capitalize" }}>
          <div className="d-flex align-items-baseline gap-2">
            <p>Dashboard</p>
            <h6>{location.pathname === "/" ? "/Home" : pathname}</h6>
          </div>
          <h5>{location.pathname === "/" ? "Home" : routName}</h5>
        </div>
        <div className="d-flex align-items-baseline" style={{ width: "100%" }}>
          <div>
            <input
              className="form-control"
              type="text"
              placeholder="Search"
              style={{ width: "15rem", height: "2.8rem" }}
            />
          </div>
          <div className="d-flex mx-3">
            <button
              style={{
                backgroundColor: "transparent",
                outline: "none",
                border: "none",
              }}
            >
              <span className="d-flex gap-3">
                <i
                  className="bi bi-person-circle"
                  style={{ fontSize: "1.2rem" }}
                ></i>
                SignIn
              </span>
            </button>
          </div>
          <div className="d-flex gap-3 mx-4">
            <i
              className="bi bi-bell-fill"
              style={{ fontSize: "1.2rem", cursor: "pointer" }}
              onClick={handleNotiClick}
            ></i>

            <i
              className="bi bi-gear-fill"
              style={{ fontSize: "1.2rem", cursor: "pointer" }}
              onClick={handleGearClick}
            ></i>
            <UpperNotifications closeDrop={closeDrop} elementRef={elementRef} />
          </div>
          {newGear ? (
            <RightDrawer
              setGear={setGear}
              newGear={newGear}
              onClick1={onClick1}
              onClick2={onClick2}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
