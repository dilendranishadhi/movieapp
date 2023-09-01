import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUpcomingMovies,resetState } from '../redux/upcoming';
import Loader from '../components/Loader';
import UpcomingMovies from '../components/Upcoming';
const Upcoming = () => {

    const { upcoming } = useSelector((store) => store);
    console.log(upcoming);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUpcomingMovies);

        return () => {
            dispatch(resetState());
        }
    }, [dispatch]);


    return (
           
        
        upcoming.isFetching ? <Loader/> : <UpcomingMovies upcoming={upcoming}/>
        

    );
};

export default Upcoming;