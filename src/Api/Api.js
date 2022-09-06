import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const params = {
    params: {
      api_key: 'c3bf1190c2b2adf3cc1d3c6cece5bec3',
    },
  };

  const response = await axios.get('/trending/movie/day', params);

  return response.data;
};
