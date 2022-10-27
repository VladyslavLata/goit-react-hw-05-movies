import React from 'react';
import * as SC from './ButtonBack.styled';

export const ButtonBack: React.FC<{ to: Location | string }> = ({ to }) => {
  return <SC.ButtonBack to={to}>Go back</SC.ButtonBack>;
};
