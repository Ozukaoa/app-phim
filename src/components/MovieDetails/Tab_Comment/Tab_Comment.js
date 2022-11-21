import React, { useEffect, useState } from 'react';
import img from '../../../images/film/One Piece.png'
import {GithubOutlined} from '@ant-design/icons';
import './Tab_Comment.scss';
import { Button, Col, Input, Row } from 'antd';
import Comment1 from './Comment1';
import axios from 'axios';

const Tab_Comment=(props)=>{

    const [listComment,setListComment] =useState([])
    const [listUser,setListUser] = useState([])
    const [postComment,setPostComment] = useState("")
    const onChange = (e) => {
        console.log('Change:', e.target.value);
        setPostComment(e.target.value)
      };
    useEffect(()=>{
        axios.get(`http://localhost:3003/apis/comment/getallofone/${props.data}`)
        .then(response=>{
            console.log(response,"comment")
            setListComment(response.data)
        })


    },[postComment])

    const handlePost =()=>{
        let data={
            idKhachHang:localStorage.getItem("infoUser"),
            idPhim:props.data,
            binhLuan:postComment,
        }

        axios.post("http://localhost:3003/apis/comment/add", data)
            .then(response=>{
                console.log("tt")
                setPostComment("")
            })
    }

    return (
       <div className='tab_comment'>
        <div className='bl'>Bình luận <span className='bl1'>20</span></div>
        <hr style={{
         width:"100%", alignItems:"center",marginBottom:"10px",marginTop:"10px"
                    }}></hr>
        <Input className='input_1' 
                placeholder='Viết bình luận' 
                onChange={onChange}></Input>
        
        <Button className='but' onClick={handlePost} disabled={!localStorage.getItem("infoUser")}>Gửi</Button>
        

        <hr style={{
         width:"100%", alignItems:"center",marginBottom:"10px",marginTop:"10px"
                    }}></hr>

        <div>
            {listComment.map((val,index)=>
                <Comment1 data={val} key={index}/>
            )}
        </div>
        
        
        
       </div>
    )
    
    
}
export default Tab_Comment