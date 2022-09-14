import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  display: inline-block;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.medium};
  padding: ${p => p.theme.space[3]}px;
  min-width: 100px;
  text-align: center;
  border-radius: ${p => p.theme.radii.sm};
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.bgWhite};

  &.active {
    background-color: ${p => p.theme.colors.accent};
  }

  &:hover:not(.active),
  &:focus:not(.active) {
    background-color: ${p => p.theme.colors.bgPrimaryAccent};
  }
`;
