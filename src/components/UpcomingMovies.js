import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import axios from 'axios';
import { Grid, Typography } from '@mui/material';
import { IMAGES_PATH } from '../config';
import { styled } from "@mui/system";
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { getUpcomingMovies } from '../redux/upcoming';
import { Link } from 'react-router-dom';

const ImgStyled = styled('img')({
    width: '100%',

})
const UpcomingMovies = ({ upcoming }) => {


    return (
        <div>
            <h1>Upcoming Movies</h1>
            <Carousel autoPlay={true} interval={3000} infiniteLoop={true}>
                {upcoming.results.map((movie) => (
                    <div key={movie.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <p>{movie.title}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default UpcomingMovies;
