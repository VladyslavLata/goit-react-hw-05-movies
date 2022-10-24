import * as SC from './ReviewsCard.styled';

export const ReviewsCard = ({ reviews }) => {
  return reviews.map(({ author, id, content }) => (
    <SC.Post key={id}>
      <SC.Title>{author}</SC.Title>
      <p>{content}</p>
    </SC.Post>
  ));
};
