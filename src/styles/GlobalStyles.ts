import { createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%; // 1rem = 10px
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