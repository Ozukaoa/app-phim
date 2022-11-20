import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';
import { settings } from '../../common/setting.js';

import Slider from "react-slick";
import axios from 'axios';

const MovieListing = () => {

    const [dataHome,setDataHome] =useState([])
    

    useEffect(()=>{
        axios.get("http://localhost:3003/apis/homePage")
        .then(response=>{
            console.log(response,"111")
            setDataHome(response.data)
        })
    },[])

    // for movies
    const movies = useSelector(getAllMovies)

    let renderMovies = movies.Response;
    // for shows
    const shows = useSelector(getAllShows)
    let renderShows = shows.Response;

    return (
        <div className='movie-wrapper'>
            <div className="movie-list">
                <h2>Movies</h2>

                <div className='movie-container'>
                    <Slider {...settings}>
                        {renderMovies === "True" ? dataHome["phimDanhGiaCao"]?.map((movie, index) => {
                            return < MovieCard key={index} data={movie} />
                        }) : <div className='movies-error' ><h2>{movies.Error}</h2></div>}
                    </Slider>
                </div>

            </div>
            <div className="movie-list">
                <h2>Shows</h2>
                <div className='movie-container'>
                    <Slider {...settings}>
                        {renderShows === "True" ? shows.Search.map((show, index) => {
                            return < MovieCard key={index} data={show} />
                        }) : <div className='movies-error' ><h2>{movies.Error}</h2></div>}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default MovieListing