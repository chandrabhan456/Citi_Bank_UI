import React, { useState, useEffect } from "react";
import TableView from "./Overview/TableView";

import PersonaCards from "./Overview/PersonaCards"; // import the new component
import GraphPage from "./AnlyticsMainPage/GraphPage";
import Activity from "./CustomerActivity/CustomerActivity";
import { useStateContext } from "../../contexts/ContextProvider";

const DUMMY_DASHBOARD_DATA = [
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

const personaData1 = [
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
  const {
    selectedCustomerId,
    showSection,
    setShowSection,
    recommendation,
    setRecommendations,
  } = useStateContext();

  const [showSection1, setShowSection1] = useState("button1");
  const [portfolio, setPortfolio] = useState(null);
  const [personaData, setPersonaData] = useState(null);
  const [activeButton, setButton] = useState(1);
  const [error, setError] = useState(null);
  const [dashboardData, setDashboardData] = useState(DUMMY_DASHBOARD_DATA);

  useEffect(() => {
   
    const fetchPortfolio = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/portfolio", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error(`Failed to fetch portfolio: ${response.statusText}`);
        }
        const data = await response.json();
        setPortfolio(data);

        // Map API label to dashboard label
        const labelMapping = {
          "Total Customers": "Total Customers",
          "Total Portfolio Value": "Total Portfolio Value",
          "Avg Cards recommended per Customer": "Avg Cards per Customer",
        };

        // Build a map from API response
        const apiDataMap = {};
        data.forEach((item) => {
          const mappedLabel = labelMapping[item.label];
          if (mappedLabel) apiDataMap[mappedLabel] = item.value;
        });

        // Update dashboard data using API values
        setDashboardData((prevData) =>
          prevData.map((item) => ({
            ...item,
            value: apiDataMap[item.label] || item.value,
          }))
        );
      } catch (err) {
        console.error("Error fetching portfolio:", err);
        setError("Portfolio: " + err.message);
        setPortfolio(null);
      }
    };

    const fetchRecommendations = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/recommendations", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error(
            `Failed to fetch recommendations: ${response.statusText}`
          );
        }
        const data = await response.json();
        setRecommendations(data);
      } catch (err) {
        console.error("Error fetching recommendations:", err);
        setError("Recommendations: " + err.message);
        setRecommendations(null);
      }
    };
    const personaCount = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/persona-count", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error(
            `Failed to fetch recommendations: ${response.statusText}`
          );
        }
        const data = await response.json();
        setPersonaData(data);
      } catch (err) {
        console.error("Error fetching recommendations:", err);
        setError("Recommendations: " + err.message);
        setPersonaData(null);
      }
    };
    fetchPortfolio();
    fetchRecommendations();
    personaCount();
  }, []);

  console.log("api responce", portfolio);
  return (
    <div className="min-h-screen bg-[#1d2041] px-4 py-8">
      {/* KPI Cards */}
      <div className="flex flex-wrap gap-6 justify-center">
        {dashboardData.map((card, idx) => (
          <div
            key={idx}
            className="rounded-[10px] shadow-lg flex items-center justify-between px-6 py-5"
            style={{
              background: "linear-gradient(106deg, #352F6E 0%, #594EBC 100%)",
              width: 450,
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
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          backgroundColor: "#1d2041",
          color: "white",
          padding: "20px",
          minHeight: "100vh",
        }}
      >
        <div
          className="w-[75%] mx-auto"
          style={{ display: "flex", marginBottom: "0px", marginTop: 16 }}
        >
          <button
            onClick={() => setButton(1)}
            style={{
              flex: 1,
              border: "1px solid grey",
              backgroundColor: activeButton === 1 ? "#303456" : "#1d2041",
              color: "white",
              padding: "10px",
              cursor: "pointer",
              outline: "none",
              transition: "background-color 0.3s",
            }}
          >
            Customer Persona Distribution
          </button>
          <button
            onClick={() => setButton(2)}
            style={{
              flex: 1,
              border: "1px solid grey",
              backgroundColor: activeButton === 2 ? "#303456" : "#1d2041",
              color: "white",
              padding: "10px",
              cursor: "pointer",
              outline: "none",
              transition: "background-color 0.3s",
            }}
          >
            Analytics
          </button>
          <button
            onClick={() => setButton(3)}
            style={{
              flex: 1,
              border: "1px solid grey",
              backgroundColor: activeButton === 3 ? "#303456" : "#1d2041",
              color: "white",
              padding: "10px",
              cursor: "pointer",
              outline: "none",
              transition: "background-color 0.3s",
            }}
          >
            Customer Activity
          </button>
        </div>
        <div className="w-[76%] mx-auto mt-2 bg-[#1D2041] border border-gray-700 shadow-lg rounded-xl">
          {activeButton === 1 && (
            <>
         {personaData && personaData.length > 0 && <PersonaCards data={personaData} />}

              <TableView data={recommendation} />
            </>
          )}
          {activeButton === 2 && <GraphPage />}
          {activeButton === 3 && <Activity />}
        </div>
      </div>
      {/* Persona Distribution */}
    </div>
  );
}

export default MainPage;
