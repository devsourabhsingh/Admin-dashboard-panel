import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
const NewPiecharts = () => {
  const data = {
    labels: ["one", "two", "three"],
    datasets: [
      {
        data: [3, 6, 9],
        backgroundColor: ["red", "orange", "blue"],
      },
    ],
  };
  const options = {};
  return (
    <>
      <div style={{ padding: "20px", width: "100%" }}>
        <Pie data={data} options={options}></Pie>
      </div>
    </>
  );
};

export default NewPiecharts;
