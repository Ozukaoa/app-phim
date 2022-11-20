import React, { useEffect, useState } from 'react'
import './Home.scss';
import MovieListing from '../MovieListing/MovieListing';

import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import CarouselFilm from '../CarouselFilm/CarouselFilm';
import axios from 'axios';




const Search = () => {
   
    const [dataSearch,setDataSearch] =useState([])
    const [image,setImage] =useState([])
    useEffect(()=>{
        axios.get(`http://localhost:3003/apis/film/search/name/${localStorage.getItem("search")}`)
        .then(response=>{
            setDataSearch(response.data)
        })
    },[localStorage.getItem("search")])
  
    useEffect(()=>{
        axios.get(`http://localhost:3003/apis/film/show`)
        .then(response=>{
            setImage(response.data)
        })
    },[])

    return (
        <div className='searchPage'>
            <h2>Dựa theo từ khóa "{localStorage.getItem("search")} " bạn nhập, Doom đã giúp bạn tìm thấy các kết quả tìm kiếm sau đây</h2>
            {dataSearch.map((value,index)=>{
                return (
                    <div>
                        {value.tenPhim}
                    </div>
                )
            }
                
            )}
        </div>
    )
}

export default Search