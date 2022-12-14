import React from "react";
import { useParams } from 'react-router-dom';
import { getCast } from 'Api/Api';
import { CastCard } from 'components/CastCard/CastCard';
import { Message } from 'components/Message/Message';
import { Loader } from 'components/Loader/Loader';
import { useGetArreyDataPage } from 'Hooks/useGetArreyDataPage';
import { Box } from 'components/Box/Box';
import {  ICrew } from 'types/types';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, status, error] = useGetArreyDataPage(getCast,
    movieId);

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <section>
          <Box as="ul" display="flex" gridGap={4} flexWrap="wrap" py={4}>
            <CastCard cast={cast as ICrew[]} />
          </Box>
        </section>
      )}
      {status === 'rejected' && <Message message={error as string} />}
    </>
  );
};

export default Cast;
