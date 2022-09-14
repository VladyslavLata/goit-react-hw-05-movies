import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const useGetObjDataPage = (getDataMovie, movieParam) => {
  const [data, setData] = useState({});
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    const getMoviesDetails = async () => {
      setStatus('pending');
      try {
        const response = await getDataMovie(movieParam);
        setData({ ...response });

        setStatus('resolved');
      } catch (error) {
        setError(error);
        setStatus('rejected');
      }
    };

    getMoviesDetails();
  }, [getDataMovie, movieParam]);

  return [data, status, error, setData, setStatus, setError];
};

useGetObjDataPage.propTypes = {
  getDataMovie: PropTypes.func.isRequired,
  movieParam: PropTypes.any.isRequired,
};
