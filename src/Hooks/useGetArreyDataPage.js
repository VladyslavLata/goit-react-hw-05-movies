import { useState, useEffect } from 'react';

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
