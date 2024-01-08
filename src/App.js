// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Page1 from './components/page1.js';
import Page2 from './components/page2.js';
import Page3 from './components/page3';
import Navbar from './components/Navbar';

const App = () => {
  const [bookedBus, setBookedBus] = useState(null);

  const handleBusBooked = (busInfo) => {
    setBookedBus(busInfo);
  };

  const handleBookBus = (busInfo) => {
    console.log('Bus booked:', busInfo);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/page1/*" element={<Page1 onBookBus={handleBookBus} onBusBooked={handleBusBooked} />} />
          <Route path="/page2" element={<Page2 bookedBus={bookedBus} />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/" element={<Navigate to="/page1" />} />
        </Routes>
        <Navbar />
      </div>
    </Router>
  );
};

export default App;
