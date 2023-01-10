// import { Home } from 'pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy } from "react";
import { Movie } from 'pages/Movie/Movie';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { NotFound } from 'pages/NotFound/NotFound';

import { Cast } from './Cast/Cast';
import { Review } from './Review/Review';


const Home = lazy(() => import('pages/Home/Home'));
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Review />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
