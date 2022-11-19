import React from 'react'
import './CarouselFilm.scss';

import { Carousel,Button, Row, Col } from 'antd';
import background_img from '../../images/background-film/image1.png';
import favourite from'../../images/logo/favourite.png'
import play from'../../images/logo/play.png'
import {ArrowRightOutlined,
        ArrowLeftOutlined,
        LeftOutlined,
        RightOutlined,
        PlayCircleFilled,
        StarFilled,
      } from '@ant-design/icons';
import InfoFilm from './InfoFilm';
const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const CarouselFilm = () => {

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

   

    const onChange = (currentSlide) => {
      console.log(currentSlide);
    };

    return (
      <Carousel arrows 
      className='carousel-custom'
        // className='arrow1'
        // afterChange={onChange} arrows
        // nextArrow={<ArrowRightOutlined/>} 
        // prevArrow={<ArrowLeftOutlined/>}
        >
      
      {listFilm.map((value,index)=>{
        return (
            <div key={index}>
              <img src={value?.background_image} 
              style={{
                objectFit:"cover",
                position:"",
                height:"100%",
                width:"100%",

           }}>

            
           </img>
           <div style={{
            position: "relative",
                right: "-60px",
                top:"-280px"}}>
           <InfoFilm
            data={value}
           />
           </div>
           
           {/* <div className='info' style={{position:"relative",float:"left",right:"-50px",top:"-280px"}}>
              <div>
              <span className='text'><StarFilled /> {value.starScore}</span>
              <span className='mg-1'>|</span>
              <span className='mg'>{value.year}</span>
              <span className='mg-1'>|</span>
              <span className='mg'>{value.quantityEp} Tập</span>
              </div>
            <div>
              {value.category.map((val,index)=>{
                return <Button className='Button-cate'>
                  {val}
                </Button>
              })}
          
            </div>
            <div className='describe'>
                {value.describe}
            </div>
            <div>
        
          <span className='img' onClick={{}}><img src={play} ></img></span>

           <span className='img' onClick={{}}><img src={favourite} ></img></span>
           </div>
          
            
            
          
           </div> */}
            </div>
        )
      })}
      
     
    </Carousel>
       
    )
}

export default CarouselFilm


    
