import React from "react";
import resume from "../../PDF/Kathy Kang 2022 Resume.pdf";

const Resume = () => {
  return (
    <div className="text-center my-24 mb-10">
      <div>
        <h1 className="font-bold text-[#ee7752] text-center lg:mb-4 sm:text-4xl lg:text-6xl min-[320px]:text-5xl">
          Technical Skills
        </h1>
        <h3 className="my-4 text-sm text-zinc-900">
          Click below to download my resume.
        </h3>
        <a
          href={resume}
          target="_blank"
          rel="resume"
          className="bg-teal-500 hover:bg-teal-300 text-gray-900 font-bold py-2 px-4 rounded-full">
          View Resume
        </a>
      </div>
      <div className="grid md:grid-cols-3 sm:gap-8 lg:gap-12 h-full max-w-screen-xl px-8 py-8 mx-auto min-[320px]:grid-cols-1 max-w-s overflow-hidden my-12 mx-6">
        <div className="front col-span-1">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>REST API</li>
            <li>TailwindCSS</li>
            <li>BootStrap</li>
            <li>SQL</li>
            <li>MongoDB</li>
            <li>PWA</li>
            <li>React</li>
            <li>MERN</li>
          </ul>
        </div>
        <div className="back col-span-1">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>REST API</li>
            <li>TailwindCSS</li>
            <li>BootStrap</li>
            <li>SQL</li>
            <li>MongoDB</li>
            <li>PWA</li>
            <li>React</li>
            <li>MERN</li>
          </ul>
        </div>
        <div className="dev col-span-1">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>REST API</li>
            <li>TailwindCSS</li>
            <li>BootStrap</li>
            <li>SQL</li>
            <li>MongoDB</li>
            <li>PWA</li>
            <li>React</li>
            <li>MERN</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
