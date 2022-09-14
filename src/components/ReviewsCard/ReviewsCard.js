import PropTypes from 'prop-types';
import * as SC from './ReviewsCard.styled';

export const ReviewsCard = ({ reviews }) => {
  return reviews.map(({ author, id, content }) => (
    <SC.Post key={id}>
      <SC.Title>{author}</SC.Title>
      <p>{content}</p>
    </SC.Post>
  ));
};

ReviewsCard.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};
