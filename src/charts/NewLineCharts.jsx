import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  LinearScale,
  CategoryScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);
const NewLineCharts = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu"],
    datasets: [
      {
        label: "sales of the A item",
        data: [3, 5, 4, 9],
        borderColor: "black",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        pointBorderColor: "black",
        fill: true,
        tension: 0.4,
      },
      {
        label: "sales of the B item",
        data: [4, 8, 5, 7],
        borderColor: "red",
        backgroundColor: "red",
        pointBorderColor: "blue",
        fill: true,
        tension: 0.4,
      },
    ],
  };
  const options = {
    Plugin: {
      Legend: true,
    },
    scales: {
      y: {
        // min: 3,
        // max: 10,
      },
    },
  };
  return (
    <>
      <div>
        <Line data={data} options={options} />
      </div>
    </>
  );
};

export default NewLineCharts;
