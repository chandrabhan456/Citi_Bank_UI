import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const Graph2 = () => {
  // Dummy data
  const data = {
    labels: [
      'Cashback Master', 'E-Shopper', 'International Gold', 'Family Planner', 
      'Frequent Flyer', 'Fuel Saver', 'Student Achieve', 'Travel Elite', 'Weekend Boost'
    ],
    datasets: [
      {
        label: 'Revenue ($)',
        data: [150, 100, 200, 350, 400, 50, 75, 250, 500],
        backgroundColor: 'rgba(34, 139, 34, 0.8)',  // Green color with slight transparency
        borderColor: 'rgba(34, 139, 34, 1)',        // Solid green border
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Revenue Generated per Credit Card Campaign',
        color: 'white',  // Title color
      },
      legend: {
        display: false,  // Hide legend for simplicity
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'white',  // X-axis labels color
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: 'white',  // Y-axis labels color
        },
      },
    },
  };

  return (
    <div className='' style={{ width: '100%', margin: '0 auto', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', borderRadius: '8px', backgroundColor: '#1d2041', padding: '20px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Graph2;
