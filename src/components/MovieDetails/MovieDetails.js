import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchAsyncMovieOrShowDetail } from '../../features/movies/movieSlice'
import { useSelector } from 'react-redux'
import { movieOrShowDetails } from '../../features/movies/movieSlice'
import './MovieDetails.scss';
import background_img from '../../images/background-film/image1.png';

import { removeMovieOrShow } from '../../features/movies/movieSlice'
import Spinner from '../Spinner/Spinner';
import InfoFilm from '../CarouselFilm/InfoFilm'
import { Button, Col, Row,Table,Tabs  } from 'antd'
import Tab_Ep from './Tab_Ep/Tab_Ep'
import Tab_Actor from './Tab_Actors/Tab_Actor'
import Tab_Comment from './Tab_Comment/Tab_Comment'
import axios from 'axios'



const MovieDetails = () => {

    const [dataFilm,setDataFilm] = useState({})

    const { imdbID } = useParams();
    // later callling after useEffect
    const dispatch = useDispatch();
    const details = useSelector(movieOrShowDetails)
    console.log(details)
    // the above part

    useEffect(() => {
        
        console.log(imdbID)
        dispatch(fetchAsyncMovieOrShowDetail(imdbID))
        return () => {
            dispatch(removeMovieOrShow())
        }
    }, [dispatch, imdbID])

    useEffect(()=>{
        axios.get(`http://localhost:3003/apis/film/show/id/${imdbID}`)
        .then(response=>{
            console.log(response,"111")
            setDataFilm(response.data)
        })
    },[])

    const onChange = (key) => {
        console.log(key);
      };

      const items = [
        { label: 'Chọn tập', key: 'item-1', children: (<Tab_Ep/>) }, // remember to pass the key prop
        { label: 'Xem trailer', key: 'item-2', children: <Tab_Comment/> },
        { label: 'Diễn viên', key: 'item-3', children: <Tab_Actor data={dataFilm?.dienVien}/> },
        { label: 'Bình luận', key: 'item-4', children: <Tab_Comment/> },
      ];

    const movie={
        background_image:"../../images/background-film/image1.png",
        nameMovie:dataFilm?.tenPhim,
        starScore: dataFilm?.danhGiaPhim,
        category:dataFilm?.theLoai,
        describe: dataFilm?.moTa,
        year:dataFilm?.ngayChieu?.slice(0,4),
        quantityEp:10,
    }
      
      

    return (
        <>
        <div className='movie-section'>

             
                
                    <Row gutter={16}>
                        
                        <Col span={10}>
                            <div>
                            <div style={{
                                fontSize:"33px",
                                fontWeight:"600",
                                marginBottom:"5%",
                                marginLeft:"10%"

                            }}>{movie.nameMovie}</div>
                            <InfoFilm
                            data={movie}
                            />
                           </div>
                        </Col>

                        
                        
                        <Col span={12}>
                         
                        <img style={{
                            width:"100% ",
                            float:"right",
                            marginTop: ""

                        }} 
                            src={background_img}></img>
                        </Col>
                    </Row>
            
                      
               
                
                 

        </div>
        <div className='tab-custom'><Tabs items={items} /> </div>
        </>
    )
}

export default MovieDetails