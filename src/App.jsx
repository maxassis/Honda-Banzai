import React from "react";
import GlobalStyles from "./styles/global";

import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Section2 } from "./components/section2";
import { Section3 } from "./components/section3";
import { Section4 } from "./components/section4";
import { Section5 } from "./components/section5";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </>
  );
}

export default App;
