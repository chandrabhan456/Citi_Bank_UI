import React from 'react';
import { useNavigate } from 'react-router-dom';
import Profile from "./Overview/Profile"; 

import Recommandation from "./Overview/Recommandation";
import { useStateContext } from "../contexts/ContextProvider";
const CustomerView = () => {
  const { selectedCustomerId,showSection,setShowSection } = useStateContext();
  const navigate = useNavigate();
  const handleButtonClick = (buttonName) => {
    setShowSection(buttonName);
  };
  return (
     <div className=' min-h-screen bg-[#1D2041]'>
         <div className=''>
      <button
        className="text-gray-200 mt-6 ml-10 hover:text-gray-300 bg-transparent py-2 px-4 focus:outline-none"
        onClick={() => navigate('/mainPage')} // Navigate back to the previous page
      >
        Back
      </button>

      {/* Your other component code here */}
    </div>
    <div className="flex flex-col items-center gap-6 mt-0">
      <div className="flex gap-6 mt-16">
        <button
          className="px-6 py-3 bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-500 text-white text-xl font-bold rounded-full shadow-2xl border-b-4 border-indigo-900 focus:outline-none"
          onClick={() => handleButtonClick("button1")}
        >
      Costomer Profile
        </button>
        <button
          className="px-6 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white text-xl font-bold rounded-full shadow-2xl border-b-4 border-red-900 focus:outline-none"
          onClick={() => handleButtonClick("button2")}
        >
          Analytics
        </button>
        <button
          className="px-6 py-3 bg-gradient-to-r from-green-400 via-teal-400 to-cyan-500 text-white text-xl font-bold rounded-full shadow-2xl border-b-4 border-teal-900 focus:outline-none"
          onClick={() => handleButtonClick("button3")}
        >
           Recommendation Cards
        </button>
      </div>

      {/* Conditionally render sections below buttons */}
      <div className="w-full flex">
        {showSection === "button1" && (
         <div className="flex justify-center items-center w-full p-6 bg-[#1D2041] rounded-lg shadow-lg">
             {/* Customer Overview Content */}
              <Profile />
          </div>
        )}
        {showSection === "button2" && (
          <div className="p-6 bg-white rounded-lg shadow-lg text-black">
            {/* Analytics Content */}
            <h2 className="font-bold text-2xl mb-2">Analytics Section</h2>
            <p>This is the Analytics content.</p>
          </div>
        )}
        {showSection === "button3" && (
          <div className="flex justify-center items-center w-full p-6 bg-[#1D2041] rounded-lg shadow-lg">
            {/* Customer Recommendation Content */}
          <Recommandation />
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default CustomerView;
