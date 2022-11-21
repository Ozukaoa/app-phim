import React, { useEffect, useState } from 'react'
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
import axios from 'axios';
const MoviePlay =(props)=>{

    const [dataFilm,setDataFilm] = useState({})

    const dispatch = useDispatch();
    const defaultMovie = "Dumb";
    const defaultShow = "game"
    useEffect(() => {
        console.log(props.match.params.id
            )
        dispatch(fetchAsyncMovies(defaultMovie))
        dispatch(fetchAsyncShows(defaultShow))
    }, [dispatch])


    useEffect(()=>{
        axios.get(`http://localhost:3003/apis/film/show/id/${props.match.params.id}`)
        .then(response=>{
            console.log(response,"111")
            setDataFilm(response.data)
        })
    },[])
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
                       <span> {dataFilm.tenPhim}</span>
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
                <div className='title'>{dataFilm.tenPhim}</div>
                <div>
                    <span className='star'><StarFilled /></span>
                    <span className='starScore'> {dataFilm.danhGiaPhim} </span>
                    <span className='de'>(4.9 người đã đánh giá) </span>
                    <a>&ensp;Tôi muốn đánh giá</a>
                </div>
                <div className='describe'>
                        {dataFilm.moTa}
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