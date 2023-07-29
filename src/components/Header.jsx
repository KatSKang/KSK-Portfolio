import React, { useState, useEffect } from "react";
import profile1 from "../assets/images/profile1.jpg";

export default function Header() {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [text, setText] = useState("");
  const fullText = "Web Developer";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 200);
    }
  }, [index]);

  return (
    <div
      className="flex flex-col hero relative min-h-screen overflow-hidden bg-cover"
      id="home">
      <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 lg:grid-cols-12 flex-1 flex items-center">
        <div className="hidden place-self-center items-center lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src={profile1}
            style={{
              height: 300,
              borderRadius: "50%",
            }}
            alt="pic"></img>
        </div>
        <div className="place-self-center lg:col-span-7 text-zinc-900">
          <p className="mb-2 tracking-wide font-extrabold text-xl">
            Welcome to my portfolio
          </p>
          <h1 className="max-w-2xl mb-4 text-6xl lg:text-8xl font-extrabold">
            I'm <span className="">Kathy Kang</span>
          </h1>
          <span className="max-w-2xl text-5xl lg:text-7xl font-extrabold">
            {text}
          </span>
          <p className="max-w-2xl mt-6 mb-6 font-light lg:mb-8 text-xl">
            Proficent in HTML, CSS, JavaScript, NodeJS and React frameworks.
            Experienced with building projects and web applications using MERN
            stack.
          </p>
          <button
            className="border-zinc-900 bg-zinc-100/50 font-bold w-34 py-2 px-4 border rounded-lg mr-6 hover:bg-zinc-100 hover:text-zinc-900 transition duration-300"
            onClick={scrollToProjects}>
            See my works
          </button>
        </div>
      </div>
    </div>
  );
}
