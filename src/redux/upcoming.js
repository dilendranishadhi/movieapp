import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    results: [],
    isFetching: false,
    currentMovieIndex: 0, 
};

const upMovieSlice = createSlice({
    name: 'upMovieSlice',
    initialState,
    reducers: {
        getUpcomingMovies: (state) => {
            return {
                ...state,
                isFetching: true,
            };
        },
        fetchUpMovie: (state, action) => {
            return {
                ...state,
                results: [...state.results, ...action.payload.results],
                hasMore: action.payload.page < action.payload.total_pages,
                isFetching: false,
            };
        },
        resetState: (state) => {
            return initialState;
        },

        updateCurrentMovieIndex: (state, action) => {
            return {
                ...state,
                currentMovieIndex: action.payload,
            };
        },
    },
});

export const { getUpcomingMovies, fetchUpMovie, resetState, updateCurrentMovieIndex, } = upMovieSlice.actions;

export default upMovieSlice.reducer;
