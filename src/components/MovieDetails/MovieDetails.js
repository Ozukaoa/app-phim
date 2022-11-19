import React, { useEffect } from 'react'
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



const MovieDetails = () => {



    const { imdbID } = useParams();
    // later callling after useEffect
    const dispatch = useDispatch();
    const details = useSelector(movieOrShowDetails)
    console.log(details)
    // the above part

    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowDetail(imdbID))
        return () => {
            dispatch(removeMovieOrShow())
        }
    }, [dispatch, imdbID])

    const onChange = (key) => {
        console.log(key);
      };

      const items = [
        { label: 'Chọn tập', key: 'item-1', children: (<Tab_Ep/>) }, // remember to pass the key prop
        { label: 'Xem trailer', key: 'item-2', children: <Tab_Comment/> },
        { label: 'Diễn viên', key: 'item-3', children: <Tab_Actor/> },
        { label: 'Bình luận', key: 'item-4', children: <Tab_Comment/> },
      ];

    const movie={
        background_image:"../../images/background-film/image1.png",
        nameMovie:"I told sunset about you",
        starScore: 9.8,
        category:["Thái Lan","Tình bạn"],
        describe:"(I Told Sunset About You) kể về câu chuyện của Teh (Billkin Putthipong Assaratanakul) và Oh-aew (PP Krit Amnuaydechkorn), họ đã từng là bạn thân trong quá khứ, cho đến khi một sự việc đã biến họ thành đối thủ của nhau....",
        year:"2020",
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