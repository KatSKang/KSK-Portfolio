import React from "react";
//import ReactDOM from 'react-dom';
import { SocialIcon } from "react-social-icons";
import "./header.css";
import profile1 from "../assets/images/profile1.jpg";

export default function Header() {
  return (
    <div
      className="hero relative overflow-hidden"
      style={{
        height: 800,
      }}>
      <div
        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        style={{ backgroundColor: `rgba(0, 0, 0, 0.6)` }}>
        <div className="grid h-full max-w-screen-xl px-8 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-white text-9xl font-extrabold tracking-tight leading-none xl:text-[9rem]">
              Kathy
            </h1>
            <h1 className="max-w-2xl pb-10 text-white text-9xl font-extrabold tracking-tight leading-none xl:text-[9rem] border-b">
              Kang
            </h1>
            <p className="mt-6 text-xl text-gray-200">full stack</p>
            <h2 className="max-w-2xl font-medium text-gray-200 lg:mb-8 md:text-lg lg:text-4xl">
              web developer
            </h2>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src={profile1}
              style={{ height: 640, borderRadius: 360 }}
              alt="pic"></img>
          </div>
        </div>
      </div>
    </div>

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
