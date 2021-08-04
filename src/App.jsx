import React from "react";
import GlobalStyles from "./styles/global";

import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Section2 } from "./components/section2";
import { Section3 } from "./components/section3";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <Section2 />
      <Section3 />
    </>
  );
}

export default App;
