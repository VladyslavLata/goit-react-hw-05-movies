import * as SC from './ButtonLink.styled';

export const ButtonLink = ({ to, children }) => {
  return <SC.Link to={to}>{children}</SC.Link>;
};
