import { useLocation } from "react-router-dom";
import { Container,Img,StyledLink,Item,Title} from "./MovieListStyled";

export const MovieList = ({ movies }) => {
  const location = useLocation();
  const URL = `https://image.tmdb.org/t/p/w500/`;
  return (
    <Container>
      {movies.map(({ id, title, name, poster_path }) => {
        return (
          <StyledLink to={`/movies/${id}`} key={id} state={{from:location}}>
            <Item >
            <Img
              src={poster_path ? `${URL}${poster_path}` : 'Sorry,coming soon'}
              alt=""
            />
            <Title>{title || name}</Title>
            </Item>
          </StyledLink>
        );
      })}
    </Container>
  );
};
