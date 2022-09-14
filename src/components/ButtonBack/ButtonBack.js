import * as SC from './ButtonBack.styled';
import PropTypes from 'prop-types';

export const ButtonBack = ({ to }) => {
  return <SC.ButtonBack to={to}>Go back</SC.ButtonBack>;
};

ButtonBack.propTypes = {
  to: PropTypes.any.isRequired,
};
