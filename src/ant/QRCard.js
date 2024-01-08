import React, { useState } from 'react';
import { Card, Toast, Button } from 'antd-mobile';
import { AntOutline, RightOutline } from 'antd-mobile-icons';
import QRcode from './QRcode';
import styles from './QRCard.less';
import QRDivider from './QRDivider';
import Time from './Time';
import Ticket from './Ticket';

const QRCard = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const onHeaderClick = () => {
    Toast.show('点击了卡片Header区域');
  };

  const onBodyClick = () => {
    Toast.show('点击了卡片Body区域');
  };

  return (
    <>
      <Card
        title={
          <div style={{ fontWeight: 'normal' }}>
            <AntOutline style={{ marginRight: '4px', color: '#1677ff' }} />
            2024年1月4日
          </div>
        }
        extra={<RightOutline />}
        onBodyClick={onBodyClick}
        onHeaderClick={onHeaderClick}
        style={{ borderRadius: '16px' }}
      >
        <Ticket />
        <QRDivider />
        <Time />
        <div style={{ margin: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className={styles.content}><QRcode /></div>
        <div className={styles.footer} onClick={e => e.stopPropagation()}>
          <Button
            color={isConfirmed ? 'default' : 'primary'}
            onClick={() => {
              Toast.show('已上车');
              setIsConfirmed(true);
            }}
          >
            {isConfirmed ? '已上车' : '确认上车'}
          </Button>
        </div>
        <div style={{ margin: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={e => e.stopPropagation()}>
          如果有三次违约将禁止您使用此预约服务
        </div>
      </Card>
    </>
  );
};

export default QRCard;
