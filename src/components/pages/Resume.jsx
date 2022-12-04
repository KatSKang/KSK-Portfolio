import React from "react";
import resume from "../../PDF/Kathy Kang 2022 Resume.pdf";

const Resume = () => {
  return (
    <>
      <center className="my-4 mb-10">
        <h1 className="text-4xl text-gray-200 my-4 border-b">Resume</h1>
        <h3 className="my-4 text-sm text-gray-300">
          Click below to download my resume.
        </h3>
        <a
          href={resume}
          target="_blank"
          rel="resume"
          className="bg-teal-500 hover:bg-teal-300 text-gray-900 font-bold py-2 px-4 rounded-full">
          Download PDF
        </a>
      </center>

      <center>
        <h2 className="text-2xl text-gray-200 underline">Technical Skills:</h2>
        <div className="p-2 center text-gray-200">
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
      </center>
    </>
  );
};

export default Resume;
