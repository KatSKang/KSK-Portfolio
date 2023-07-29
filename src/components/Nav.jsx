import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes, FaBars } from "react-icons/fa";

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

  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav className="fixed right-2 top-2 z-50 w-18 md:bg-paz-200/50 text-zinc-900 flex flex-col px-2 rounded-lg md:border-l ">
      <ul className="flex flex-col w-full">
        {navLinks.map(({ id, link }) => (
          <li
            key={id}
            className="hover:text-zinc-100 text-s cursor-pointer py-2 hidden md:block">
            <Link to={link} smooth duration={1000} delay={100}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* hamburger button */}
      <div className="-mr-2 flex md:hidden">
        <button
          onClick={handleMenu}
          className="inline-flex items-center justify-center p-2 rounded-md text-zinc-900/50 bg-zinc-100/50 hover:text-zinc-100">
          <span className="sr-only">Open Menu</span>
          {open === true ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* mobile menu */}
      {open ? (
        <div className="md:hidden bg-paz-200/50 rounded-lg -mr-2 p-2 border-l">
          <ul className="">
            {navLinks.map(({ id, link }) => (
              <li
                key={id}
                className="hover:text-zinc-100 text-s cursor-pointer py-1">
                <Link to={link} smooth duration={1000} delay={100}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </nav>
  );
};

export default NavBar;
