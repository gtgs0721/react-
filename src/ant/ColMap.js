import React from 'react';
import { Collapse } from 'antd-mobile';
import BusSteps from './BusSteps.js';

const ColMap = () => {
  return (
    <div>
     <Collapse defaultActiveKey={['1']}>
       <Collapse.Panel key='1' title='具体路线' style={{color:'gray',textDecoration: 'none'}}>
         <div id="my-panel" style={{  position: 'fixed', top: '20px', left: '0px', width: '430px', background: 'white', zIndex: '500', position: 'relative', top: '0px' }}></div>
       </Collapse.Panel>
     </Collapse>

   <Collapse defaultActiveKey={['2']}>
     <Collapse.Panel key='2' title='班车循环1——医药组团' style={{color:'gray',textDecoration: 'none'}}>
     <BusSteps/>
     </Collapse.Panel>
   </Collapse>

   <Collapse defaultActiveKey={['3']}>
     <Collapse.Panel key='3' title='班车循环2——南大门' style={{color:'gray',textDecoration: 'none'}}>
     <BusSteps/>
     </Collapse.Panel>
   </Collapse>

   <Collapse defaultActiveKey={['4']}>
     <Collapse.Panel key='4' title='班车循环3——北门' style={{color:'gray',textDecoration: 'none'}}>
       <BusSteps/>
     </Collapse.Panel>
   </Collapse>
</div>

  );
}

export default ColMap;
