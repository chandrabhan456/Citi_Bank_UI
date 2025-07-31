import React, { useState } from 'react';

// Import your graph components
import Graph1 from './Graphs/Graph1';
import Graph2 from './Graphs/Graph2';
import Graph3 from './Graphs/Graph3';

const GraphPage = () => {
  const [activeGraph, setActiveGraph] = useState(1);

  const renderGraph = () => {
    switch (activeGraph) {
      case 1:
        return <Graph1 />;
      case 2:
        return <Graph2 />;
      case 3:
        return <Graph3 />;
      default:
        return <Graph1 />;
    }
  };

  return (
    <div style={{ backgroundColor: '#1d2041', color: 'white', padding: '20px', height: '100vh' }}>
         <div className="flex " >
                  <p className="text-xl font-extrabold tracking-tight text-white">
                    Analytics Overview
                  </p>
                </div>
      <div className='mt-4' style={{ display: 'flex', marginBottom: '0px' }}>
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
        <button
          onClick={() => setActiveGraph(3)}
          style={{
            flex: 1,
            border: '1px solid grey',
            backgroundColor: activeGraph === 3 ? '#303456' : '#1d2041',
            color: 'white',
            padding: '10px',
            cursor: 'pointer',
            outline: 'none',
            transition: 'background-color 0.3s',
          }}
        >
          Graph 3
        </button>
      </div>
      <div className='mt-2'>
        {renderGraph()}
      </div>
    </div>
  );
};

export default GraphPage;
