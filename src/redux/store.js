import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from "../../src/redux/movies"
import watcherSaga from "../sagas";
import createSagaMiddleware from "@redux-saga/core";
import movieReducer from "../../src/redux/movie"
import upcomingreducer from './upcoming'
const sagaMiddleware = createSagaMiddleware();

const store =configureStore({
    reducer:{
        movies: moviesReducer,
        movie:movieReducer,
        upcoming:upcomingreducer
    },

    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware({think:false}).prepend(sagaMiddleware)
    }
});

sagaMiddleware.run(watcherSaga);
export default store;