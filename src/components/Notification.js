// src/components/Notification.js
import React from 'react';
import './Notification.css';
const message="asdda"

const Notification = ({ message }) => {
  return (
    <div className="notification">
      <div className="notification-content">
        {message}
      </div>
    </div>
  );
};

export default Notification;
