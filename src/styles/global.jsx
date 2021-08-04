import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: 'Abel', sans-serif;
}

img {
  max-width: 100%;
  display: block;
}
/* 
 html {
  @media (max-width: 480px) {
    font-size: 12px;
}
}  */

button {
  background-color: transparent;
  cursor: pointer;
}

`;

export default GlobalStyles;
