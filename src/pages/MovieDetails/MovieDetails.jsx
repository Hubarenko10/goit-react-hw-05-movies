import { getMovieDetails } from 'api';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { id } = useParams(); 
  const [movie, setMovie] = useState([]);
    
  useEffect(() => {
    async function getMovie() {
      try {
        const result = await getMovieDetails(id);
        setMovie(result);
      } catch (error) {
        console.log('Oops! Something went wrong! Please try again.');
      }
    }
    getMovie();
  }, [id]);
  
  return(
    <div>
   <button>Hello</button>
  </div>
    ) 
};


