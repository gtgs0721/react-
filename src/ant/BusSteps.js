import React from 'react';
import { Steps } from 'antd-mobile';

const { Step } = Steps;

const BusSteps = () => {
  const renderSteps = () => (
    <Steps current={4}>
      <Step title='东大门' description='' />
      <Step title='风雨操场' description='' />
      <Step title='东教学区' description='' />
      <Step title='生科院' description='' />
      <Step title='医药组团' description='' />
      <Step title='人文社科组团' description='' />
      <Step title='管理学院' description='' />
      <Step title='理工组团' description='' />
      <Step title='材化高组团' description='' />
      <Step title='北教学区' description='' />
      
    </Steps>
  );

  return renderSteps();
};

export default BusSteps;