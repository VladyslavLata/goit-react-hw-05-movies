import styled from 'styled-components';

export const Post = styled.li`
  padding: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.bgPrimary};
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: 10px 8px 26px -16px rgba(0, 0, 0, 1);
`;

export const Title = styled.h3`
  margin-bottom: ${p => p.theme.space[3]}px;
`;
