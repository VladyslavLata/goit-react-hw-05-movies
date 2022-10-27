import styled from 'styled-components';

export const Message = styled.p`
  margin-top: ${p => p.theme.space[5]}px;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};
`;
