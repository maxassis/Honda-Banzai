import React from "react";
import GlobalStyles from "./styles/global";

import { Header } from "./components/header";
import { Hero } from "./components/hero";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
    </>
  );
}

export default App;
