import { useState, useEffect } from 'react';
import { IMovieDetails } from 'types/types';

export const useGetObjDataPage = (
  getDataMovie: (id: string) => Promise<IMovieDetails>,
  movieParam: string | undefined
) => {
  const [data, setData] = useState<IMovieDetails | null>(null);
  const [status, setStatus] = useState<
    'idle' | 'pending' | 'resolved' | 'rejected'
  >('idle');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const getMoviesDetails = async () => {
      setStatus('pending');
      try {
        if (typeof movieParam === 'string') {
          const response = await getDataMovie(movieParam);
          setData({ ...response });
          setStatus('resolved');
        } else if (typeof movieParam === 'undefined') {
        throw new Error ("Unknown error")
        }
      } catch (error) {
        if (error instanceof Error) setError(error.message);
        setStatus('rejected');
      }
    };

    getMoviesDetails();
  }, [getDataMovie, movieParam]);

  return [data , status, error, setData, setStatus, setError];
};
