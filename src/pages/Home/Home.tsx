import { Loader } from 'components/Loader/Loader';
import { getTrendingMovies } from 'Api/Api';
import { GalleryMovies } from 'components/GalleryMovies/GalleryMovies';
import { Message } from 'components/Message/Message';
import { useGetArreyDataPage } from 'Hooks/useGetArreyDataPage';

export const Home = () => {
  const [movies, status, error] = useGetArreyDataPage(
    getTrendingMovies,
    'results'
  );

  if (status === 'pending') {
    return <Loader />;
  } else if (status === 'resolved' && movies.length > 0) {
    return <GalleryMovies movies={movies} />;
  } else if (status === 'rejected') {
    return <Message message={error} />;
  }
};
