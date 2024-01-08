import React from 'react'
import { Button, Dialog,Toast } from 'antd-mobile'

const SignIn = () => {
  return (
   <Button block color='primary' size='large'
       onClick={() =>
      Dialog.confirm({
         content: '确认登录',
           onConfirm: async () => {
             Toast.show({
               icon: 'success',
               content: '登录成功',
             position: 'bottom',
           })
          },
       })
      }
     >
       登录
     </Button>     
  )
}

export default SignIn;
