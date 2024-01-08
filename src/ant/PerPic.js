import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import { Avatar, Space } from 'antd';
const PerPic = () => (
  <Space direction="vertical" size={16}>
    <Space wrap size={16}>
      <Avatar shape='circle' size={80}style={{position:'relative', top:'-40px',left:'180px',zIndex:19}} icon={<UserOutlined />} />
    </Space>
  </Space>
);
export default PerPic;