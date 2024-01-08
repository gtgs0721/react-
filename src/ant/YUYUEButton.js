import React, { useState } from 'react';
import { Button } from 'antd-mobile';

const YUYUEButton = ({ onClick }) => {
  const [isYuyue, setIsYuyue] = useState(false);

  const handleButtonClick = () => {
    if (!isYuyue) {
      setIsYuyue(true);
      // You can also call the onClick function here if needed
      if (onClick) {
        onClick();
      }
    }
  };

  return (
    <Button block disabled={isYuyue} onClick={handleButtonClick}>
      {isYuyue ? '已预约' : '预约'}
    </Button>
  );
};

export default YUYUEButton