import React from 'react';
import { FloatButton } from 'antd';
const ToTop = () => (
  <div
    style={{
      height: '10vh',
      padding: 10,
    }}
    >
    <FloatButton.BackTop style={{top:'800px',left:'200px',zIndex:'9999999'}}/>

  </div>
);
export default ToTop;