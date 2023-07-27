import React from "react";
import resumade from "../../assets/images/resumade.jpeg";
import "../../App.css";
import { forwardRef } from "react";

import meowWoof from "../../assets/images/meowwoof homepage.png";

const titleStyle =
  "font-bold text-zinc-900 lg:mb-8 sm:text-5xl lg:text-7xl min-[320px]:text-4xl tracking-wide uppercase";

const projBoxStyle =
  "grid md:grid-cols-3 sm:gap-8 lg:gap-12 h-full max-w-screen-xl px-8 py-8  my-4 mx-6 min-[320px]:grid-cols-1 max-w-s overflow-hidden bg-zinc-100/50 rounded-lg shadow-lg";

const tagStyle =
  "inline-block bg-zinc-200 rounded-full px-3 py-1 text-sm font-semibold text-zinc-700 mr-2 mb-2";

const buttonStyle =
  "inline-block rounded-lg px-3 py-1 text-base font-semibold text-zinc-900 mt-4 mr-4 bg-white hover:text-[#d4776b] hover:bg-zinc-900 border border-zinc-900";

const linkStyle =
  "inline-blockpx-3 py-2 text-base font-semibold text-zinc-900 hover:text-[#d4776b]";

const Portfolio = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="projects grid justify-items-center gap-4 mb-24"
      id="projects">
      <h2 className={titleStyle}>PROJECTS</h2>
      {/* RESUMADE */}

      <div className={projBoxStyle}>
        <div className="text-xl text-zinc-800 col-span-1 tracking-wide">
          <h3 className="font-extrabold text-zinc-900 mb-4">ResuMade</h3>
          <p className="text-base">
            A React based application where users can generate a resume after
            completing a multistep questionnaire form. Main features include a
            signup/login function, a user dashboard, data storage using MongoDB
            and a payment function through Stripe API. Collaborating on a team
            of five, my role included front-end development and UI/UX design for
            the website.
          </p>
          <br></br>
          <span className={tagStyle}>#MERN Stack</span>
          <span className={tagStyle}>#JSX</span>
          <span className={tagStyle}>#Ant Design</span>
          <br></br>
          <a
            href="https://resumade.herokuapp.com/"
            className={buttonStyle}
            target="_blank"
            rel="noopener noreferrer">
            See Live
          </a>
          <a
            href="https://github.com/PeytonCast/ResuMade"
            className={linkStyle}
            target="_blank"
            rel="noopener noreferrer">
            Source Code
          </a>
        </div>

        <img
          className="w-full col-span-2"
          src={resumade}
          id="card-img"
          alt="resumade homepage"></img>
      </div>
      {/* MEOWWOOF */}
      <div className={projBoxStyle}>
        <img
          className="w-full col-span-2"
          src={meowWoof}
          id="card-img"
          alt="MeowWoof img"></img>
        <div className="text-xl text-neutral-800 col-span-1">
          <h3 className="font-extrabold text-neutral-900 mb-4">MeowWoof</h3>
          <p className="text-base ">
            An animal shelter website built primarily using HTML,
            CSS/TailwindCSS, JavaScript, jQuery and Handlebars. Main features
            include account signup and login, filterable pet search function, a
            volunteer dashboard and automated email for adoption requests.
            Collaborated with a team of five, my role included front-end
            development and focused on UI/UX with mobile responsiveness. Also
            assisted backend team with ExpressJS routes.
          </p>
          <br></br>
          <span className={tagStyle}>#JavaScript</span>
          <span className={tagStyle}>#HTML</span>
          <span className={tagStyle}>#TailwindCSS</span>
          <span className={tagStyle}>#jQuery</span>
          <span className={tagStyle}>#Express</span>
          <br></br>
          <a
            href="https://shielded-harbor-87736.herokuapp.com/"
            className={buttonStyle}
            target="_blank"
            rel="noopener noreferrer">
            See Live
          </a>
          <a
            href="https://github.com/TeryKing/Project-MeowWoof"
            className={linkStyle}
            target="_blank"
            rel="noopener noreferrer">
            Source Code
          </a>
        </div>
      </div>
      {/* CONCERTEER */}
      <div className={projBoxStyle}>
        <div className="text-xl text-neutral-800 col-span-1">
          <h3 className="font-extrabold text-neutral-900 mb-4">Concerteer</h3>
          <p className="text-base">
            Concerteer is a simple website that can be used search for your
            favorite artist's upcoming events. This app uses third party APIs to
            fetch data for the artist's events and then uses the event's
            geolocation to find the nearest hotel.
          </p>
          <br></br>
          <span className={tagStyle}>#HTML</span>
          <span className={tagStyle}>#CSS</span>
          <span className={tagStyle}>#JavaScript</span>
          <span className={tagStyle}>#RESTful API</span>
          <span className={tagStyle}>#jQuery</span>
          <br></br>
          <a
            href="https://scotttots.github.io/scottstots/"
            className={buttonStyle}
            target="_blank"
            rel="noopener noreferrer">
            See Live
          </a>
          <a
            href="https://github.com/ScottTots/scottstots"
            className={linkStyle}
            target="_blank"
            rel="noopener noreferrer">
            Source Code
          </a>
        </div>
        <img
          className="w-full col-span-2"
          src="https://user-images.githubusercontent.com/30813052/185979386-86d19788-df9c-4d08-bf06-4b654f572165.png"
          id="card-img"
          alt="concerteer img"></img>
      </div>
    </div>
  );
});

export default Portfolio;
