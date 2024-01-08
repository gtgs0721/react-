import React from 'react';
import {  List, SwipeAction, } from 'antd-mobile';

const P3List = () => {
  const leftActions = [
    {
      key: 'pin',
      text: '置顶',
      color: 'primary',
    },
  ];
  const rightActions = [
    {
      key: 'unsubscribe',
      text: '已读',
      color: 'light',
    },
    {
      key: 'delete',
      text: '删除',
      color: 'danger',
    },
  ];
  const items = ['通知：关于校车停靠点变换','通知：关于校车停靠点变换','通知：关于校车停靠点变换','通知：关于校车停靠点变换','通知：关于校车停靠点变换','通知：关于校车停靠点变换', '通知：关于xxx班车停止服务','通知：关于xxx班车停止服务','通知：关于xxx班车停止服务','通知：关于xxx班车停止服务','通知：关于xxx班车停止服务', '祝大家元旦快乐','通知：xxxxxx','通知：xxxxxxxx'];
  return (
    <List>
      {items.map((item) => (
        <SwipeAction key={item} leftActions={leftActions} rightActions={rightActions}>
          <List.Item>{item}</List.Item>
        </SwipeAction>
      ))}
    </List>
  );
};

export default P3List;
