// Dashboard.jsx
import React from "react";
import BarChart from "./Graphs/BarChart";
import PieChart from "./Graphs/PieChart";
import { color } from "chart.js/helpers";

// Dummy data from above
const barData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Amount ($)",
      data: [3692, 4395, 3864, 4473, 3301, 3106, 3114],
      backgroundColor: "#12A4DD"
    }
  ]
};


const pieData = {
  labels: ["Travel", "Dining", "Other"],
  datasets: [
    {
      data: [65, 20, 15],
      backgroundColor: ["#6D84EF", "#F3A4F5", "#39B8FE"]
    }
  ]
};
const barOptions = {
  plugins: {
    title: {
      display: true,
      text: "Weekly Spend",
      font: { size: 24, weight: "bold" },
      color: "#fff", // <-- Make title white
    },
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (context) => `$${context.parsed.y}`
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Amount ($)",
        font: { size: 18 },
        color: "#fff", // <-- Y axis title white
      },
      ticks: {
        color: "#fff", // <-- Y axis numbers white
      }
    },
    x: {
      ticks: {
        color: "#fff", // <-- X axis labels white
      }
    }
  }
};

const pieOptions = {
  plugins: {
    title: {
      display: true,
      text: "By Category",
      font: { size: 24, weight: "bold" },
      color: "#fff", // <-- Title white
    },
    legend: {
      display: false
    },
    tooltip: {
      callbacks: {
        label: (context) => `${context.label}: ${context.parsed}%`
      }
    }
  }
};

const Analytics = () => (
  <div className="flex gap-6 bg-[#1D2041] border border-gray-700 shadow-lg rounded-xl  p-4">
    <div className="w-1/2">
      <BarChart data={barData} options={barOptions} />
    </div>
    <div className="w-1/2">
      <PieChart data={pieData} options={pieOptions} />
    </div>
  </div>
);

export default Analytics;
