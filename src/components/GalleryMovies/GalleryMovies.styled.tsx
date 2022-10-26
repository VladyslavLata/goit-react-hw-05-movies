import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Gallery = styled.ul`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  padding: ${p => p.theme.space[4]}px 0;
`;

export const CardMovie = styled.li`
  display: flex;
  width: 300px;
  transition: transform 200ms ease-out, box-shadow 200ms ease-out;
  border-radius: ${p => p.theme.radii.md};
  overflow: hidden;

  &:hover,
  &:focus {
    transform: scale(1.02);
    box-shadow: -1px 7px 25px -8px rgba(0, 0, 0, 1);
  }
`;

export const LinkTo = styled(Link)`
  display: flex;
  flex-direction: column;
  color: ${p => p.theme.colors.black};
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

export const FooterMovie = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Title = styled.h3`
  display: inline-flex;
  align-items: center;
  width: 240px;
  ${p => p.theme.fontSizes.m}
`;
