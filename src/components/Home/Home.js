import React, { useEffect } from 'react'

import MovieListing from '../MovieListing/MovieListing';

import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import CarouselFilm from '../CarouselFilm/CarouselFilm';
import axios from 'axios';




const Home = () => {
    const dispatch = useDispatch();
    const defaultMovie = "Dumb";
    const defaultShow = "game";
    const dataHomePage =()=> axios.get("http://localhost:3003/apis/homePage")
        .then(response=>{
            console.log(response,"111")
        })
    useEffect(() => {
        dispatch(fetchAsyncMovies(defaultMovie))
        dispatch(fetchAsyncShows(defaultShow))
        dataHomePage()
    }, [])

    return (
        <div className='home'>
            <CarouselFilm/>
            <div className='banner-img'>
                
                <MovieListing />
            </div>
        </div>
    )
}

export default Home