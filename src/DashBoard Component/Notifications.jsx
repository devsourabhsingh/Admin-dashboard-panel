import React, { useState } from "react";
import MessageAlert from "../AlertNotifications/MessageAlert";

const Notifications = () => {
  const [newAlert, setNewAlert] = useState([
    {
      id: 1,
      description: "A simple primary alert—check it out!",
      color: "dark",
      hexCode: "#000000",
    },
    {
      id: 2,
      description: "A simple primary alert—check it out!",
      color: "green",
      hexCode: "#63E25A",
    },

    {
      id: 3,
      description: "A simple primary alert—check it out!",
      color: "orange",
      hexCode: "#FFA500",
    },

    {
      id: 4,
      description: "A simple primary alert—check it out!",
      color: "red",
      hexCode: "#FF0000",
    },
  ]);
  const closeAlert = (id) => {
    setNewAlert((closeAlert) => closeAlert.filter((alert) => alert.id !== id));
  };

  return (
    <>
      <div className=" new-notifiy mx-auto ">
        <h4 className=" pt-3 pb-4 mx-3">Alerts</h4>
        {newAlert.map((alerts, index) => (
          <MessageAlert
            alerts={alerts}
            id={alerts.id}
            key={index}
            onClose={closeAlert}
            isIcon={false}
          />
        ))}
      </div>
      <div className=" new-notifiy mx-auto ">
        <h4 className=" pt-3 pb-4 mx-3">Alerts</h4>
        {newAlert.map((alerts, index) => (
          <MessageAlert
            alerts={alerts}
            id={alerts.id}
            key={index}
            onClose={closeAlert}
            isIcon={true}
          />
        ))}
      </div>
    </>
  );
};

export default Notifications;
