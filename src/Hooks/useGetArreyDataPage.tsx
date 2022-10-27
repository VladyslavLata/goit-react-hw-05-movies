import { useState, useEffect } from 'react';
import {
  IMovies,
  IMovie,
  ICrew,
  IMovieActors,
  IMovieReviews,
  IReview,
} from 'types/types';

export const useGetArreyDataPage = (
  getDataMovie: (
    param?: string
  ) => Promise<IMovies> | Promise<IMovieActors> | Promise<IMovieReviews>,
  movieParam?: string
) => {
  const [data, setData] = useState<IMovie[] | ICrew[] | IReview[]>([]);
  const [status, setStatus] = useState<
    'idle' | 'pending' | 'resolved' | 'rejected'
  >('idle');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (movieParam === '') {
      return;
    }
    const getMoviesDetails = async () => {
      setStatus('pending');
      try {
        if (typeof movieParam === 'string') {
          const response = await getDataMovie(movieParam);
          if ('crew' in response) {
            setData([...response.crew]);
          } else if ('results' in response && 'id' in response) {
            setData([...response.results]);
          } else if ('results' in response && !('id' in response)){
            setData([...response.results]);
          }
        } else if (typeof movieParam === 'undefined') {
          const response = await getDataMovie();
          if ('results' in response && 'id' in response) {
            setData([...response.results]);
        } else
          if ('results' in response) {
            setData([...response.results]);
          }
        }

        setStatus('resolved');
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
          setStatus('rejected');
        }
      }
    };

    getMoviesDetails();
  }, [
    getDataMovie,
    movieParam,
  ]);

  return [data, status, error, setData, setStatus, setError];
};
