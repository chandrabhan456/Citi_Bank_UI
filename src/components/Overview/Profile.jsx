// CustomerRecommendation.jsx

import React, { useState } from 'react';
import { useStateContext } from "../../contexts/ContextProvider";
// Dummy data for 20 customers
const customers = Array.from({ length: 20 }, (_, index) => ({
  id: `CUST${String(index + 1).padStart(3, '0')}`,
  name: `Customer ${index + 1}`,
  spend: `$${(Math.random() * 20000).toFixed(2)}`,
  category: ['Travel', 'Dining', 'Entertainment', 'Retail', 'Fuel', 'Wellness'][index % 6],
  credit_score: Math.floor(Math.random() * (800 - 600 + 1)) + 600,
  age: Math.floor(Math.random() * (65 - 18 + 1)) + 18,
  income: `$${(Math.random() * 100000).toFixed(2)}`,
  last_transaction: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
  channel: ['Online', 'Mobile', 'In-Store'][index % 3],
  persona: ['Health Conscious', 'Budget Shopper', 'Luxury Seeker'][index % 3],
}));

const Profile = () => {
      const {  selectedCustomerId, setSelectedCustomerId } =
        useStateContext();
  // Find the selected customer based on the ID
  const selectedCustomer = customers.find(customer => customer.id === selectedCustomerId);

  // If no customer is found, return a placeholder or a message
  if (!selectedCustomer) {
    return <div>No customer found with ID {selectedCustomerId}</div>;
  }

  // UI for displaying customer details
  return (
    <div className="p-6 bg-[#1D2041] rounded-lg shadow-lg border w-[50%] border-gray-600">
    <h2 className="font-bold text-2xl mb-4 text-purple-700 flex items-center justify-between">
  <span className="flex items-center">
   
    {selectedCustomerId}
  </span>
  <div className="bg-green-500 text-white px-3 py-1 rounded-full inline-block">
    High Value
  </div>
</h2>

   <div className="flex justify-between items-start text-xl mb-8">
  <div className="text-white space-y-2">
    <p><strong className='text-blue-400'>Customer ID:</strong> {selectedCustomer.id}</p>
    <p><strong className='text-blue-400'>Annual Spend:</strong> {selectedCustomer.spend}</p>
    <p><strong className='text-blue-400'>Primary Category:</strong> {selectedCustomer.category}</p>
    <p><strong className='text-blue-400'>Preferred Channel:</strong> {selectedCustomer.channel}</p>
    <p><strong className='text-blue-400'>Persona:</strong> {selectedCustomer.persona}</p>
  </div>
  <div className="text-white space-y-2">
    <p><strong className='text-blue-400'>Credit Score:</strong> {selectedCustomer.credit_score}</p>
    <p><strong className='text-blue-400'>Age:</strong> {selectedCustomer.age}</p>
    <p><strong className='text-blue-400'>Annual Income:</strong> {selectedCustomer.income}</p>
    <p><strong className='text-blue-400'>Last Transaction:</strong> {selectedCustomer.last_transaction}</p>
  </div>
</div>

    
    </div>
  );
};

export default Profile;
