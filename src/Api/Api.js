import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = 'c3bf1190c2b2adf3cc1d3c6cece5bec3';
const params = {
  params: {
    api_key: API_KEY,
  },
};

export const getTrendingMovies = async () => {
  const response = await axios.get('/trending/movie/day', params);
  return response.data;
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}`, params);
  return response.data;
};

export const getCast = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits`, params);
  return response.data;
};

export const getReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews`, params);
  return response.data;
};

export const getMovies = async movie => {
  const params = {
    params: {
      api_key: API_KEY,
      query: movie,
    },
  };

  const response = await axios.get(`/search/movie`, params);
  return response.data;
};
