import React from "react";
import { Route, Routes, Link } from "react-router-dom";

import Header from "./Header";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="flex justify-center mr-auto text-center py-4 px-6 text-white w-full">
          <p>
            <Link
              to="/"
              className="text-lg no-underline hover:text-teal-500 mx-2">
              About Me
            </Link>
          </p>
          <p>
            <Link
              to="/portfolio"
              className="text-lg no-underline hover:text-teal-500 mx-2">
              Portfolio
            </Link>
          </p>
          <p>
            <Link
              to="/resume"
              className="text-lg no-underline hover:text-teal-500 mx-2">
              Resume
            </Link>
          </p>
          <p>
            <Link
              to="/contact"
              className="text-lg no-underline hover:text-teal-500 mx-2">
              Contact
            </Link>
          </p>
        </div>
      </nav>

      <Header />

      <Routes>
        <Route path="/" element={<About />}>
          {" "}
        </Route>
        <Route path="/portfolio" element={<Portfolio />}>
          {" "}
        </Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/contact" element={<Contact />}>
          {" "}
        </Route>
      </Routes>
    </>
  );
}
