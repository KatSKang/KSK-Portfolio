import "./App.css";
import React from "react";
import Navbar from "./components/Nav";
import Header from "./components/Header";
import About from "./components/pages/About";
import Projects from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import { useRef } from "react";

function App() {
  const about = useRef(null);
  const projects = useRef(null);
  const resume = useRef(null);
  const contact = useRef(null);

  return (
    <div className="App">
      {/* <Navbar nav={about} /> */}
      <Header />
      <About ref={about} />
      <Projects ref={projects} />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
