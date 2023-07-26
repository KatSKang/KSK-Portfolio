import React from "react";
import "./header.css";
import profile1 from "../assets/images/profile1.jpg";

export default function Header() {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto h-800 min-[320px]:my-32 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="hidden place-self-center lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src={profile1}
            style={{
              height: 300,
              borderRadius: "50%",
            }}
            alt="pic"></img>
        </div>
        <div className="mx-auto place-self-center lg:col-span-7 text-zinc-900">
          <p className="max-w-2xl mb-2 font-bold md:text-lg lg:text-xl">
            Welcome to my portfolio
          </p>
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold md:text-5xl xl:text-6xl tracking-wide">
            I'm Kathy Kang
          </h1>
          <h2 className="max-w-2xl mb-4 text-4xl font-extrabold md:text-5xl xl:text-6xl tracking-wide">
            Web Developer
          </h2>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">
            Proficent in HTML, CSS, JavaScript, NodeJS and React frameworks.
            Experienced with building projects and web applications using MERN
            stack.
          </p>
          <button
            className="border-zinc-900 bg-zinc-200 font-bold w-34 py-2 px-4 border rounded mr-6"
            onClick={scrollToProjects}>
            See my works
          </button>
        </div>
      </div>
    </div>
  );
}
