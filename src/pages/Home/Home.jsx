import { Title } from './HomeStyled';
import { useState } from 'react';
import { getTrendMovie } from 'api';
import { useEffect } from 'react';
import { MovieList } from 'components/MoviesList/MovieList';
const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const { results } = await getTrendMovie();
        setMovies(results);
      } catch (error) {
        console.error('Ooops,something went wrong');
      }
    }
    getMovies();
  }, []);

  return (
    <div>
      <Title>Trending today</Title>
      <MovieList movies={movies} />
    </div>
  );
};
export default Home;
