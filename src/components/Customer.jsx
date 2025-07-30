import React, { useEffect } from "react";
import Card from "./Card";
function Customer() {
 
  const cardsData = [
    {
      fee: "$95",
      type: "Travel Elite",
      cardno: "XXXX XXXX XXXX 1234",
      valid: "04/42 VALID THRU",
      cvv: "123",
      name: "ALICE BROWN",
      benefits: [
        "3X points on travel & dining",
        "No foreign transaction fees",
        "Priority Pass lounge access",
        "60K bonus points",
      ],
      gradientFrom: "#7B2FF7",
      gradientTo: "#F107A3",
    },
    {
      fee: "$495",
      type: "Business Pro",
      cardno: "XXXX XXXX XXXX 5678",
      valid: "12/28 VALID THRU",
      cvv: "456",
      name: "ALICE BROWN",
      benefits: [
        "4th night free on hotels",
        "Priority Pass Select",
        "Comprehensive travel insurance",
        "Concierge service",
      ],
      gradientFrom: "#00C9FF",
      gradientTo: "#92FE9D",
    },
    {
      fee: "$0",
      type: "Cashback Master",
      cardno: "XXXX XXXX XXXX 6548",
      valid: "12/32 VALID THRU",
      cvv: "641",
      name: "ALICE BROWN",
      benefits: [
        "2% cashback on everything",
        "No annual fee",
        "Price rewind protection",
        "Extended warranty",
      ],
      gradientFrom: "#FFB6C1",
      gradientTo: "#FF69B4",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1D2041] p-8 flex flex-col items-center">
  <div
    className="w-half flex justify-center mb-8"
    style={{
      backgroundColor: "#a7f4a7ff",
      padding: "1rem",
      borderRadius: "8px",
    }}
  >
    <p
      style={{
        color: "#1D2041",
        fontSize: "1.125rem",
        fontWeight: "600",
        textAlign: "center",
        margin: 0,
      }}
    >
      Hi Michael, here are your top three recommended cards.
    </p>
  </div>
  <div className="flex flex-wrap justify-center gap-8">
    {cardsData.map((cardData, index) => (
      <Card key={index} {...cardData} />
    ))}
  </div>
  
</div>

  );
}

export default Customer;
