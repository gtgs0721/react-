// src/components/TopBar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTimes } from '@fortawesome/free-solid-svg-icons';
import './TopBar.css';

const TopBar = ({ message }) => {
  return (
    <div className="topbar">
      <div className="topbar-icons">
        <FontAwesomeIcon icon={faArrowLeft} className="icon-left" />
        <FontAwesomeIcon icon={faTimes} className="icon-right" />
      </div>
      <div className="topbar-content">
        浙大钉—校车
      </div>
    </div>
  );
};

export default TopBar;
