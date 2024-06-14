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
  ::-webkit-scrollbar {
  background: #C0C4C4;
  width: 1rem;
}

::-webkit-scrollbar-thumb {
  background-color: #052659;
  border-radius: 0.3rem;
  height: 1rem;
}

::-webkit-scrollbar-thumb:hover {
  cursor: pointer;
}

::-webkit-scrollbar-track {
  border-radius: 100%;
}
`;

const desktopSectionPadding = css`
  padding-left: 12rem;
  padding-right: 12rem;
`;

export { GlobalStyles, desktopSectionPadding };
