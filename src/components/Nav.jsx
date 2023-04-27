import React from "react";
// import { Route, Routes, Link } from "react-router-dom";
// import Header from "./Header";
// import Portfolio from "./pages/Portfolio";
// import About from "./pages/About";
// import Resume from "./pages/Resume";
// import Contact from "./pages/Contact";

export default function Navbar({ nav }) {
  return (
    <>
      <nav>
        <ul className="flex justify-center mr-auto text-center py-4 px-6 text-gray-200 w-full bg-transparent">
          <li
            onClick={() => nav.current.scrollIntoView({ behavior: "smooth" })}
            className="link cursor-pointer text-lg no-underline hover:text-[#ee7752] mx-2">
            About Me
          </li>
          <li
            onClick={() => nav.current.scrollIntoView({ behavior: "smooth" })}
            className="link text-lg no-underline hover:text-[#e73c7e] mx-2">
            Projects
          </li>
          <li
            onClick={() => nav.current.scrollIntoView({ behavior: "smooth" })}
            className="link text-lg no-underline hover:text-[#23a6d5] mx-2">
            Resume
          </li>
          <li
            onClick={() => nav.current.scrollIntoView({ behavior: "smooth" })}
            className="link text-lg no-underline hover:text-[#23d5ab] mx-2">
            Contact
          </li>
        </ul>
      </nav>
    </>
  );
}
