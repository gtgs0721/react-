import React, { useState, useEffect } from 'react';

const Time = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date) => {
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return date.toLocaleTimeString(undefined, options);
  };

  const style = {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '24px',
  };

  return (
    <div style={style}>
      <div>{formatDate(currentDateTime)}</div>
      <div>{formatTime(currentDateTime)}</div>
    </div>
  );
};

export default Time;
