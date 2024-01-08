import React from 'react';
import { Col, Row } from 'antd';
import LRArrow from './LRArrow';

const Ticket = () => (
  <>
    <Row type="flex" align="middle">
      <Col style={{fontSize:'25px', fontWeight:'bolder'}} span={8} align="center" justify="center">
        16:00
      </Col>
      <Col style={{ color:'GrayText',fontWeight:'normal'}} span={8} align="center" justify="center">
        教师3号班车
      </Col>
      <Col style={{fontSize:'25px', fontWeight:'bolder'}} span={8} align="center" justify="center">
        16:40
      </Col>
    </Row>

    <Row type="flex" align="middle">
     <Col style={{fontSize:'18px', fontWeight:'normal'}} span={8} align="center" justify="center">
         紫金港校区
       </Col>
       <Col style={{ color:" rgba(150, 150,255)",fontWeight:'normal'}} span={8} align="center" justify='top'>
        <LRArrow/>（运行时刻表）
      </Col>
       <Col style={{fontSize:'18px', fontWeight:"normal"}} span={8} align="center" justify="center">
         西溪校区
       </Col>

    </Row>

  </>
);

export default Ticket;
