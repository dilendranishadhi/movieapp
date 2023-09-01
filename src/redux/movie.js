import { createSlice } from "@reduxjs/toolkit";


const initialState = {
        results:[],
        hasMore:false,
        isFetching:false
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