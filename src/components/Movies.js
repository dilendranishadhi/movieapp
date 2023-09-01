import React from 'react';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { Link } from 'react-router-dom';
import { IMAGES_PATH } from '../config';
import styled from '@emotion/styled';


const ImgStyled = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover'
})
const Movies = ({ movies }) => {
    return (
        <div>
            <ImageList cols={5} rowHeight={365} gap={12}>
                {
                    movies.results.map((movie) => (
                        <ImageListItem key={movie.id}>
                            <Link to={`/movie/${movie.id}`}>
                                {
                                    movie.poster_path && (
                                        <ImgStyled src={`${IMAGES_PATH}/w300${movie.poster_path}`}
                                            alt={movie.title}
                                        />
                                    )
                                }
                                <ImageListItemBar title={movie.title} />
                            </Link>


                        </ImageListItem>
                    ))
                }

            </ImageList>
        </div>
    );
};

export default Movies;