import React from "react";
import { forwardRef } from "react";
import resume from "../../assets/PDF/Kathy Kang Resume.pdf";
import codeIcon1 from "../../assets/images/code.svg";
import codeIcon2 from "../../assets/images/code-slash.svg";
import codeIcon3 from "../../assets/images/display.svg";

const Skills = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="text-center my-24 skill-container" id="skills">
      <h2 className="font-bold text-zinc-900 lg:mb-8 sm:text-5xl lg:text-7xl min-[320px]:text-4xl tracking-wide">
        Technical Skills
      </h2>

      <div className="grid grid-cols-3 m-8 skill-box">
        <div className="skill-col">
          <h3 className="skill-top font-bold text-zinc-200 text-3xl flex justify-center items-center tracking-wide">
            <img src={codeIcon1} alt="Code Icon" />
            Frontend
            <img src={codeIcon2} alt="Code Icon" />
          </h3>
          <p className="tracking-wide italic p-2">
            Passionate for simple, clean and responsive UI/UX.
          </p>
          <ul className="py-2 leading-loose">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript </li>
            <li>jQuery</li>
            <li>Bootstrap and other CSS libaries</li>
          </ul>
        </div>
        <div className="skill-col">
          <h3 className="skill-top font-bold text-zinc-200 text-3xl flex justify-center items-center tracking-wide">
            <img src={codeIcon1} alt="Code Icon" />
            Backend
            <img src={codeIcon2} alt="Code Icon" />
          </h3>
          <p className="tracking-wide italic p-2">
            Knowledgeable in Rest API and database structures:
          </p>
          <ul className="py-2 leading-loose">
            <li>Express</li>
            <li>Sequelize</li>
            <li>NodeJS</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>GraphQL</li>
          </ul>
        </div>
        <div className="skill-col">
          <h3 className="skill-top font-bold text-zinc-200 text-3xl flex justify-center items-center tracking-wide">
            <img src={codeIcon3} alt="Code Icon" />
            Other skills
          </h3>
          <p className="tracking-wide italic p-2">
            Various roles in development including:
          </p>
          <ul className="py-2 leading-loose">
            <li>Web Design</li>
            <li>Wireframing in Figma</li>
            <li>Team & project management in Trello</li>
            <li>Microsoft Excel, Powerpoint, Word</li>
          </ul>
        </div>
      </div>
      <div className="my-12">
        <a
          href={resume}
          target="_blank"
          rel="resume"
          className="bg-zinc-900 text-zinc-200 hover:bg-zinc-200 hover:text-zinc-900 font-bold py-2 px-4 rounded-md transition ease-in-out duration-300">
          View My Resume
        </a>
      </div>
    </div>
  );
});

export default Skills;
