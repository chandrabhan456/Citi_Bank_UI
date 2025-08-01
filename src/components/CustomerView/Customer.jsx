import React from "react";
import Card from "./Card";

const cardsData = [
  {
    fee: "$95",
    type: "Travel Elite",
    cardno: "XXXX XXXX XXXX 1234",
    valid: "04/42 VALID THRU",
    cvv: "123",
    name: "CUST001",
    benefits: [
      "3X points on travel & dining",
      "No foreign transaction fees",
      "Priority Pass lounge access",
      "60K bonus points",
    ],
    gradientFrom: "#7B2FF7", // Purple gradient start
    gradientTo: "#F107A3", // Purple gradient end
  },
  {
    fee: "$495",
    type: "Business Pro",
    cardno: "XXXX XXXX XXXX 5678",
    valid: "12/28 VALID THRU",
    cvv: "456",
    name: "CUST001",
    benefits: [
      "4th night free on hotels",
      "Priority Pass Select",
      "Comprehensive travel insurance",
      "Concierge service",
    ],
    gradientFrom: "#00C9FF", // Blue gradient start
    gradientTo: "#92FE9D", // Blue gradient end
  },
  {
    fee: "$0",
    type: "Cashback Master",
    cardno: "XXXX XXXX XXXX 6548",
    valid: "12/32 VALID THRU",
    cvv: "641",
    name: "CUST001",
    benefits: [
      "2% cashback on everything",
      "No annual fee",
      "Price rewind protection",
      "Extended warranty",
    ],
    gradientFrom: "#FFB6C1", // Pink gradient start
    gradientTo: "#FF69B4", // Pink gradient end
  },
];
const customer = {
  name: "Sarah Johnson",
  persona: "Frequent Traveler",
  creditScore: 785,
  creditScoreStatus: "Excellent",
  annualIncome: 85000,
  age: 32,
  spendingInsights: [
    { label: "Travel & Dining", value: 2400 },
    { label: "Groceries", value: 650 },
    { label: "Gas & Transit", value: 320 },
  ],
};

function Customer() {
  return (
    <div className="min-h-screen bg-[#1D2041] w-full flex flex-col items-center py-8 px-2">
      {/* Banner */}
      <div className="w-full  bg-gradient-to-r from-blue-500 to-blue-400 rounded-xl shadow-lg p-7 flex items-center mb-8">
        <div className="w-16 h-16 bg-white/20 rounded-full mr-6 flex items-center justify-center">
          {/* Placeholder for avatar */}
          <span className="text-3xl text-white font-bold">👤</span>
        </div>
        <div>
          <div className="text-white text-2xl font-semibold">
            Welcome back, CUST001
          </div>
          <div className="text-blue-100 text-lg">
            Your personalized credit card recommendations are ready
          </div>
        </div>
      </div>

      <div className="w-full  flex flex-col md:flex-row gap-6">
        {/* Profile Card */}
        <div className="w-full md:w-1/4 bg-[#1D2041] rounded-xl border border-gray-700 shadow-lg p-6 flex flex-col mb-4 md:mb-0 h-[620px]">
          <div className="text-lg font-semibold mb-2 flex items-center gap-2 text-white">
            <svg
              width="22"
              height="22"
              fill="none"
              className="inline"
              viewBox="0 0 24 24"
            >
              <path
                fill="#9CA3AF"
                d="M12 12c2.7 0 8 1.34 8 4v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2c0-2.66 5.3-4 8-4Zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
              />
            </svg>
            Your Profile
          </div>
          <div className="mb-3 flex items-center gap-2">
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-semibold">
              {customer.persona}
            </span>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <span className="text-gray-300">Credit Score:</span>
            <span className="font-bold text-green-400">
              {customer.creditScore}
            </span>
            <span className="text-xs bg-green-200 text-green-700 px-2 py-0.5 rounded-full ml-2">
              {customer.creditScoreStatus}
            </span>
          </div>
          <div className="mb-2">
            <span className="text-gray-300">Annual Income:</span>
            <span className="font-bold ml-2 text-white">
              ${customer.annualIncome.toLocaleString()}
            </span>
          </div>
          <div className="mb-4">
            <span className="text-gray-300">Age:</span>
            <span className="font-bold ml-2 text-white">{customer.age}</span>
          </div>
          <div>
            <h4 className="font-semibold mb-1 text-white">Spending Insights</h4>
            <ul>
              {customer.spendingInsights.map((item) => (
                <li
                  key={item.label}
                  className="flex justify-between mb-1 text-[15px]"
                >
                  <span className="text-gray-300">{item.label}</span>
                  <span className="font-medium text-gray-100">
                    ${item.value.toLocaleString()}/month
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Recommendations Card */}
        <div className="w-full md:w-3/4 flex flex-col">
          <div className="bg-[#1D2041] border border-gray-700 shadow-lg rounded-xl p-6 mb-4 h-[620px] flex flex-col">
            <div className="text-xl font-semibold mb-1 text-white">
              Top Recommendations for You
            </div>
            <div className="text-sm text-gray-400 mb-4">
              Based on your spending habits and financial profile
            </div>
            {/* Card 
    <div className="border border-gray-700 rounded-lg p-4 flex flex-col md:flex-row gap-4 items-start mb-2 bg-[#232659]">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-bold text-base text-white">Chase Sapphire Preferred</span>
          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded font-semibold">Best Match</span>
        </div>
        <div className="text-xs text-gray-400 mb-2">Travel Rewards</div>
        <div className="grid grid-cols-3 gap-4 mb-3">
          <div>
            <div className="font-semibold text-gray-100">2X points on travel & dining</div>
            <div className="text-xs text-gray-500">Rewards Rate</div>
          </div>
          <div>
            <div className="font-semibold text-gray-100">60,000 bonus points</div>
            <div className="text-xs text-gray-500">Welcome Bonus</div>
          </div>
          <div>
            <div className="font-semibold text-gray-100">$95</div>
            <div className="text-xs text-gray-500">Annual Fee</div>
          </div>
        </div>
        <div className="bg-blue-900/30 border-l-4 border-blue-400 p-3 rounded mb-3">
          <div className="text-blue-300 font-semibold mb-1">Why Recommended?</div>
          <div className="text-sm text-gray-200">
            Perfect match for your frequent travel and dining habits. You'll earn maximum rewards on your top spending categories.
          </div>
        </div>
        <div className="flex gap-2 flex-wrap mb-2">
          <span className="bg-gray-700 text-gray-200 px-2 py-0.5 rounded text-xs">No foreign transaction fees</span>
          <span className="bg-gray-700 text-gray-200 px-2 py-0.5 rounded text-xs">Travel insurance</span>
          <span className="bg-gray-700 text-gray-200 px-2 py-0.5 rounded text-xs">24/7 concierge</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between h-full min-w-[90px]">
        <div>
          <span className="text-2xl font-bold text-green-400">95%</span>
          <div className="text-xs text-gray-400">Match Score</div>
        </div>
      </div>
    </div>
    <div className="flex gap-2 mt-4">
      <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded font-medium flex items-center gap-2">
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
          <path fill="#fff" d="M5 13l4 4L19 7" />
        </svg>
        I'm Interested
      </button>
      <button className="bg-gray-700 hover:bg-gray-600 transition text-gray-200 px-5 py-2 rounded font-medium">
        Not for Me
      </button>
    </div>*/}
            <div className="overflow-auto ">
              <div className="flex justify-center items-center">
                {cardsData.map((cardData, index) => (
                  <Card key={index} {...cardData} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
