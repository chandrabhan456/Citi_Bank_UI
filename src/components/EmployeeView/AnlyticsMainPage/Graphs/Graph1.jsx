import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const Graph1 = () => {
  // Dummy data
  const data = {
    labels: [
      'Travel', 'Online Shopping', 'Fashion', 'Entertainment', 'Dining', 'Wellness', 
      'Groceries', 'Tech', 'Home Supplies', 'Retail', 'Fitness', 'Education', 
      'Baby Supplies', 'Fuel'
    ],
    datasets: [
      {
        label: 'Total Amount ($)',
        data: [16000, 12000, 11000, 9000, 8500, 8000, 7500, 7000, 6500, 6000, 5500, 4000, 3000, 2000],
        backgroundColor: 'rgba(0, 123, 255, 0.8)',  // Blue color with slight transparency
        borderColor: 'rgba(0, 123, 255, 1)',        // Solid blue border
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Total Spending by Category',
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
    <div style={{ width: '100%', margin: '0 auto', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', borderRadius: '8px', backgroundColor: '#1d2041', padding: '20px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Graph1;
