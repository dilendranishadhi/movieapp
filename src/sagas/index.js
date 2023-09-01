import {delay,all,call,put,takeEvery,takeLatest} from 'redux-saga/effects';
import { API_KEY } from '../config';
import MovieDbApi from '../lib/api';
import { getTrendingMovies, fetchTrendingMovies } from '../redux/movies';
import { getMovie, fetchMovie } from '../redux/movie';
import { getUpcomingMovies,fetchUpMovie } from '../redux/upcoming';
const api = new MovieDbApi(API_KEY)

function* fetchedTrendingMovies(action){
    yield delay (500);
    yield put (
        fetchTrendingMovies(yield call(api.getTrendingMovies, action.payload))
    );
}
function* fetchedmovie(action){
    yield put (
        fetchMovie(yield call(api.getMovie, action.payload))
    );
}

function* fetchedUpMovies(action){
    yield delay (500);
    yield put (
        fetchUpMovie(yield call(api.getUpcomingMovies, action.payload))
    );
}

export default function* watcherSaga(){
    yield all([
        yield takeEvery(getTrendingMovies.type, fetchedTrendingMovies),
        yield takeEvery(getMovie.type, fetchedmovie),
        yield takeEvery(getUpcomingMovies.type, fetchedUpMovies),


    ])
}