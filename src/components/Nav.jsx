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
              to="KKang-React-Portfolio/"
              className="text-lg no-underline hover:text-teal-500 mx-2">
              About Me
            </Link>
          </p>
          <p>
            <Link
              to="KKang-React-Portfolio/portfolio"
              className="text-lg no-underline hover:text-teal-500 mx-2">
              Portfolio
            </Link>
          </p>
          <p>
            <Link
              to="KKang-React-Portfolio/resume"
              className="text-lg no-underline hover:text-teal-500 mx-2">
              Resume
            </Link>
          </p>
          <p>
            <Link
              to="KKang-React-Portfolio//contact"
              className="text-lg no-underline hover:text-teal-500 mx-2">
              Contact
            </Link>
          </p>
        </div>
      </nav>

      <Header />

      <Routes>
        <Route path="/KKang-React-Portfolio/" element={<About />}></Route>
        <Route
          path="/KKang-React-Portfolio/portfolio"
          element={<Portfolio />}></Route>
        <Route
          path="/KKang-React-Portfolio/resume"
          element={<Resume />}></Route>
        <Route
          path="/KKang-React-Portfolio/contact"
          element={<Contact />}></Route>
      </Routes>
    </>
  );
}
