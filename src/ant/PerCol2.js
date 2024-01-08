import React from 'react';
import { Collapse } from 'antd-mobile';
import P3List from './P3List';



const PerCol2 =() => {
  return (
   <Collapse  style={{position:'relative', top:'-80px'}}>
     <Collapse.Panel key='3' title='设置' style={{color:'gray',textDecoration: 'none'}}>
       <P3List/>
     </Collapse.Panel>
   </Collapse>
  );
};
export default PerCol2;
