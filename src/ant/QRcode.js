import React from 'react';
import { QRCode, Space, theme } from 'antd';
const { useToken } = theme;

const QRcode = () => {
  const { token } = useToken();

  const qrCodeStyle = {
    border: 'none', // 添加这一行来去掉边框
  };

  return (
    <Space>
      <QRCode
        value="https://ant.design/"
        color={token.colorInfoText}
        style={qrCodeStyle} // 将样式应用到QRCode组件
        size={200} // Adjust the size as per your requirement
      />
    </Space>
  );
};

export default QRcode;
