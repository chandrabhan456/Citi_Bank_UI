import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register necessary components and plugins
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, ChartDataLabels);

const Graph1 = () => {
  // Define data for the chart
  const chartData = {
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

  // Chart options
 const options = {
  plugins: {
    legend: {
      display: false, // Hide the legend
    },
    datalabels: {
      align: 'end',
      anchor: 'end',
      formatter: Math.round,
      color: 'black', // Set data label text color to black
    },
    title: {
      display: true, // Enable the title
      text: 'Total Spendings by Category',
      color: 'black', // Set the title color
      font: {
        size: 16, // Set the title font size
        weight: 'bold', // Make the title bold
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Category',
        color: 'grey', // Set x-axis title color to grey
        font: {
          size: 14, // Make the title slightly larger
          weight: 'bold', // Make the title bold
        },
      },
      ticks: {
        color: 'black', // Set x-axis ticks color to black
        font: {
          size: 12, // Set tick label size
        },
      },
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Total Spendings($)',
        color: 'grey', // Set y-axis title color to grey
        font: {
          size: 14, // Make the title slightly larger
          weight: 'bold', // Make the title bold
        },
      },
      ticks: {
        color: 'black', // Set y-axis ticks color to black
        font: {
          size: 12, // Set tick label size
        },
      },
    },
  },
  maintainAspectRatio: false, // Allow the chart to fill the container
};

 return (
     <div style={{ height: '400px', maxWidth: '800px', margin: '0 auto' }}>
       <Bar data={chartData} options={options} />
     </div>
   );
};

export default Graph1;
