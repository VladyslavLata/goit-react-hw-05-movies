import * as SC from './Message.styled';
import PropTypes from 'prop-types';

export const Message = ({ message }) => {
  return <SC.Message>{message}</SC.Message>;
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
};
