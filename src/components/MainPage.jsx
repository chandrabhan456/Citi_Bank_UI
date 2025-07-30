import React, { useState } from "react";
import TableView from "./Overview/TableView";
import Recommandation from './Overview/Profile'
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
    value: "94.5%",
    label: "Recommendation Accuracy",
    change: "+3.2%",
    icon: "🎯",
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

function MainPage() {
  const [showSection, setShowSection] = useState("button1");

  
  return (
    <div className="min-h-screen bg-[#1D2041] px-4 py-8">
      <div className="flex flex-wrap gap-6 justify-center">
        {dashboardData.map((card, idx) => (
          <div
            key={idx}
            className="rounded-[10px] shadow-lg flex items-center px-6 py-5"
            style={{
              background: "linear-gradient(106deg, #352F6E 0%, #594EBC 100%)",
              width: 360,
              height: 132,
              minWidth: 260,
              color: "#fff",
            }}
          >
            {/* Icon on the left, centered vertically */}
            <div className="flex items-center justify-center mr-6 h-16 w-16 rounded-full bg-white/10 text-3xl">
              {card.icon}
            </div>
            {/* Content on the right */}
            <div className="flex flex-col justify-center flex-1">
              <div className="text-[1.35rem] font-extrabold">{card.value}</div>
              <div className="text-[#e0e5fa] text-[1rem] font-medium mb-2">
                {card.label}
              </div>
              <div
                className="flex items-center mt-1 text-[1rem]"
                style={{ color: card.changeColor }}
              >
                <span className="mr-1 text-[1.12rem]">↗</span>
                {card.change}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-6 mt-16">
       
        {/* Conditionally render sections below buttons */}
        <div className="w-full flex ">
         
            <div className="bg-[#1D2041] ml-[10%] rounded-lg shadow-lg text-black">
              {/* Customer Overview Content */}
              <TableView />
            </div>
    
          
        </div>
      </div>
    </div>
  );
}

export default MainPage;
