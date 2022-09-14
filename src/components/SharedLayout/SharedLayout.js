import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Box } from 'components/Box/Box';
import { ButtonLink } from 'components/ButtonLink/ButtonLink';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <>
      <Box as="header" py={4} px={5} bg="bgPrimary">
        <Box as="nav" display="flex" gridGap={5} justifyContent="center">
          <ButtonLink to={'/'}>Home</ButtonLink>
          <ButtonLink to={'movies'}>Movies</ButtonLink>
        </Box>
      </Box>
      <main>
        <Box px={5}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Box>
      </main>
    </>
  );
};
