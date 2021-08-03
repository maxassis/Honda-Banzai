import React from "react";
import GlobalStyles from "./styles/global";

import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Section2 } from "./components/section2";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <Section2 />
    </>
  );
}

export default App;
