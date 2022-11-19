import React from 'react';
import img from '../../../images/film/One Piece.png'
import {GithubOutlined} from '@ant-design/icons';
import './Tab_Actor.scss';
import { Col, Row } from 'antd';
import MovieCard from '../../MovieCard/MovieCard';

const Tab_Actor=()=>{

    const listactors=[
        {image:img
            
        },
        {image:img
            
        },
        // {image:img
            
        // },
    ]

    return (
        <div className='tab_act'>
    {listactors.map((value,index)=>{
        return (
            <div className='actor' key={index}>
                <Row>
                    <Col span={8}><GithubOutlined /></Col>
                    <Col span={16}>
                        <div className='name'> Peter Quill</div>
                        <div className='dv'>Diễn viên</div>
                    </Col>
                </Row>
                <hr style={{
                    width:"100%", alignItems:"center",marginBottom:"10px",marginTop:"10px"
                    }}></hr>
                <Row>
                    <Col span={12} className='film'>
                        <MovieCard detail={true}/>
                        </Col>
                    <Col span={12} className='film'>
                         <MovieCard detail={true}/>
                        </Col>
                   
                </Row>
            </div>
        )
    })}
</div>
    )
    
    
}
export default Tab_Actor