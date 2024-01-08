import InfoDra from './InfoDra';
import React from 'react';
import { Collapse } from 'antd-mobile';
import { Col, Row } from 'antd';
import P3List from './P3List';



const PerCol =() => {
  return (
   <Collapse   style={{position:'relative', top:'-80px'}}>
     <Collapse.Panel arrow={null} key='1' title='账号信息' style={{color:'gray',textDecoration: 'none'}}>
       <Row justify="center">
         <Col span={11.5}>姓名：戴俊明</Col>
       </Row>
       <Row justify="center">
         <Col span={11.5}>学院：艺术与考古学院</Col>
       </Row>
       <Row  justify="center">
         <Col span={11.5}>学号：3210101409</Col>
       </Row>
     </Collapse.Panel>
     <Collapse.Panel  key='2' title='我的班车' style={{color:'gray',textDecoration: 'none'}}>
       <InfoDra />
     </Collapse.Panel>
     <Collapse.Panel key='3' title='消息通知' style={{color:'gray',textDecoration: 'none'}}>
       <P3List/>
     </Collapse.Panel>
   </Collapse>
  );
};
export default PerCol;
