import styled from 'styled-components';

interface IRatingColor {
  rating: number,
}

export const RatingMovie = styled.p<IRatingColor>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  font-weight: ${p => p.theme.fontWeights.medium};
  border-radius: ${p => p.theme.radii.round};
  background-color: ${({ rating, theme }) => {
    if (rating >= 7) {
      return theme.colors.green;
    } else if (rating < 5) {
      return theme.colors.red;
    }
    return theme.colors.yellow;
  }};
`;
