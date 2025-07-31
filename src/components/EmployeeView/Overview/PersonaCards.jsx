// PersonaCards.jsx
import React from "react";

const PersonaCards = ({ data }) => (
  <div className="w-[62%] mx-auto bg-[#1D2041] rounded-xl px-6 py-6 shadow flex flex-col">
    <div className="font-semibold text-white text-lg mb-5">
      Customer Persona Distribution
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {data.map((persona, idx) => (
        <div
          key={idx}
          className="bg-[#26285a] rounded-lg shadow border border-[#26285a] p-5 flex items-center justify-between min-w-[180px]"
        >
          {/* Colored dot on the left */}
          <span
            className="inline-block h-3 w-3 rounded-full"
            style={{ background: persona.color }}
          />
          {/* Label & value block on the right */}
          <div className="text-right">
            <div className="text-sm font-semibold text-white">
              {persona.label}
            </div>
            <div className="text-xl font-bold" style={{ color: persona.color }}>
              {persona.value}
            </div>
            <div className="text-xs text-gray-400 -mt-1">customers</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default PersonaCards;
