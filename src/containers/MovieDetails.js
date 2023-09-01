import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMovie, resetState } from '../redux/movie';
import Loader from '../components/Loader';
import store from '../redux/store';
import Movie from '../components/Movie';
const MovieDetails = () => {

    const dispatch = useDispatch();
    const {id} = useParams();
    const{movie}= useSelector((store)=> store);

    useEffect(()=>{
        dispatch(getMovie(id? parseInt(id,10) : 0));
        return()=>{
            dispatch(resetState());
        }
    },[dispatch]);

    return (
        
           movie.isFetching ? <Loader/> : <Movie movie={movie}/>
        
    );
};

export default MovieDetails;