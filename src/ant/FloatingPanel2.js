import React from 'react'
import { FloatingPanel, List } from 'antd-mobile'
import ColMap from './ColMap.js';


const anchors = [100, window.innerHeight * 0.4, window.innerHeight * 0.8]

export default () => {
  return (
    <>
      <FloatingPanel style={{bottom:'80px'}} anchors={anchors}>
       <div>
        <ColMap/>
       </div>
      </FloatingPanel>
    </>
  )
}