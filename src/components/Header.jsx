import React from "react";
//import ReactDOM from 'react-dom';
import { SocialIcon } from "react-social-icons";
import "./header.css";
import profile1 from "../assets/images/profile1.jpg";
import { motion } from "framer-motion";

export default function Header() {
  const handleClickScroll = () => {
    const el = document.getElementById("about");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="hero flex grid place-content-center text-white ml-2">
        <h2 className="mb-4 xl:p-0 p-8 text-3xl font-bold min-[320px]:mb-0 ">
          Hi, my name is
        </h2>
        <h1 className="mb-4 xl:p-0 p-8 text-9xl font-bold">Kathy Kang</h1>
        <h2 className="mb-10 xl:px-0 px-8 text-3xl font-bold">
          I'm a Web Developer with a focus on front-end development and UX/UI.
        </h2>
        <button
          className="xl:px-0 bg-transparent hover:border-opacity-50 hover:bg-zinc-200 hover:text-zinc-900 w-32 font-bold py-2 px-4 border border-white rounded mb-10"
          onClick={handleClickScroll}>
          About me
        </button>
        <div className="flex gap-6">
          <SocialIcon
            url="https://github.com/katskang"
            bgColor="#E2E2E2"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/ks-kang/"
            bgColor="#E2E2E2"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="https://stackoverflow.com/users/19130400/kathy-kang"
            bgColor="#E2E2E2"
            style={{ height: 40, width: 40 }}
          />
        </div>
        {/* <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src={profile1}
            style={{
              height: 400,
              borderRadius: "50%",
            }}
            alt="pic"></img>
        </div> */}
      </div>
    </>
  );
}
