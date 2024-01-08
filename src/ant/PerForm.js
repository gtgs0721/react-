// src/ant/PerForm.js
import React from 'react';
import { Form, Input } from 'antd-mobile';
import SignIn from './SignIn';


const PerForm = () => {
  return (
    <>
      <Form layout='horizontal' mode='card'>
        <Form.Header>账号登录：</Form.Header>
        <Form.Item label='学号'>
          <Input placeholder='请输入' />
        </Form.Item>
        <Form.Item label='密码'>
          <Input placeholder='请输入' />
        </Form.Item>
        <Form.Header />
      </Form>
      <Form layout='horizontal' mode='card'       
      footer={
        <SignIn/>
        }>
        <Form.Header>带辅助操作</Form.Header>
        <Form.Item label='短信验证码' extra={<a>发送验证码</a>}>
          <Input placeholder='请输入' />
        </Form.Item>
      </Form>
    </>
  );
};

export default PerForm;