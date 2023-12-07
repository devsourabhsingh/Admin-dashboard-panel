import React from "react";
import newWallet from "../Image/Wallet.png";
const UpperNotifications = ({ elementRef, closeDrop }) => {
  return (
    <>
      {closeDrop && (
        <div ref={elementRef} className="new-bell">
          <div className="upper-notification">
            <div className=" d-flex mt-3 mx-4 gap-3">
              <div>
                <img
                  className="new-side-img"
                  src="https://demos.creative-tim.com/material-dashboard/assets/img/team-2.jpg"
                  alt=""
                />
              </div>
              <div>
                <span>
                  <strong>New message</strong>from laur
                </span>
                <p>
                  <i class="bi bi-stopwatch-fill"></i> 13 minutes ago
                </p>
              </div>
            </div>
            <div className=" d-flex mt-3 mx-4 gap-3">
              <div>
                <img
                  className="new-side-img"
                  src="https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/logo-spotify.svg"
                  alt=""
                />
              </div>
              <div>
                <span>
                  <strong>New Album</strong>by Travis Scott
                </span>
                <p>
                  <i class="bi bi-stopwatch-fill"></i> 1 day ago
                </p>
              </div>
            </div>
            <div className=" d-flex mt-3 mx-4 gap-2">
              <div>
                <img className="new-side-img" src={newWallet} alt="" />
              </div>
              <div>
                <span>Payment Successfully Completed</span>
                <p>
                  <i class="bi bi-stopwatch-fill"></i> 2 day ago
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UpperNotifications;
