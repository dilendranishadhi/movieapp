import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TrendingMovies from './containers/TrendingMovies';
import MovieDetails from './containers/MovieDetails';
import Layout from './components/Layout';
import UpcomingMovies from './components/UpcomingMovies'
import '../src/navstyle.css'
import Upcoming from './containers/Upcoming';
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<TrendingMovies />}></Route>
          <Route path='/movie/:id' element={<MovieDetails />}></Route>
          <Route path='/upcomingmovies' element={<Upcoming />}></Route>


        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
