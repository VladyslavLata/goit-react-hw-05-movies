import React from 'react';
import { Loader } from 'components/Loader/Loader';
import { getTrendingMovies } from 'Api/Api';
import { GalleryMovies } from 'components/GalleryMovies/GalleryMovies';
import { Message } from 'components/Message/Message';
import { useGetArreyDataPage } from 'Hooks/useGetArreyDataPage';
import { IMovie } from 'types/types';

export const Home = () => {
  const [movies, status, error] = useGetArreyDataPage(
    getTrendingMovies
  );

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && movies.length > 0 && (
        <GalleryMovies movies={movies as IMovie[]} />
      )}
      {status === 'rejected' && <Message message={error as string} />}
    </>
  );

};
