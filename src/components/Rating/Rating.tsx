import React from "react";
import * as SC from './Rating.styled';

export const Rating: React.FC<{rating: number}> = ({ rating }) => {
  return (
    <SC.RatingMovie rating={rating}>
      {Math.floor(rating * 10) / 10}
    </SC.RatingMovie>
  );
};
