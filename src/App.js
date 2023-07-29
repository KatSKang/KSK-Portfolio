import "./App.css";
import React from "react";
import Navbar from "./components/Nav";
import Header from "./components/Header";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import { useRef } from "react";

function App() {
  const about = useRef(null);
  const projects = useRef(null);
  const skills = useRef(null);
  const contact = useRef(null);

  return (
    <div className="App scroll-smooth">
      <Navbar />
      <Header />
      <About ref={about} />
      <Skills ref={skills} />
      <Projects ref={projects} />
      <Contact ref={contact} />
      <Footer />
    </div>
  );
}

export default App;
