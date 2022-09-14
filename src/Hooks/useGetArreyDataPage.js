import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const useGetArreyDataPage = (
  getDataMovie,
  dataMovieProp,
  movieParam
) => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    if (movieParam === '') {
      return;
    }
    const getMoviesDetails = async () => {
      setStatus('pending');
      try {
        const response = await getDataMovie(movieParam);
        setData([...response[dataMovieProp]]);

        setStatus('resolved');
      } catch (error) {
        setError(error);
        setStatus('rejected');
      }
    };

    getMoviesDetails();
  }, [getDataMovie, movieParam, dataMovieProp]);

  return [data, status, error, setData, setStatus, setError];
};

useGetArreyDataPage.propTypes = {
  getDataMovie: PropTypes.func.isRequired,
  dataMovieProp: PropTypes.string.isRequired,
  movieParam: PropTypes.any,
};
