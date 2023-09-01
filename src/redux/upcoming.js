import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    results: [],
    isFetching:false
  };


  const upMovieSlice = createSlice({
    name: 'upMovieSlice',
    initialState,
    reducers:{
        getUpcomingMovies:(state)=>{
            return{
                ...state,
                isFetching:true
            }

        },
        fetchUpMovie:(state, action)=>{
            return {
                ...state,
                results: [...state.results, ...action.payload.results],
                hasMore: action.payload.page < action.payload.total_pages,
                totalResults: action.payload.total_results,
                page:action.payload.page,
                totalPages: action.payload.totalPages,
                isFetching: false
            };

        },
        resetState:(state)=>{
            return initialState;
        },

    }
})

export const { getUpcomingMovies, fetchUpMovie, resetState } = upMovieSlice.actions;
export default upMovieSlice.reducer; 