import axios from "axios";

axios.defaults.baseURL="https://api.themoviedb.org/";
const API_KEY = "1222ad49372cbb365a0e9b84c00590f8";

export const getTrendMovie = async () => {
const res = await axios.get(`/3/trending/all/day?api_key=${API_KEY}`)
return res.data;
}

export const searchMovie = async () => {
const res = await axios.get(`/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`);
return res.data;
}

export const getMovieDetails = async(id) => {
const res = await axios.get(`/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
return res.data;
}

export const getMovieCredits = async(id) => {
const res = await axios.get(`/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
return res.data
}

export const getMovieReviews = async(id) => {
const res = await axios.get(`/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
return res.data;
}