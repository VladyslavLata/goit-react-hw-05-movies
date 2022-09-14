import PropTypes from 'prop-types';
import * as SC from './Rating.styled';

export const Rating = ({ rating }) => {
  return (
    <SC.RatingMovie rating={rating}>
      {Math.floor(rating * 10) / 10}
    </SC.RatingMovie>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};
