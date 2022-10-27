import React from 'react';
import * as SC from './ReviewsCard.styled';
import { IReview } from 'types/types';

interface IProps {
  reviews: IReview[],
}

export const ReviewsCard: React.FC <IProps>  = ({ reviews }) => {
  return <>{
    reviews.map(({ author, id, content }) => (
      <SC.Post key={id}>
        <SC.Title>{author}</SC.Title>
        <p>{content}</p>
      </SC.Post>
    ))
  }</>
  
};
