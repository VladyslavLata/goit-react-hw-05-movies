import { useState, useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { getTrendingMovies } from 'Api/Api';
import { GalleryMovies } from 'components/GalleryMovies/GalleryMovies';
import { MessageError } from 'components/MessageError/MessageError';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    const getMovies = async () => {
      setStatus('pending');
      try {
        const trendMovies = await getTrendingMovies();
        setMovies([...trendMovies.results]);
        setStatus('resolved');
      } catch (error) {
        setError(error);
        setStatus('rejected');
      }
    };

    getMovies();
  }, []);

  if (status === 'pending') {
    return (
      <ThreeDots color="#3f51b5" wrapperStyle={{ justifyContent: 'center' }} />
    );
  } else if (status === 'resolved' && movies.length > 0) {
    return <GalleryMovies movies={movies} />;
  } else if (status === 'rejected') {
    return <MessageError message={error.message} />;
  }
};
