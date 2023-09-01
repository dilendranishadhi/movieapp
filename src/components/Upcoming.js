import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Typography } from '@mui/material';
const UpcomingMovies = ({ upcoming }) => {

    return (
        <div>
            <Typography component="h1" variant="h4" gutterBottom={true}> Upcoming Movies</Typography>
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
