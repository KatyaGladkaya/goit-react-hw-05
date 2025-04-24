import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const ACCESS_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDI3NDM0ZWYwY2NkNTVlN2UzYzIwOTAwZmVhYzA3YyIsIm5iZiI6MTc0NTMyMjUzMi4zNTAwMDAxLCJzdWIiOiI2ODA3ODIyNGM1YzgwMzVmYjA4YTYxNmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9Pwhcab4dCHPU-Coc8hK6ZcdgsoqmrqmOspy5oh9PiI';

const options = {
  headers: {
    Authorization: ACCESS_TOKEN,
  },
};

export const fetchTrendingMovies = async () => {
  const res = await axios.get(`${BASE_URL}/trending/movie/day`, options);
  return res.data.results;
};

export const searchMovies = async (query) => {
  const res = await axios.get(
    `${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options
  );
  return res.data.results;
};

export const getMovieDetails = async (id) => {
  const res = await axios.get(`${BASE_URL}/movie/${id}`, options);
  return res.data;
};

export const getMovieCast = async (id) => {
  const res = await axios.get(`${BASE_URL}/movie/${id}/credits`, options);
  return res.data.cast;
};

export const getMovieReviews = async (id) => {
  const res = await axios.get(`${BASE_URL}/movie/${id}/reviews`, options);
  return res.data.results;
};
