import styled from 'styled-components';

export const CastCard = styled.li`
  width: 300px;
  display: flex;
  flex-direction: column;
`;

export const ImgWrap = styled.div`
  width: 300px;
  height: 450px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ActorName = styled.h3`
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[3]}px;
  flex-grow: 1;
`;
