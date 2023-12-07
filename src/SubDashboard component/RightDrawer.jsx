import React from "react";

const RightDrawer = ({ setGear, newGear, onClick1, onClick2 }) => {
  const handleCloseClick = () => {
    setGear(!newGear);
  };
  
  return (
    <>
      <div className="right-drawer transform">
        <div className="d-flex justify-content-between  mx-4 mt-4 close-icon">
          <h5>
            Dashboard Configurator
            <span>
              <p style={{ color: "grey", fontWeight: "0" }}>
                See our dashboard options.
              </p>
            </span>
          </h5>
          <i
            class="bi bi-x-lg"
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
            onClick={handleCloseClick}
          ></i>
        </div>
        <div className=" container mx-4 mt-5">
          <h5>Sidenav Types</h5>
          <p style={{ fontSize: "1.2rem" }}>
            Choose between 3 different types.
          </p>
          <div className=" d-flex gap-2 ">
            <button
              type="button"
              class="btn btn-outline-dark btn-lg"
              onClick={() => onClick1("dark")}
            >
              Dark
            </button>
            <button
              type="button"
              class="btn btn-outline-dark  btn-lg"
              onClick={() => onClick1("transparent")}
            >
              Transparent
            </button>
            <button
              type="button"
              class="btn btn-outline-dark  btn-lg"
              onClick={() => onClick1("white")}
            >
              white
            </button>
          </div>
        </div>
        <div className=" container side-nav-Color mt-5 mx-4">
          <h5>Sidenav Colors</h5>
          <div className="d-flex gap-2">
            <button
              className="new-default cirle-white"
              onClick={() => onClick2("cirle-white")}
            ></button>
            <button
              className="new-default cirle-black"
              onClick={() => onClick2("cirle-black")}
            ></button>
            <button
              className="new-default cirle-green"
              onClick={() => onClick2("cirle-green")}
            ></button>
            <button
              className="new-default cirle-orange"
              onClick={() => onClick2("cirle-orange")}
            ></button>
            <button
              className="new-default cirle-yellow"
              onClick={() => onClick2("cirle-yellow")}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightDrawer;
