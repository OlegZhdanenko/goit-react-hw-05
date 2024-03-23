import axios from "axios";


axios.defaults.baseURL="https://api.themoviedb.org/3"
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWU2NWRiY2YzNjNhOTk3NTY3ZGYwMGI2MDY1ODYwNyIsInN1YiI6IjY1ZjljNGYxYjg0Y2RkMDE2MzZjMzM3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0pYB4JnvnmKiAiv5ppybPTbTVbpvskVW7v2kiQwKvnI",
  },
};
export const getMovie = async () => {
  const {data} = await axios.get("/trending/movie/day", options)
  return data.results;
};
export const getMoviebyId = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}`, options)
  return data;
};

export const getMovieCast = async (movieId) => {
  const  {data}  = await axios.get(`/movie/${movieId}/credits`,options)
  return data.cast;
};
export const getMovieReview = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`,options)
  return data.results;
}
export const getSearchFilm = async (filmSearch) => {
  const { data } = await axios.get(`/search/movie?query=${filmSearch}`,options)
  return data.results;
}