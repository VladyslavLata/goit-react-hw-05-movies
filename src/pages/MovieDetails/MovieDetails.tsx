import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useRef, Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { getMovieDetails } from 'Api/Api';
import { MovieDetailsBox } from 'components/MovieDetailsBox/MovieDetailsBox';
import { Message } from 'components/Message/Message';
import { AdditionMoviInformation } from 'components/AdditionMoviInformation/AdditionMoviInformation';
import { ButtonBack } from 'components/ButtonBack/ButtonBack';
import { useGetObjDataPage } from 'Hooks/useGetObjDataPage';
import { Box } from 'components/Box/Box';

const MovieDetails = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [movieDetails, status, error] = useGetObjDataPage(
    getMovieDetails,
    movieId
  );
  const location = useLocation();
  const state = location.state as { from: Location }
  const backLink = useRef<Location | string>(state.from ?? '/');
  // const backLink = useRef(location.state?.from ?? '/');
  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <Box as="section" py={4}>
          <ButtonBack to={backLink.current} />
          <MovieDetailsBox movie={movieDetails} />
          <AdditionMoviInformation />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Box>
      )}
      {status === 'rejected' && <Message message={error} />}
    </>
  );
};

export default MovieDetails;
