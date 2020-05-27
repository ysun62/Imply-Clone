import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import DruidAbout from "./components/druidAbout/DruidAbout";
import Solution from "./components/solutions/Solutions";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <DruidAbout />
      <Solution />
    </div>
  );
}

export default App;
