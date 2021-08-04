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

button {
  background-color: transparent;
  cursor: pointer;
}

.swiper-pagination-bullet {
  background: gray;
  width: 0.75rem;
  height: 0.75rem;
}



`;

export default GlobalStyles;
