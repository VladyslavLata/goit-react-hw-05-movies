import React from "react";
import * as SC from './ButtonLink.styled';

interface IProps {
  to: string,
  children: React.ReactNode,
}

export const ButtonLink: React.FC <IProps> = ({ to, children }) => {
  return <SC.Link to={to}>{children}</SC.Link>;
};
