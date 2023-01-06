import {searchMovie} from "api";
import { MovieList } from "components/MoviesList/MovieList";
import { Search } from "components/Search/Search";
import { useState,useEffect } from "react";
import { useSearchParams } from "react-router-dom";

 
export const Movie = () => {
const [searchParams,setSearchParams] = useSearchParams();
const [searchFilm,setSearchFilm] = useState('') ;
const query = searchParams.get('query');
useEffect(() => {
    if(!query){
    return;
    }
    async function getFilm(){
        try {
        const {results} = await searchMovie(query);
        results.length > 0 && setSearchFilm(results)
        } catch (error) {
            console.log('Ooops,something went wrong');
        }
    }
    getFilm();
},[query])

const changeSubmit = query =>{
    setSearchParams({query: query})
    ;}
return(<>
<Search onSubmit = {changeSubmit}/>
{searchFilm && <MovieList movies={searchFilm}/>}
</>)

}