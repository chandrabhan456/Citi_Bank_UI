import React, { useState } from "react";
import { useStateContext } from "../../../contexts/ContextProvider";

const colorPalette = [
  "#e57373",
  "#64b5f6",
  "#81c784",
  "#ffd54f",
  "#ba68c8",
  "#4db6ac",
  "#ff8a65",
  "#a1887f",
  "#90a4ae",
  "#f06292",
  "#7986cb",
];

const PersonaCards = ({ data }) => {
  const { selectedCategory, setSelectedCategory } = useStateContext();

  

  // State to keep track of the currently clicked card
  const [clickedCardIndex, setClickedCardIndex] = useState(null);

  // Function to handle click and update selected category
  const handleCardClick = (idx, persona) => {
    setSelectedCategory(persona.persona);
    setClickedCardIndex(idx);
  };
const rgbToHex = (r, g, b) => {
  const toHex = (component) => component.toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

const generateRandomColorHex = () => {
  const randomChannel = () => Math.floor(Math.random() * 156 + 100);
  const red = randomChannel();
  const green = randomChannel();
  const blue = Math.floor(Math.random() * 56);

  return rgbToHex(red, green, blue);
};

const colorPaletteHex = Array.from({ length: 11 }, generateRandomColorHex);

console.log("Generated Colors:", colorPaletteHex);


const generateRandomValue = () => {
  return (Math.random() * 10 - 5).toFixed(0); // Generates a number between -5 and +5
};

const numberOfDataPoints = 11; // Adjust this to the number of points you need
const colorPalette = Array.from({ length: numberOfDataPoints }, generateRandomColorHex);
const randomValues = Array.from({ length: numberOfDataPoints }, generateRandomValue);
const formatValueDisplay = (value) => {
  const isPositive = parseFloat(value) > 0;
  const color = isPositive ? 'green' : 'red';
  const trendIcon = isPositive ? '▲' : '▼'; // Up arrow for positive, down arrow for negative

  return (
    <div style={{ color, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
      <span>{value}</span>
      <span style={{ marginLeft: '5px' }}>{trendIcon}</span>
    </div>
  );
};

console.log("Random Colors:", colorPalette);
console.log("Random Values:", randomValues);

  return (
    <div className="mx-auto bg-[#1D2041] rounded-xl px-6 py-6 shadow flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
      {data.map((persona, idx) => (
  <div
    key={idx}
    className={`rounded-lg shadow border p-5 flex items-center justify-between min-w-[180px] cursor-pointer transition ${
      clickedCardIndex === idx
        ? "bg-[#626897] border-[#303456]"
        : "bg-[#26285a] border-[#26285a] hover:border-[#5356a8] hover:bg-[#212358]"
    }`}
    onClick={() => handleCardClick(idx, persona)}
  >
    {/* Colored dot on the left */}
    <span
      className="inline-block h-3 w-3 rounded-full"
      style={{ background: colorPaletteHex[idx] }}
    />
    {/* Label & value block on the right */}
    <div className="text-right">
      <div className="text-sm font-semibold text-white">
        {persona.count}
      </div>
      <div
        className="text-xl font-bold whitespace-nowrap"
        style={{ color: colorPaletteHex[idx] }}
      >
        {persona.persona}
      </div>
      {/* Conditional value display with trend icon */}
      <div className="text-right">
        {formatValueDisplay(randomValues[idx])}
      </div>
    </div>
  </div>
))}


      </div>
    </div>
  );
};

export default PersonaCards;
