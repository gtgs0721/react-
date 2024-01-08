// src/components/ShuttleBus.js
import React, { useState } from 'react';
import './ShuttleBus.css';

const ShuttleBus = () => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');

  const handleSearch = () => {
    // Add your logic for finding recommended routes and displaying progress bar here
    console.log(`Searching routes from ${departure} to ${destination}`);
  };

  return (
    <div className="shuttle-bus-container">
      <h2>校内通勤</h2>
      <div className="input-row">
        <label>
          出发地：
          <input
            type="text"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
          />
        </label>
        <label>
          目的地：
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleSearch}>查询</button>
      {/* Add recommended routes and progress bar display here */}
    </div>
  );
};

export default ShuttleBus;
