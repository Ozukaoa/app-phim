import React, { useEffect } from 'react'
import { Carousel,Button, Row, Col } from 'antd';
import{
    ExportOutlined,
    StarOutlined,
    StarFilled
} from '@ant-design/icons';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

import './MoviePlay.scss';
import MovieListing from '../MovieListing/MovieListing';
import { useDispatch } from 'react-redux';
const MoviePlay =()=>{

    const dispatch = useDispatch();
    const defaultMovie = "Dumb";
    const defaultShow = "game"
    useEffect(() => {
        dispatch(fetchAsyncMovies(defaultMovie))
        dispatch(fetchAsyncShows(defaultShow))
    }, [dispatch])

    const bxh=[
        "1   Lost Bullet",
        "2   Avengers: Infinity War",
        "3   You Should Have Left",
        "4   Feel the Beat",
        "5   Sonic the Hedgehog",
        "6   Britt-Marie Was Here",
        "7   The Invisible Man",
        


    ]

   const array=[
        {ep:1},
        {ep:2},
        {ep:3},
        {ep:4},
        {ep:5},
        {ep:6},
        {ep:7},
        {ep:8},
        {ep:9},
        {ep:10},
    ]
    return (
        <>
            <div className='playfilm'>
                <Row>
                <Col span={18}>
                <iframe width="100%" height="360" src="https://www.youtube.com/embed/gdYsRyQ6ing" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        
                <div className='function'>
                    <span> <StarOutlined /> Thêm vào yêu thích</span>
                    <span className='rotate'> <ExportOutlined/> Chia sẻ</span>
                </div>
                </Col>
                <Col span={6}>
                    <div className="right">
                       <span> Hospital Playlist</span>
                    <div className='chontap'>Chọn tập</div>
                    <div className='wrapper'>
                        {array.map((element,index) => {
                            return <div className='box'>
                               <span>{element.ep}</span> 
                                </div>
                        })}
                        
                    </div>
                    </div>
                </Col>
            </Row>
            
            </div>
            
            

            <Row>
                <Col span={18}>
                <div className='info1'>
                <div className='title'>Hospital Playlist -Tập 3</div>
                <div>
                    <span className='star'><StarFilled /></span>
                    <span className='starScore'> 9.8 </span>
                    <span className='de'>(4.9 người đã đánh giá) </span>
                    <a>&ensp;Tôi muốn đánh giá</a>
                </div>
                <div className='describe'>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.
                </div>
            </div>
            
            <div className='haileft'>
                <hr></hr>
                <div className='title'>Đề xuất cho bạn</div>
                <MovieListing/>
            </div>
            
                </Col>
                <Col span={6}>
                    <div className='hairight'>
                        <div className='bxh'>Bảng xếp hạng</div>
                        {bxh.map((value,index)=>
                            <div>{value}</div>
                        )}
                       
                    </div>
                    
                    
                </Col>
            </Row>

            
        
        </>
    )
}

export default MoviePlay