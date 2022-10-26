import styled from 'styled-components';

export const ImgWrap = styled.div`
  box-shadow: 7px 10px 26px -16px rgba(0, 0, 0, 1);
`;

export const TableCell = styled.td`
  padding: ${p => p.theme.space[3]}px 0;

  &:first-child {
    min-width: 100px;
    padding-right: ${p => p.theme.space[4]}px;
    font-weight: ${p => p.theme.fontWeights.bold};
  }
`;

export const Table = styled.table`
  max-width: 900px;
`;
