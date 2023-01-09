import { Home } from "pages/Home/Home";
import { Movie } from "pages/Movie/Movie";
import { MovieDetails} from "pages/MovieDetails/MovieDetails";
import { NotFound } from "pages/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";   
import { Container, Header, Link } from "./AppStyled";
import { Cast } from "./Cast/Cast";
import { Review } from "./Review/Review";


export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
       
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<Movie/>} />
        <Route path="/movies/:id" element={<MovieDetails />}>
        <Route path="cast" element={<Cast/>}/>
        <Route path="review" element={<Review/>}/>
        </Route>
        <Route path="*" element ={<NotFound/>}/>
      </Routes>
    </Container>
   
  );
};
