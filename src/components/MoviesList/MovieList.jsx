
import { Container,Img,StyledLink,Item,Title} from "./MovieListStyled";

const URL = `https://image.tmdb.org/t/p/w500/`;

export const MovieList = ({ movies }) => {
  return (
    <Container>
      {movies.map(({ id, title, name, poster_path }) => {
        return (
          <StyledLink to={`/movies/${id}`} key={id}>
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
