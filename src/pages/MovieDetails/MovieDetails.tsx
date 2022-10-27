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
import { IMovieDetails } from 'types/types';

const MovieDetails = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const location = useLocation();
  const [movieDetails, status, error] = useGetObjDataPage(
    getMovieDetails,
    movieId
  );
  
  const state = location.state as ({ from: Location } | null);
  const backLink = useRef<Location | string>(state?.from ?? '/');
  
  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <Box as="section" py={4}>
          <ButtonBack to={backLink.current} />
          <MovieDetailsBox movie={movieDetails as IMovieDetails} />
          <AdditionMoviInformation />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Box>
      )}
      {status === 'rejected' && <Message message={error as string} />}
    </>
  );
};

export default MovieDetails;
