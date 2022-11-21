import React, { useState } from 'react'
import './MovieCard.scss';
import { Link } from 'react-router-dom';
import {StarFilled,StarOutlined } from '@ant-design/icons';
import img from '../../images/film/One Piece.png'
const MovieCard = ({ data },props) => {

    const [star,getStar] = useState(0)
    const onStar=()=>{
        getStar(1)
    }
    const offStar=()=>{
        getStar(0)
    }
    return (
        <div className='card-item'>
            <Link to={`/movie/${data?.idPhim}`}>
                <div className="card-inner">
                    <div className="card-top">
                        <img src={
                            data?.duongDanAnh??
                            // data.Poster
                            img
                        } alt={data?.Title} />
                        {star===1?<StarFilled onClick={offStar}/>:
                        <StarOutlined onClick={onStar}/>}
                    </div>
                    {!props.detail&&<div className="card-bottom">
                        <div className="card-info">
                            <h3>{data?.tenPhim}</h3>
                            {/* <p>{data?.Year}</p> */}
                        </div>
                    </div>}
                </div>
            </Link>
        </div>
    )
}

export default MovieCard