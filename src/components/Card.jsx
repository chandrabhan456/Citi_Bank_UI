import React from "react";
import "./Card.css";

const Card = ({
  fee,
  type,
  cardno,
  valid,
  cvv,
  name,
  benefits,
  gradientFrom,
  gradientTo,
}) => {
  return (
    <div className="card-container">
      <div className="card">
        {/* Front Side */}
        <div
          className="card-front"
          style={{
            background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
          }}
        >
          <div className="flex justify-between p-2 text-white">
            <div className="text-lg font-bold px-2 py-1">Visa</div>
            <div className="text-lg font-bold px-2 py-1">CITI</div>
          </div>
          <div className="px-4 text-white text-2xl font-bold">{type}</div>
          <div className="flex items-center px-4 text-white mt-2">
            <div className="chip w-10 h-8 bg-gray-300 rounded-sm mr-4 relative">
              <div className="absolute inset-0 m-1 flex flex-col justify-center">
                <div className="h-0.5 bg-gray-500 mx-1"></div>
                <div className="flex justify-between items-center">
                  <div className="h-5 w-0.5 bg-gray-500"></div>
                  <div className="h-4 w-4 bg-gray-400 border border-gray-500 rounded-sm"></div>
                  <div className="h-5 w-0.5 bg-gray-500"></div>
                </div>
                <div className="h-0.5 bg-gray-500 mx-1"></div>
              </div>
            </div>
            <div className="text-md">{cardno}</div>
          </div>
          <div className="px-4 text-white mt-2">
            <div className="flex justify-between text-lg">
              <span className="font-semibold">{name}</span>
              <span>{valid}</span>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="card-back">
          <div className="black-bar"></div>
          <div className="signature">
            <span className="signature-text">AUTHORIZED SIGNATURE - NOT VALID UNLESS SIGNED</span>
            <div className="signature-box">
              <span className="signature-text py-4">{cvv}</span>
            </div>
          </div>
          <div className="card-details">
            <div className="card-number">{cardno}</div>
            <div className="card-valid">{valid}</div>
            <div className="card-holder">{name}</div>
          </div>
        </div>
      </div>

      {/* Additional Content */}
      <div className="bg-[#f0faff] rounded-lg shadow-lg p-4 mt-4">
        <h3 className="font-bold mb-2 text-center text-blue-700">
          ✨ Key Benefits
        </h3>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li
              key={index}
              className="flex items-center bg-white rounded-md p-2 shadow-sm"
            >
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-700">{benefit}</span>
            </li>
          ))}
        </ul>
        <div className="font-bold mt-4 text-gray-700">Annual Fee: {fee}</div>
      </div>
      <div className="mt-4">
        <button className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Apply for {type}
        </button>
      </div>
    </div>
  );
};

export default Card;
