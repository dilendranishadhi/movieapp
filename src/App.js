import { BrowserRouter, Route, Routes } from "react-router-dom";
import TrendingMovies from './containers/TrendingMovies';
import MovieDetails from './containers/MovieDetails';
import Layout from './components/Layout';
import '../src/navlink.css'
import Upcoming from './containers/UpcomingMovie';
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
