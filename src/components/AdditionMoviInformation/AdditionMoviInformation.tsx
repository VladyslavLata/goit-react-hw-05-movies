import React from "react";
import { ButtonLink } from 'components/ButtonLink/ButtonLink';
import { Box } from 'components/Box/Box';
import * as SC from './AdditionMoviInformation.styled';

export const AdditionMoviInformation: React.FC = () => {
  return (
    <Box bg={'bgPrimary'} mt={4} height="100px">
      <SC.Title>Addition information</SC.Title>
      <Box as="ul" mt={4} display="flex" justifyContent="center">
        <Box as="li" mr={5}>
          <ButtonLink to={'cast'}>Cast</ButtonLink>
        </Box>
        <li>
          <ButtonLink to={'reviews'}>Reviews</ButtonLink>
        </li>
      </Box>
    </Box>
  );
};
