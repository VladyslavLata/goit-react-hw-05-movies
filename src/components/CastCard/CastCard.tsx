import React from "react";
import * as SC from './CastCard.styled';
import { ICrew } from "types/types";
import img from '../../img/noUserProfile.webp';

interface IProps {
  cast: ICrew[]
}

export const CastCard: React.FC <IProps> = ({ cast }) => {
  return <> {
    cast.map(({ name, profile_path, credit_id }) => (
      <SC.CastCard key={credit_id}>
        <SC.ImgWrap>
          <SC.Image
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : img
            }
            alt={name}
          />
        </SC.ImgWrap>
        <SC.ActorName>{name}</SC.ActorName>
      </SC.CastCard>
    ))
  }</>
};
