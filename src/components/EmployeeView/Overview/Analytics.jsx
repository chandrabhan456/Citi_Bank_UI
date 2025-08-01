import React, { useState,useEffect } from 'react';
import { useStateContext } from "../../../contexts/ContextProvider";

// Import your graph components
import Graph1 from './CustomerGraphs/Graph1';
import Graph2 from './CustomerGraphs/Graph2';
import Graph3 from './CustomerGraphs/Graph3';

const Analytics = () => {
   const { selectedCustomerId } = useStateContext();
  const [activeGraph, setActiveGraph] = useState(1);
  const [graph1Data, setGraph1Data] = useState(null);
   const [graph2Data, setGraph2Data] = useState(null);
  
   const [error, setError] = useState(null);
   const [graph3Data, setGraph3Data] = useState(null);
 
   useEffect(() => {
    
     const fetchGraph1Data = async () => {
       try {
         const response = await fetch(`http://127.0.0.1:5000/customer-spending-by-category?customer_id=${selectedCustomerId}`, {
           method: "GET",
         });
         if (!response.ok) {
           throw new Error(`Failed to fetch portfolio: ${response.statusText}`);
         }
         const data = await response.json();
         setGraph1Data(data);
 
         
       } catch (err) {
         console.error("Error fetching portfolio:", err);
         setError("Portfolio: " + err.message);
         setGraph1Data(null);
       }
     };
 
     const fetchGraph2Data = async () => {
       try {
         const response = await fetch(`http://127.0.0.1:5000/customer-conversion-detail?customer_id=${selectedCustomerId}`, {
           method: "GET",
         });
         if (!response.ok) {
           throw new Error(
             `Failed to fetch recommendations: ${response.statusText}`
           );
         }
         const data = await response.json();
         setGraph2Data(data);
       } catch (err) {
         console.error("Error fetching recommendations:", err);
         setError("Recommendations: " + err.message);
         setGraph2Data(null);
       }
     };
     const fetchGraph3Data = async () => {
       try {
         const response = await fetch(`http://127.0.0.1:5000/customer-campaign-revenue?customer_id=${selectedCustomerId}`, {
           method: "GET",
         });
         if (!response.ok) {
           throw new Error(
             `Failed to fetch recommendations: ${response.statusText}`
           );
         }
         const data = await response.json();
         setGraph3Data(data);
       } catch (err) {
         console.error("Error fetching recommendations:", err);
         setError("Recommendations: " + err.message);
         setGraph3Data(null);
       }
     };
     fetchGraph1Data();
      fetchGraph2Data();
      fetchGraph3Data();
   }, []);
  const renderGraph = () => {
  if(graph1Data){
    switch (activeGraph) {
      case 1:
        return <Graph1 data={graph1Data} />;
      case 2:
        return <Graph3 data={graph3Data} />;
    
      default:
        return  <Graph1 data={graph1Data} />;
    }
  }};
console.log('graph3Datais',graph2Data)
  return (
    <div className="w-[50%] bg-[#1D2041] rounded-lg shadow-lg border p-6 border-gray-600 " style={{marginTop:'-30px'}}>
       
      <div className='' style={{ display: 'flex', marginBottom: '0px' }}>
        <button
          onClick={() => setActiveGraph(1)}
          style={{
            flex: 1,
            border: '1px solid grey',
            backgroundColor: activeGraph === 1 ? '#303456' : '#1d2041',
            color: 'white',
            padding: '10px',
            cursor: 'pointer',
            outline: 'none',
            transition: 'background-color 0.3s',
          }}
        >
          Graph 1
        </button>
        <button
          onClick={() => setActiveGraph(2)}
          style={{
            flex: 1,
            border: '1px solid grey',
            backgroundColor: activeGraph === 2 ? '#303456' : '#1d2041',
            color: 'white',
            padding: '10px',
            cursor: 'pointer',
            outline: 'none',
            transition: 'background-color 0.3s',
          }}
        >
          Graph 2
        </button>
       
        
      </div>
      <div className='mt-2 bg-white flex justify-center items-center'>
        {renderGraph()}
      </div>
    </div>
  );
};

export default Analytics;
