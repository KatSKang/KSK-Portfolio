import React from "react";
// import { Route, Routes, Link } from "react-router-dom";
// import Header from "./Header";
// import Portfolio from "./pages/Portfolio";
// import About from "./pages/About";
// import Resume from "./pages/Resume";
// import Contact from "./pages/Contact";
import logo from "../assets/images/logo.png";

export default function Navbar({ nav }) {
  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 hamburger-menu">
        <a href="/" class="flex items-center">
          <img src={logo} class="h-8 mr-3" alt="KK logo" />
        </a>
        <div clasName="">
          <ul className="flex justify-end mr-auto py-4 px-6 text-zinc-900 w-full text-light hidden space-x-8 lg:flex">
            <li
              onClick={() => nav.current.scrollIntoView({ behavior: "smooth" })}
              className="link cursor-pointer no-underline hover:underline mx-2">
              About
            </li>
            <li
              onClick={() => nav.current.scrollIntoView({ behavior: "smooth" })}
              className="link cursor-pointer no-underline hover:underline mx-2">
              Projects
            </li>
            <li
              onClick={() => nav.current.scrollIntoView({ behavior: "smooth" })}
              className="link cursor-pointer no-underline hover:underline mx-2">
              Resume
            </li>
            <li
              onClick={() => nav.current.scrollIntoView({ behavior: "smooth" })}
              className="link cursor-pointer no-underline hover:underline mx-2">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
