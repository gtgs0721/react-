// src/components/Page3.js
import React from 'react';
import TopBar from '../components/TopBar';
import ToTop from '../ant/ToTop';
import SetDra from '../ant/SetDra';
import PerPic from '../ant/PerPic';
import PerCol from '../ant/PerCol';
import PerCol2 from '../ant/PerCol2';
import myImage from './pic/background2.jpg'


const Page3 = () => {
  return (
    <div style={{background:'lightgray'}}>
      <div style={{maxHeight:'320px'}}>
       <img style={{maxWidth:'430px'}} src={myImage} alt="My Image" />
      </div> 
      <PerPic/>
      <TopBar/>
      <SetDra/>
      <PerCol />
      <p/>
      <PerCol2/>
      <ToTop/>
    </div>
  );
};

export default Page3;
