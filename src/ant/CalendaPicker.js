import React, { useState } from 'react';
import { CalendarPicker, List } from 'antd-mobile';

const min = new Date();
min.setDate(2);
const max = new Date();
max.setDate(5);

export default () => {
  const [visible4, setVisible4] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <List.Item 
      onClick={() => {
        setVisible4(true);
      }}
      style={{
        border: '1px solid #ccc', // 灰色边框
        borderRadius: '10px', // 圆角大小
        padding: '10px', // 可根据需要调整内边距
        zIndex: '3000',
        height: '40px',
        display: 'flex', // 使用 flex 布局
        alignItems: 'center', // 在垂直方向上居中
        fontSize: '16px', // 调整字号大小
        color: selectedDate ? '#000' : '#aaa', // 根据是否有选择日期来调整文字颜色
      }}
    >
      {selectedDate ? selectedDate.toLocaleDateString() : '选择日期'}
      <CalendarPicker
        min={min}
        max={max}
        visible={visible4}
        onClose={() => setVisible4(false)}
        onMaskClick={() => setVisible4(false)}
        onChange={handleDateChange}
      />
    </List.Item>
  );
};
