import { useState, useEffect } from 'react';
import { IMovies, IMovie, ICrew, IMovieActors } from 'types/types';

export const useGetArreyDataPage = (
  getDataMovie: (param?: string) => IMovies | IMovieActors,
  // dataMovieProp: 'results' | 'crew',
  movieParam?: string
) => {
  const [data , setData] = useState<IMovie[] | ICrew[]>([]);
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
          }
          if ('results' in response) {
            setData([...response.results]);
          }
        } else if (typeof movieParam === 'undefined') {
          const response = await getDataMovie();
          if ('results' in response) {
            setData([...response.results]);
          }
        }

        setStatus('resolved');
      } catch (error) {
        //  const response = await getDataMovie(movieParam);
        // if ('results' in response) {
        //   setData([...response.results]);
        // } else if ('crew' in response)
        // { setData([...response.crew]) };
        // setStatus('resolved');

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
    // dataMovieProp
  ]);

  return [data, status, error, setData, setStatus, setError];
};
