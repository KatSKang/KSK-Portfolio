import React from "react";
//import ReactDOM from 'react-dom';
import { SocialIcon } from "react-social-icons";

export default function Header() {
  return (
    <div className="w-full h-100 text-gray-200 mb-10 justify-center text-center">
      <div className="">
        <h1 className="text-8xl my-2 font-bold text-teal-500">Kathy Kang</h1>
        <h2 className="text-3xl my-4">Full Stack Developer</h2>
      </div>
      <div className="flex justify-center gap-12">
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
    </div>
  );
}
