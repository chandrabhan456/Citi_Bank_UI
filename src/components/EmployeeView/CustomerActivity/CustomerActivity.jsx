import React from "react";
import { useStateContext } from "../../../contexts/ContextProvider";
const CustomerActivity = () => {
     const {  recommendation } = useStateContext();
  const activities = [
    {
      initials: "SJ",
      name: "Sarah Johnson",
      type: "Frequent Traveler",
      creditScore: 785,
      card: "Chase Sapphire Preferred",
      match: "95% match",
      status: "Sent",
      statusColor: "text-blue-500",
      time: "2 min ago",
    },
    {
      initials: "MC",
      name: "Michael Chen",
      type: "College Student",
      creditScore: 680,
      card: "Discover Student Card",
      match: "89% match",
      status: "Interested",
      statusColor: "text-green-500",
      time: "15 min ago",
    },
    {
      initials: "ER",
      name: "Emily Rodriguez",
      type: "Business Owner",
      creditScore: 820,
      card: "Chase Ink Business",
      match: "92% match",
      status: "Rejected",
      statusColor: "text-red-500",
      time: "1 hour ago",
    },
  ];
// Helper function to generate random status and time
const getRandomStatus = () => {
  const statuses = [
    { status: "Sent", color: "text-blue-500", time: "2 min ago" },
    { status: "Interested", color: "text-green-500", time: "15 min ago" },
    { status: "Rejected", color: "text-red-500", time: "1 hour ago" },
  ];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

// Transform API data into activities format
const transformToActivities = (dataArray) => {
  return dataArray.map((data) => {
    const initialStatus = getRandomStatus();
    return {
      initials: data.id.slice(0, 2),
      name: `${data.id} `,
      type: data.persona,
      creditScore: data.credit_score,
      card: data.recommendations.top_1_card,
      match: "95% match", // This can be adjusted based on logic if needed
      status: initialStatus.status,
      statusColor: initialStatus.color,
      time: initialStatus.time,
    };
  });
};

const activities1 = transformToActivities(recommendation);

console.log(activities1);

  return (
    <div className="bg-[#1D2041] p-6 rounded-lg shadow-md max-h-[500px] overflow-y-auto">
      {activities1.map((activity, index) => (
        <div key={index} className="bg-[#2a2d5c] p-4 rounded-lg mb-4 flex items-center justify-between shadow-md">
          {/* Left Section */}
          <div className="flex items-center">
            <div className="bg-gray-200 rounded-full h-12 w-12 flex items-center justify-center text-gray-700 font-bold">
              {activity.initials}
            </div>
            <div className="ml-4">
              <div className="font-bold text-gray-100">{activity.name}</div>
              <div className="text-gray-100 text-sm">
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">{activity.type}</span>
                <span className="ml-2">Credit Score: {activity.creditScore}</span>
              </div>
            </div>
          </div>

          {/* Center Section */}
          <div className="text-center">
            <div className="font-bold text-gray-100">{activity.card}</div>
            <div className="text-gray-100 text-sm">{activity.match}</div>
          </div>

          {/* Right Section */}
          <div className="flex items-center">
            <div className={`font-bold ${activity.statusColor} text-sm`}>{activity.status}</div>
            <div className="text-gray-500 text-sm ml-2">{activity.time}</div>
            <div className="ml-4 flex space-x-2">
              <button className="text-gray-100 hover:text-gray-800">
                <i className="fas fa-eye"></i>
              </button>
              <button className="text-gray-100 hover:text-gray-800">
                <i className="fas fa-comment"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomerActivity;
