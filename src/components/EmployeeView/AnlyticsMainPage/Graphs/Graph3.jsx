import React from 'react';
import HeatMap from 'react-heatmap-grid';

const Graph3 = () => {
  // Dummy data
  const xLabels = [
    'Cashback Master', 'E-Shopper', 'Entertainment Blue', 'Family Planner', 
    'Fashion Forward', 'Student Achieve', 'Travel Elite', 'Weekend Boost'
  ];
  
  const yLabels = [
    'College Student', 'Commuter', 'Entertainment Lover', 'Family Focused', 
    'Family Planner', 'Fashionista', 'Frequent Traveler', 'Health Conscious', 
    'Tech Enthusiast', 'Young Professional'
  ];
  
  const data = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0],
  ];

  return (
    <div style={{ width: '80%', margin: '0 auto', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', borderRadius: '8px', backgroundColor: '#1d2041', padding: '20px', color: 'white' }}>
      <h3 style={{ textAlign: 'center', color: 'white' }}>Conversion Count: Customer Persona vs Recommended Card</h3>
      <HeatMap
        xLabels={xLabels}
        yLabels={yLabels}
        data={data}
        backgroundColorOnHover={'#ffcccb'}
        squares
        cellRender={(x, y, value) => value && `${value}`}
        xLabelWidth={100}
        yLabelWidth={150}
        cellStyle={(background, value, min, max, data, x, y) => ({
          background: `rgba(0, 0, 255, ${1 - (max - value) / (max - min)})`,
          color: 'white',
        })}
      />
    </div>
  );
};

export default Graph3;
