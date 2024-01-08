// src/components/page1/page1.js
import React from 'react';
import MapComponent2 from './MapContainer2'; // 导入驾车路线规划组件
import Notification from '../components/Notification'; // 这是添加的导入语句
import TopBar from '../components/TopBar';
import ToTop from '../ant/ToTop';
import FloatingPanel from '../ant/FloatingPanel';

const Page1 = () => {
  return (
    <div style={{marginbottom:'200px'}}> 
      <TopBar message="___ "/>
      <Notification message="温馨提醒：违约记录达到3次后，预约资格将被取消！"/>
      <MapComponent2/>
      <FloatingPanel/>
      <ToTop/>
    </div>
  );
};

export default Page1;
