// src/components/page1/page1.js
import React from 'react';
import TopBar from '../components/TopBar';
import MapComponent from './MapContainer'; // 导入驾车路线规划组件
import ToTop from '../ant/ToTop';
import FloatingPanel2 from '../ant/FloatingPanel2';


const Page1 = () => {
  return (
    <div>
      <MapComponent/>
      <TopBar message="ASAS "/>
      <FloatingPanel2/>      
      <ToTop/>
    </div>
  );
};

export default Page1;
