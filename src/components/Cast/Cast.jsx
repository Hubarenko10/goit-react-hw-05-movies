import { getMovieCredits } from 'api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CastList, CastImg, CastItem } from './CastStyled';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    async function getCast() {
      try {
        const { cast } = await getMovieCredits(id);
        setCast(cast);
      } catch (error) {
        console.log('Oopps,something went wrong');
      }
    }
    getCast();
  }, [id]);
  const BASE_IMG = 'https://image.tmdb.org/t/p/w200/';
  return (
    <CastList>
      {cast && cast.length > 0
        ? cast.map(({ id, name, profile_path }) => {
        return (
          <CastItem key={id}>
            <CastImg
              src={
                profile_path
                  ? `${BASE_IMG}${profile_path}`
                  : 'https://i.imgur.com/st2SrKk_d.jpg'
              }
              alt="Actor`s name"
            />
            <p>
              <b>Name:</b> <br />
              {name}
            </p>
          </CastItem>
        );
      }): 'No info yet'}
    </CastList>
  );
};

export default Cast;
