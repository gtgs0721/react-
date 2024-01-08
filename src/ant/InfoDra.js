import React, { useState } from 'react';
import { Drawer, List } from 'antd';
import './InfoDra.css'
import QRCard from './QRCard';
import{QrcodeOutlined, CarOutlined } from '@ant-design/icons';

const InfoDra = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <List style={{color:'gray',textDecoration: 'none'}}
        dataSource={[
          {
            id: 1,
            name: '紫金港~西溪',
          },
          
        ]}
        bordered
        renderItem={(item) => (
          <List.Item
            key={item.id} 
            actions={[
              <a onClick={showDrawer} key={`a-${item.id}`}>
                <QrcodeOutlined style={{fontSize:'25px'}}/>
              </a>,
            ]}
          >
          <List.Item.Meta 
           style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            avatar={<CarOutlined style={{ fontSize: '24px' }} />} // Adjust the fontSize as needed
            title={<a href="https://ant.design/index-cn">{item.name}</a>}
            description=" 16:00~16:40"
          />


           </List.Item>
        )}
      />
      <Drawer width={640} placement="bottom" height={680} closable={false} onClose={onClose} open={open}style={{backgroundColor:'GrayText' ,position:'relative',top:'0px',margin:'0px',zIndex:'999999'}}>
       <QRCard/>
      </Drawer>
    </>
  );
};
export default InfoDra;