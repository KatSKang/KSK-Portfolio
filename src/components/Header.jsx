import React from "react";
//import ReactDOM from 'react-dom';
import { SocialIcon } from "react-social-icons";
import "./header.css";
import profile1 from "../assets/images/profile1.jpg";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Header() {
  const handleClickScroll = () => {
    const el = document.getElementById("about");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div className="hero">
      <div
        className="flex grid place-content-center top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed text-white"
        style={{ backgroundColor: `rgba(0, 0, 0, 0.6)` }}
        intial={{ opacity: 0 }}
        animate={{ x: 100 }}
        exit={{ opacity: 0 }}>
        <h2 className="mb-4 xl:p-0 p-8 text-3xl font-bold">Hi, my name is</h2>
        <h1 className="mb-10 xl:p-0 p-8 text-9xl font-bold">Kathy Kang</h1>
        <h2 className="mb-10 xl:px-0 px-8 text-4xl">
          I'm a Full Stack Developer with a focus on front-end development and
          UX/UI.
        </h2>
        <button
          className="xl:px-0 px-8 bg-transparent hover:border-opacity-50 w-32 font-bold py-2 px-4 border border-white rounded"
          onClick={handleClickScroll}>
          About me
        </button>
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
    </motion.div>

    // <div className="w-full h-100 text-gray-200 mb-10 justify-center text-center">
    //   <div className="">
    //     <h1 className="text-8xl my-2 font-bold text-teal-500">Kathy Kang</h1>
    //     <h2 className="text-3xl my-4">Full Stack Developer</h2>
    //   </div>
    //   <div className="flex justify-center gap-12">
    //     <SocialIcon
    //       url="https://github.com/katskang"
    //       bgColor="#E2E2E2"
    //       style={{ height: 40, width: 40 }}
    //     />
    //     <SocialIcon
    //       url="https://www.linkedin.com/in/ks-kang/"
    //       bgColor="#E2E2E2"
    //       style={{ height: 40, width: 40 }}
    //     />
    //     <SocialIcon
    //       url="https://stackoverflow.com/users/19130400/kathy-kang"
    //       bgColor="#E2E2E2"
    //       style={{ height: 40, width: 40 }}
    //     />
    //   </div>
    // </div>
  );
}
