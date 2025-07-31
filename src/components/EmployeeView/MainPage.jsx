import React, { useState } from "react";
import TableView from "./Overview/TableView";

import PersonaCards from "./Overview/PersonaCards"; // import the new component
import GraphPage from "./AnlyticsMainPage/GraphPage";
const dashboardData = [
  {
    value: "20",
    label: "Total Customers",
    change: "+25%",
    icon: "👥",
    changeColor: "#22c55e",
  },
  {
    value: "$485K",
    label: "Total Portfolio Value",
    change: "+18%",
    icon: "💰",
    changeColor: "#22c55e",
  },

  {
    value: "2.8",
    label: "Avg Cards per Customer",
    change: "+15%",
    icon: "💳",
    changeColor: "#22c55e",
  },
];

const personaData = [
  {
    label: "Frequent Traveler",
    value: "3,240",
    color: "#2196f3",
  },
  {
    label: "Cashback Maximizer",
    value: "2,891",
    color: "#22c55e",
  },
  {
    label: "College Student",
    value: "2,156",
    color: "#8b5cf6",
  },
  {
    label: "Business Owner",
    value: "1,876",
    color: "#f97316",
  },
  {
    label: "Premium Spender",
    value: "1,432",
    color: "#ef4444",
  },
];

function MainPage() {
  const [showSection, setShowSection] = useState("button1");

  return (
    <div className="min-h-screen bg-[#1D2041] px-4 py-8">
      {/* KPI Cards */}
      <div className="flex flex-wrap gap-6 justify-center">
        {dashboardData.map((card, idx) => (
          <div
            key={idx}
            className="rounded-[10px] shadow-lg flex items-center justify-between px-6 py-5"
            style={{
              background: "linear-gradient(106deg, #352F6E 0%, #594EBC 100%)",
              width: 360,
              height: 132,
              minWidth: 260,
              color: "#fff",
            }}
          >
            {/* Logo/Icon on the left */}
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white/10 text-3xl">
              {card.icon}
            </div>
            {/* Info on the right */}
            <div className="flex flex-col justify-center flex-1 items-end text-right">
              <div className="text-[1.35rem] font-extrabold">{card.value}</div>
              <div className="text-[#e0e5fa] text-[1rem] font-medium mb-2">
                {card.label}
              </div>
              <div
                className="flex items-center mt-1 text-[1rem] justify-end"
                style={{ color: card.changeColor }}
              >
                <span className="mr-1 text-[1.12rem]">↗</span>
                {card.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Persona Distribution */}
      <PersonaCards data={personaData} />

      <div className="flex flex-col items-center gap-6">
        <div className="flex justify-center w-full">
          <div className="bg-[#1D2041] rounded-lg shadow-lg text-black w-[1160px]">
            <TableView />
            <GraphPage />
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default MainPage;
