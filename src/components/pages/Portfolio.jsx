import React from "react";
import resumade from "../../assets/images/resumade.jpeg";
import "../../App.css";
import { forwardRef } from "react";

const Portfolio = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="projects" id="projects">
      <h1 className="font-bold text-center text-zinc-900 lg:mb-4 sm:text-4xl lg:text-6xl min-[320px]:text-5xl">
        PROJECTS
      </h1>
      {/* RESUMADE */}
      <div>
        <div className="grid md:grid-cols-3 sm:gap-8 lg:gap-12 h-full max-w-screen-xl px-8 py-8 mx-auto min-[320px]:grid-cols-1 max-w-s overflow-hidden my-12 mx-6 border-2 border-zinc-900 hover:border-4">
          <div className="text-xl text-zinc-800 col-span-1">
            <h1 className="font-extrabold text-zinc-900 mb-4">Resumade</h1>
            <p className="text-base">
              A React based application where users can generate a resume after
              completing a multistep questionnaire form. Main features include a
              signup/login function, a user dashboard, data storage using
              MongoDB and a payment function through Stripe API. Collaborating
              on a team of five, my role included front-end development and
              UI/UX design for the website.
            </p>
            <br></br>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
              #MERN Stack
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
              #JSX
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-8">
              #Ant Design
            </span>
            <br></br>
            <a
              href="https://resumade.herokuapp.com/"
              className="inline-block rounded-lg px-3 py-1 text-base font-semibold text-indigo-700 mr-4 bg-white hover:bg-indigo-700 hover:text-indigo-200 border border-indigo-500">
              See Live
            </a>
            <a
              href="https://github.com/PeytonCast/ResuMade"
              className="inline-blockpx-3 py-2 text-base font-semibold text-indigo-700 hover:text-indigo-400">
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
        <div className="grid md:grid-cols-3 sm:gap-8 lg:gap-12 h-full max-w-screen-xl px-8 py-8 mx-auto min-[320px]:grid-cols-1 max-w-s overflow-hidden my-12 mx-6 border-2 border-zinc-900 hover:border-4">
          <img
            className="w-full col-span-2"
            src="https://katskang.github.io/Portfolio/assets/images/meowwoof%20homepage.png"
            id="card-img"
            alt="MeowWoof img"></img>
          <div className="text-xl text-neutral-800 col-span-1">
            <h1 className="font-extrabold text-neutral-900 mb-4">MeowWoof</h1>
            <p className="text-base ">
              An animal shelter website built primarily using HTML,
              CSS/TailwindCSS, JavaScript, jQuery and Handlebars. Main features
              include account signup and login, filterable pet search function,
              a volunteer dashboard and automated email for adoption requests.
              Collaborated with a team of five, my role included front-end
              development and focused on UI/UX with mobile responsiveness. Also
              assisted backend team with ExpressJS routes.
            </p>
            <br></br>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #JavaScript
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #HTML
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #TailwindCSS
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #jQuery
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-8">
              #Express
            </span>
            <br></br>
            <a
              href="https://shielded-harbor-87736.herokuapp.com/"
              className="inline-block rounded-lg px-3 py-1 text-base font-semibold text-indigo-700 mr-4 bg-white hover:bg-indigo-700 hover:text-zinc-200 border border-indigo-500">
              See Live
            </a>
            <a
              href="https://github.com/TeryKing/Project-MeowWoof"
              className="inline-blockpx-3 py-2 text-base font-semibold text-indigo-700 hover:text-indigo-400">
              Source Code
            </a>
          </div>
        </div>
        {/* CONCERTEER */}
        <div className="grid md:grid-cols-3 sm:gap-8 lg:gap-12 h-full max-w-screen-xl px-8 py-8 mx-auto min-[320px]:grid-cols-1 max-w-s overflow-hidden mt-12 mb-24 mx-6 border-2 border-zinc-900 hover:border-4">
          <div className="text-xl text-neutral-800 col-span-1">
            <h1 className="font-extrabold text-neutral-900 mb-4">Concerteer</h1>
            <p className="text-base">
              Concerteer is a simple website that can be used search for your
              favorite artist's upcoming events. This app uses third party APIs
              to fetch data for the artist's events and then uses the event's
              geolocation to find the nearest hotel.
            </p>
            <br></br>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
              #HTML
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
              #CSS
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
              #JavaScript
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
              #RESTful API
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-8">
              #jQuery
            </span>
            <br></br>
            <a
              href="https://scotttots.github.io/scottstots/"
              className="inline-block rounded-lg px-3 py-1 text-base font-semibold text-indigo-700 mr-4 bg-white hover:bg-indigo-700 hover:text-indigo-200 border border-indigo-500">
              See Live
            </a>
            <a
              href="https://github.com/ScottTots/scottstots"
              className="inline-blockpx-3 py-2 text-base font-semibold text-indigo-700 hover:text-indigo-400">
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
    </div>
  );
});

export default Portfolio;
