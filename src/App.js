import "./App.css";
import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Nav";
import Portfolio from "./components/Portfolio";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />

      <About />
      <Portfolio />
    </div>
  );
}

export default App;
