import { colors } from "@mui/material";
import React from "react";

const MessageAlert = ({ alerts, id, key, onClose, isIcon }) => {
  const handleClose = () => {
    onClose(id);
  };

  return (
    <>
      <div className=" mx-4" key={key}>
        <div
          className="alert text-white d-flex justify-content-between align-items-center"
          role="alert"
          style={{ backgroundColor: alerts.hexCode }}
        >
          <p>
            {isIcon ? (
              <i
                className="bi bi-info-circle mx-2
            "
              ></i>
            ) : null}
            {alerts.description}
          </p>
          <i className="bi bi-x large-close-btn" onClick={handleClose}></i>
        </div>
      </div>
    </>
  );
};

export default MessageAlert;
