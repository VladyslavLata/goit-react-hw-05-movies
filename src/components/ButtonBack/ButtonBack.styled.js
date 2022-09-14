import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonBack = styled(Link)`
  display: inline-block;
  text-align: center;
  margin-bottom: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  background-color: ${p => p.theme.colors.yellow};
  min-width: 100px;
  border-radius: ${p => p.theme.radii.sm};
  color: ${p => p.theme.colors.black};
`;
