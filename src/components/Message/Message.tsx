import React from 'react';

import * as SC from './Message.styled';

interface IProps {
  message: string;
}

export const Message: React.FC<IProps> = ({ message }) => {
  return <SC.Message>{message}</SC.Message>;
};
