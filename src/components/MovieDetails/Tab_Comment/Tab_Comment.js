import React from 'react';
import img from '../../../images/film/One Piece.png'
import {GithubOutlined} from '@ant-design/icons';
import './Tab_Comment.scss';
import { Button, Col, Input, Row } from 'antd';
import Comment1 from './Comment1';

const Tab_Comment=()=>{


    return (
       <div className='tab_comment'>
        <div className='bl'>Bình luận <span className='bl1'>20</span></div>
        <hr style={{
         width:"100%", alignItems:"center",marginBottom:"10px",marginTop:"10px"
                    }}></hr>
        <Input className='input_1' placeholder='Viết bình luận'></Input>
        
        <Button className='but'>Gửi</Button>
        

        <hr style={{
         width:"100%", alignItems:"center",marginBottom:"10px",marginTop:"10px"
                    }}></hr>

        <div>
            <Comment1/>
            <Comment1/>
        </div>
        
        
        
       </div>
    )
    
    
}
export default Tab_Comment