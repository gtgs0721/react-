import React from 'react'
import { FloatingPanel, List } from 'antd-mobile'
import BusSearch from '../components/BusSearch'

const anchors = [100, window.innerHeight * 0.4, window.innerHeight * 0.8]

export default () => {
  return (
    <>
      <FloatingPanel  style={{bottom:'80px'}} anchors={anchors}>
        <BusSearch/>
      </FloatingPanel>
    </>
  )
}