// Pie.jsx
import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChart = ({ data, options }) => (
  <div className="bg-[#1D2041]  rounded-xl p-4">
    <Pie data={data} options={options} />
  </div>
);

export default PieChart;
