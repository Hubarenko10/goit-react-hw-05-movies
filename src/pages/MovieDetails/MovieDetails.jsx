import { getMovieDetails } from 'api';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, BoxInfo,Type,} from './MovieDetailsStyled';
import { RxDotFilled } from 'react-icons/rx';
import { Outlet } from 'react-router-dom';
import { AdditionalInfo } from 'components/AddInfo/AddInfo';

export const MovieDetails = () => {
  const { id } = useParams(); 
  const [movie, setMovie] = useState([]);
   
  useEffect(() => {
    async function getMovie() {
      try {
        const result = await getMovieDetails(id);
        setMovie(result);
      } catch (error) {
        console.log('Oops! Something went wrong!');
      }
    }
    getMovie();
  }, [id]);
  const IMG_URL = 'https://image.tmdb.org/t/p/w300/'; 
  const {title,poster_path,vote_average,overview,genres } = movie;
  const userStat = Math.round(vote_average*10);
  return(
    <div>
    <Box>
   <img src={poster_path ? `${IMG_URL}${poster_path}`:'Sorry,no poster'} alt="Movie poster" />
   <BoxInfo>
    <h2>{title}</h2>
    <p><b>User score:</b> {userStat}%</p>
    <h3>Overview</h3>
    <p>{overview }</p>
    <h3>Genres</h3>
    <p>{genres && genres.map(genre => <Type key={genre.id}>
        <RxDotFilled color='red'/> {genre.name} </Type>)}</p>
   </BoxInfo>
  </Box>

  <AdditionalInfo/>
  
  <Outlet/>
  </div>
    ) 
};


//