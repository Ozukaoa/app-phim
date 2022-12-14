import React from 'react'
import '../CarouselFilm/CarouselFilm.scss';

import { Carousel,Button, Row, Col } from 'antd';
import background_img from '../../images/background-film/image1.png';
import favourite from'../../images/logo/favourite.png'
import play from'../../images/logo/play.png'
import {
        StarFilled,
      } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const InfoFilm = (props) => {

  const contentStyle = {
    // height: '80%',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79'
  }
  
  // from https://react-slick.neostack.com/docs/example/custom-arrows
  
    const listFilm =[
        {
            background_image:background_img,
            nameMovie:"I told sunset about you",
            starScore: 9.8,
            category:["Thái Lan","Tình bạn"],
            describe:"(I Told Sunset About You) kể về câu chuyện của Teh (Billkin Putthipong Assaratanakul) và Oh-aew (PP Krit Amnuaydechkorn), họ đã từng là bạn thân trong quá khứ, cho đến khi một sự việc đã biến họ thành đối thủ của nhau....",
            year:"2020",
            quantityEp:10,
        },
        {
          background_image:background_img,
          nameMovie:"I told sunset about you",
          starScore: 9.8,
          category:["Thái Lan","Tình bạn"],
          describe:"(I Told Sunset About You) kể về câu chuyện của Teh (Billkin Putthipong Assaratanakul) và Oh-aew (PP Krit Amnuaydechkorn), họ đã từng là bạn thân trong quá khứ, cho đến khi một sự việc đã biến họ thành đối thủ của nhau....",
          year:"2020",
          quantityEp:10,
         },
        {
            background_image:background_img,
            nameMovie:"I told sunset about you",
            starScore: 9.8,
            category:["Thái Lan","Tình bạn","Học đương"],
            describe:"(I Told Sunset About You) kể về câu chuyện của Teh (Billkin Putthipong Assaratanakul) và Oh-aew (PP Krit Amnuaydechkorn), họ đã từng là bạn thân trong quá khứ, cho đến khi một sự việc đã biến họ thành đối thủ của nhau....",
            year:"2020",
            quantityEp:10,
        },
        {
          background_image:background_img,
          nameMovie:"I told sunset about you",
          starScore: 9.8,
          category:["Thái Lan","Tình bạn"],
          describe:"(I Told Sunset About You) kể về câu chuyện của Teh (Billkin Putthipong Assaratanakul) và Oh-aew (PP Krit Amnuaydechkorn), họ đã từng là bạn thân trong quá khứ, cho đến khi một sự việc đã biến họ thành đối thủ của nhau....",
          year:"2020",
          quantityEp:10,
      }
    ]

   

  

    return (
      
      
      
        
         
             
           <div className='info' style={{position:"relative",float:"left",
        //    right:"-50px",top:"-280px"
           }}>
              <div>
              <span className='text'><StarFilled /> {props.data.starScore}</span>
              <span className='mg-1'>|</span>
              <span className='mg'>{props.data.year}</span>
              <span className='mg-1'>|</span>
              <span className='mg'>{props.data.quantityEp} Tập</span>
              </div>
            <div>
              {props.data?.category?.map((val,index)=>{
                return <Button className='Button-cate'>
                  {val}
                </Button>
              })}
          
            </div>
            <div className='describe'>
                {props.data.describe}
            </div>
            <div>
            <Link to={`/movie/2/play`}>
          <span className='img' onClick={{}}><img src={play} ></img></span>
              </Link>
           <span className='img' onClick={{}}><img src={favourite} ></img></span>
           </div>
          
            
            
          
           </div>
           
        
      
     

       
    )
}

export default InfoFilm


    
