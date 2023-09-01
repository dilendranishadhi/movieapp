import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from '../redux/store';
import { getTrendingMovies, resetState } from '../redux/movies';
import Loader from '../components/Loader';
import Movies from '../components/Movies';
import { Typography } from '@mui/material';
import InfiniteScroll from "react-infinite-scroll-component"

const TrendingMovies = () => {

    const { movies } = useSelector((store) => store);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTrendingMovies);

        return () => {
            dispatch(resetState());
        }
    }, [dispatch]);

    const loadMore = () => {
        if (movies.hasMore) {
            dispatch(getTrendingMovies(movies.page + 1));
        }
    }
    return movies.page === 0 && movies.isFetching ? <Loader />
        : <>
            <Typography component="h1" variant="h4" gutterBottom={true}> Trending Movies</Typography>
            <InfiniteScroll
                dataLength={movies.totalResults}
                next={loadMore}
                hasMore={movies.hasMore}
                loader={<Loader />}
                style={{ overflow: 'hidden' }}
            >
                <Movies movies={movies} />
            </InfiniteScroll>
        </>

};

export default TrendingMovies;