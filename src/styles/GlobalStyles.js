import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  }
  html {
    font-size: 62.5%; // 1rem = 10px
  }
  body {
    width: 100vw;
    min-height: 300vh;
    overflow-x: hidden;
    font-family: "Poppins", sans-serif;
  }
  button {
    cursor: pointer;
    border: none;
    outline: none;
  }  
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const desktopSectionPadding = css`
  padding-left: 15rem;
  padding-right: 15rem;
`;

export { GlobalStyles, desktopSectionPadding };
