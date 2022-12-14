import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    red: '#ff0000',
    green: '#00ff7f',
    black: '#000',
    yellow: '#FFFF00',
    white: '#fff',
    gray: '#929292',
    text: '#2a2a2a',
    bgWhite: '#fff',
    bgBlack: '#000',
    bgGray: '#dcdcdc',
    bgPrimary: '#3f51b5',
    bgPrimaryAccent: '#FFFFc0',
    primary: '#07c',
    secondary: '#05a',
    accent: '#FFFF00',
    muted: '#f6f6f6',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256, 12, 24],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    xs: '12px',
    s: '18px',
    m: '24px',
    l: '32px',
    xl: '64px',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
    button: 1.33,
  },
  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radii: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '16px',
    round: '50%',
  },
};
