import { Home } from "pages/Home/Home";
import { Movie } from "pages/Movie/Movie";
import { NotFound } from "pages/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";   
import { Container, Header, Link } from "./AppStyled";


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
        <Route path="*" element ={<NotFound/>}/>
      </Routes>
    </Container>
   
  );
};
