import styled from 'styled-components';

export const Label = styled.label`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.medium};
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;
  font-size: ${p => p.theme.fontSizes.s};
  border-color: ${p => p.theme.colors.bgPrimary};
  border-radius: ${p => p.theme.radii.sm};
`;

export const SearchButton = styled.button`
  padding: ${p => p.theme.space[3]}px;
  margin-left: ${p => p.theme.space[4]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  background-color: ${p => p.theme.colors.yellow};
  min-width: 100px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.sm};
  cursor: pointer;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-top: ${p => p.theme.space[4]}px;
`;
