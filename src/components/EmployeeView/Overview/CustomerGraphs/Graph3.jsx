import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register necessary components and plugins
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, ChartDataLabels);

const Graph3 = ({ data }) => {
  // Extract card names and revenue values from the data
  const cards = Object.keys(data.revenue_by_card);
  const revenues = Object.values(data.revenue_by_card);

  // Prepare data for the chart
  const chartData = {
    labels: cards,
    datasets: [
      {
        label: 'Revenue by Card',
        data: revenues,
        backgroundColor: 'rgba(54, 162, 235, 0.6)', // Blue color
        borderColor: 'rgba(54, 162, 235, 1)',
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
      text: 'Revenue Generated for Credit Card Campaign',
      color: 'black', // Set the title color
      font: {
        size: 16, // Set the title font size
        weight: 'bold', // Make the title bold
      },
      padding: {
        bottom: 20, // Add space below the title
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Card Type',
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
        text: 'Revenue',
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
};



  return <Bar data={chartData} options={options} />;
};

export default Graph3;
