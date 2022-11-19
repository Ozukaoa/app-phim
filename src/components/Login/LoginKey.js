import React, { useEffect } from 'react'

import { Button, Input } from 'antd';
import {LeftOutlined } from '@ant-design/icons';
const LoginKey = (props) => {
    
    const changeTab1=()=>{
        props.changeTab("login")
    }

    const changeTab2=()=>{
        props.changeTab("login")
    }

    const changeTab3=()=>{
        props.changeTab("forgotPass")
    }
    
    return (
       <>
            <LeftOutlined onClick={changeTab1}className="back"/>

            <div style={{marginTop:"30px" ,marginBottom:"60px"}}>
           <span className='title'>Đăng nhập bằng mật khẩu</span>
           </div>
           <div className='input'>
            <Input
            placeholder='Email hoặc số điện thoại'
            />
            <Input
            placeholder='Mật khẩu'
            type='password'
            />  
           </div>

           <Button>Đăng nhập</Button>
           
           <div style={{marginTop:"30px"}}>
           <a onClick={changeTab3}>Quên mật khẩu</a>
           </div>
        </>
    )
}

export default LoginKey