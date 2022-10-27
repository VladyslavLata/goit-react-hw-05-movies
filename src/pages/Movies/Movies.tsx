import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { getMovies } from 'Api/Api';
import { Message } from 'components/Message/Message';
import { GalleryMovies } from 'components/GalleryMovies/GalleryMovies';
import { SearchPanel } from '../../components/SearchPanel/SearchPanel';
import { useGetArreyDataPage } from 'Hooks/useGetArreyDataPage';
import { IMovie } from 'types/types';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramMovie = searchParams.get('movie') ?? '';
  const [movies, status, error] = useGetArreyDataPage(
    getMovies,
    // 'results',
    paramMovie
  );

  const noMoviesMessage = `There are no movies matching your search "${paramMovie}".`;

  const updateQueryString = (movie:string) => {
    const nextMovie: {movie?: string} = movie !== '' ? { movie } : {};
    setSearchParams(nextMovie);
  };

  return (
    <>
      <SearchPanel onSubmit={updateQueryString} />
      {status === 'pending' && <Loader />}
      {status === 'resolved' && movies.length > 0 && (
        <GalleryMovies movies={movies as IMovie[]} />
      )}
      {status === 'resolved' && movies.length < 1 && (
        <Message message={noMoviesMessage} />
      )}
      {status === 'rejected' && <Message message={error as string} />}
    </>
  );
};

export default Movies;
