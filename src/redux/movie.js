import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    recommendations: {
        results:[],
        hasMore:false,
        totalResults:0,
        page:0,
        totalPages:0,
        isFetching:false
    }


};

 const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers:{
        getMovie:(state)=>{
            return{
                ...state,
                isFetching:true
            }

        },
        fetchMovie:(state, action)=>{
            return{
            ...state,
            ...action.payload,
            isFetching:false
        }

        },
        resetState:(state)=>{
            return initialState;
        },

    }
})
export const {getMovie,fetchMovie,resetState} = movieSlice.actions;
export default movieSlice.reducer;