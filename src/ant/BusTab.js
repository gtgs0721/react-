import React from 'react';
import { Tabs } from 'antd-mobile';

const BusTab = () => {
  const stationData = [
    { name: '东大门', key: '1', count: 10 },
    { name: '风雨操场', key: '2', count: 8 },
    { name: '东教学区', key: '3', count: 15 },
    { name: '生科院', key: '4', count: 5 },
    { name: '医药组团', key: '5', count: 12 },
    { name: '人文社科组团', key: '6', count: 7 },
    { name: '管理学院', key: '7', count: 9 },
    { name: '理工组团', key: '8', count: 11 },
    { name: '材化高组团', key: '9', count: 6 },
    { name: '北教学区', key: '10', count: 14 },
    { name: '生活区', key: '11', count: 13 },
  ];

  return (
    <Tabs activeLineMode='fixed' style={{ '--fixed-active-line-width': '20px' }}>
      {stationData.map((station) => (
        <Tabs.Tab key={station.key} title={`${station.name} (${station.count})`}>
          {station.name}
        </Tabs.Tab>
      ))}
    </Tabs>
  );
};

export default BusTab;
