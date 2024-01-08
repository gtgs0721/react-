// src/components/BusSearch.js
import React, { useState } from 'react';
import Ticket from '../ant/Ticket';
import 'react-datepicker/dist/react-datepicker.css';
import { FaExchangeAlt } from 'react-icons/fa';
import './BusSearch.css';
import CalendaPicker from '../ant/CalendaPicker';
import YUYUEButton from '../ant/YUYUEButton.js';

const BusSearch = ({ onBookBus, onBusBooked }) => {
  const [selectedDeparture, setSelectedDeparture] = useState('出发地');
  const [selectedDestination, setSelectedDestination] = useState('目的地');
  const [busInfoList, setBusInfoList] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const generateMockBusInfo = (index) => {
  };

  const handleSearch = () => {
    const mockBusInfoList = Array.from({ length: 3 }, (_, index) =>
      generateMockBusInfo(index)
    );

    setBusInfoList(mockBusInfoList);
    setIsCollapsed(false);
    setIsInfoOpen(true);
  };

  const handleShrink = () => {
    setIsCollapsed(true);
    setIsInfoOpen(false);
  };

  const handleSwapLocations = () => {
    setSelectedDeparture(selectedDestination);
    setSelectedDestination(selectedDeparture);
  };

  return (
    <div className={`bus-search-container ${isInfoOpen ? 'info-open' : ''}`}>
      <div className="input-row">
        <label>
          <select
            value={selectedDeparture}
            onChange={(e) => setSelectedDeparture(e.target.value)}
          >
            <option value="出发地" disabled={selectedDeparture !== '出发地'}>
              出发地
            </option>
            <option value="紫金港校区">紫金港校区</option>
            <option value="西溪校区">西溪校区</option>
            <option value="玉泉校区">玉泉校区</option>
            <option value="华家池校区">华家池校区</option>
            <option value="之江校区">之江校区</option>
            <option value="戴俊明的寝室">戴俊明的寝室</option>
          </select>
        </label>
        <button className="swap-button" onClick={handleSwapLocations}>
          <FaExchangeAlt size={16} className="swap-icon" />
        </button>
        <label>
          <select
            value={selectedDestination}
            onChange={(e) => setSelectedDestination(e.target.value)}
          >
            <option value="目的地" disabled={selectedDestination !== '目的地'}>
              目的地
            </option>
            <option value="紫金港校区">紫金港校区</option>
            <option value="西溪校区">西溪校区</option>
            <option value="玉泉校区">玉泉校区</option>
            <option value="华家池校区">华家池校区</option>
            <option value="之江校区">之江校区</option>
            <option value="戴俊明的寝室">戴俊明的寝室</option>
          </select>
        </label>
      </div>
      <div className="input-row">
        <label className="CalendaPicker">
          <CalendaPicker style={{ zIndex: '10000000', borderRadius: '10px' }} />
        </label>
      </div>
      <div className="input-row">
        <button onClick={handleSearch}>查询</button>
        {!isCollapsed && (
          <button className="shrink" onClick={handleShrink}>
            收缩
          </button>
         
        )}
      </div>

      {!isCollapsed && busInfoList.length > 0 && (
        <div className="bus-info-container">
          <p>符合条件的班车信息：</p>
          {busInfoList.map((busInfo, index) => (
            <div key={index} className="bus-info-box">
              <Ticket />
              <p >可用座位：15</p>
              <YUYUEButton/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BusSearch;
