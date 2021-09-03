import { createGlobalStyle } from 'styled-components';

/* 
Styled components Prettier workaround 
(https://github.com/prettier/prettier/pull/9025) 
*/
const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
  html {
    font: normal 400 18px/150% 'Rubik', sans-serif;
  }

  body {
    background-color: #fff;
  }

  h1 {
    font: normal 700 2rem/150% 'Roboto', sans-serif;
  }

  p {
    font-size: 1rem;
  }
`;
