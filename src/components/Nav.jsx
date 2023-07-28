import React, { useState } from "react";
// import { Route, Routes, Link } from "react-router-dom";
import { Link } from "react-scroll";

const NavBar = () => {
  const navLinks = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "projects",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <nav className="fixed right-2 top-2 z-50 w-16 bg-[#f7c6ca]/50 text-zinc-900 flex flex-col px-2 rounded-lg border-l">
      <ul className="flex flex-col w-full">
        {navLinks.map(({ id, link }) => (
          <li
            key={id}
            className="hover:text-zinc-100 text-s cursor-pointer py-2"
          >
            <Link to={link} smooth duration={1000} delay={100}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
