import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(LinearScale, CategoryScale, BarElement, Tooltip, Legend);
const NewBarCharts = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed"],
    datasets: [
      {
        label: "369",
        data: [3, 6, 9],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "black",
        borderWidth: "1px",
      },
      {
        label: "333",
        data: [3, 3, 3],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderColor: "black",
        borderWidth: "1px",
      },
    ],
  };
  const options = {};
  return (
    <>
      <div style={{ padding: "5px", width: "100%" }}>
        <Bar data={data} options={options}></Bar>
      </div>
    </>
  );
};

export default NewBarCharts;
