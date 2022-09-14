import * as SC from './ButtonLink.styled';
import PropTypes from 'prop-types';

export const ButtonLink = ({ to, children }) => {
  return <SC.Link to={to}>{children}</SC.Link>;
};

ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
};
