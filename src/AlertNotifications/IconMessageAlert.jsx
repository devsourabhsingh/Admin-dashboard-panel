import React from "react";

const IconMessageAlert = ({ alerts, id, key, onClose }) => {
    const handleClick=()=>{
        onClose(id);
    }

  return (
    <>
      <div className=" mx-4" key={key}>
        <div
          className="alert text-white d-flex justify-content-between align-items-center"
          role="alert"
          style={{ backgroundColor: alerts.hexCode }}
        >
          <p>{alerts.description}</p>
          <i className="bi bi-x large-close-btn" onClick={handleClick}></i>
        </div>
      </div>
    </>
  );
};

export default IconMessageAlert;
