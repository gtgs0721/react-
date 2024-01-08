import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import {TeamOutline} from 'antd-mobile-icons'
import PerForm from './PerForm';

const SetDra = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="text"size='large' onClick={showDrawer} shape={"circle"} icon={<TeamOutline />}style={{ position :'realtive',zIndex:18,top :'-13px',right:'-300px', /* 其他样式属性 */ }}/>
      <Drawer title="切换登录" placement="bottom"height={600} onClose={onClose} closeIcon={null}open={open}>
        <PerForm/>
      </Drawer>
    </>
  );
};
export default SetDra;