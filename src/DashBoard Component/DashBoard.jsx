import React from "react";
import FirstBoard from "../SubDashboard component/FirstBoard";
import GraphCharts from "../SubDashboard component/GraphCharts";
import Project from "../SubDashboard component/Project";
import DashBoardFooter from "../SubDashboard component/DashBoardFooter";

const DashBoard = () => {

  return (
    <>
      <div className="mt-4">
        <FirstBoard />
        <GraphCharts />
        <Project />
        
      </div>
    </>
  );
};

export default DashBoard;
