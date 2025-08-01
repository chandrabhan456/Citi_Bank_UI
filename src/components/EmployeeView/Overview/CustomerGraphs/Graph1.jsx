import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register necessary components and plugins
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, ChartDataLabels);

const Graph1 = ({ data }) => {
  // Extract category names and values from the data
  const categories = Object.keys(data.total_spending_by_category);
  const values = Object.values(data.total_spending_by_category);

  // Prepare data for the chart
  const chartData = {
    labels: categories,
    datasets: [
      {
        label: 'Total Spending by Category',
        data: values,
        backgroundColor: 'rgba(255, 165, 0, 0.6)', // Orange color
        borderColor: 'rgba(255, 165, 0, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    indexAxis: 'y', // This makes the bars horizontal
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      datalabels: {
        align: 'end',
        anchor: 'end',
        formatter: Math.round,
        color: 'black', // Set data label text color to white
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
        beginAtZero: true,
        title: {
          display: true,
          text: 'Spending Amount($)',
          color: 'grey', // Set x-axis title color to white
        },
        ticks: {
          color: 'black', // Set x-axis ticks color to white
        },
      },
      y: {
        title: {
          display: true,
          text: 'Category',
          color: 'grey', // Set y-axis title color to white
        },
        ticks: {
          color: 'black', // Set y-axis ticks color to white
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default Graph1;
