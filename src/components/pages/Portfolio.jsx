import React from "react";
import resumade from "../../assets/images/resumade.jpeg";
import { forwardRef } from "react";

const Portfolio = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="projects">
      <h1 className="text-6xl mb-8 border-b text-center font-bold text-neutral-900">
        PROJECTS
      </h1>
      <div className="">
        <div className="grid md:grid-cols-3 sm:gap-8 lg:gap-12 h-full max-w-screen-xl px-8 py-8 mx-auto min-[320px]:grid-cols-1 max-w-s overflow-hidden">
          <div className="text-xl text-neutral-800 col-span-1">
            <h1 className="font-extrabold text-neutral-900 mb-4">Resumade</h1>
            <p className="text-base">
              A React based application where users can generate a resume after
              completing a multistep questionnaire form. Main features include a
              signup/login function, a user dashboard, data storage using
              MongoDB and a payment function through Stripe API. My role
              included front-end development and UI/UX design for the website. I
              also handled the front-end routes such as page navigation and
              login/signup functions.
            </p>
            <br></br>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
              #MERN Stack
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
              #JSX
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-8 ">
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
              className="inline-blockpx-3 py-2 text-base font-semibold text-indigo-700 hover:text-indigo-200">
              Source Code
            </a>
          </div>

          <img
            className="w-full col-span-2"
            src={resumade}
            id="card-img"
            alt="resumade homepage"></img>
        </div>
        <div className="max-w-s overflow-hidden rounded border border-gray-800">
          <img
            className="w-full"
            src="https://user-images.githubusercontent.com/30813052/185979386-86d19788-df9c-4d08-bf06-4b654f572165.png"
            id="card-img"
            alt="concerteer img"></img>
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-neutral-800 mb-2 ">
              Concerteer
            </div>
            <p className="text-neutral-800 text-base ">
              Concerteer is a simple website that can be used search for your
              favorite artist's upcoming events. This app uses third party APIs
              to fetch data for the artist's events and then uses the event's
              geolocation to find the nearest hotel.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a
              href="https://github.com/ScottTots/scottstots"
              className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 bg-teal-500 hover:bg-teal-200">
              GitHub Repo
            </a>
            <a
              href="https://scotttots.github.io/scottstots/"
              className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 bg-teal-500 hover:bg-teal-200">
              Deployed App
            </a>
            <br></br>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
              #REST APIs
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
              #JavaScript
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
              #JQuery
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
              #TailwindCSS
            </span>
          </div>
        </div>
        <div className="max-w-s overflow-hidden rounded border border-gray-800">
          <img
            className="w-full"
            src="https://katskang.github.io/Portfolio/assets/images/meowwoof%20homepage.png"
            id="card-img"
            alt="MeowWoof img"></img>
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-neutral-800 mb-2 ">
              MeowWoof
            </div>
            <p className="text-neutral-800 text-base ">
              This app is designed for pet shelters to keep track of pets and
              adoptions. The main features include a pet search, account signup,
              pet adoption and surrender request.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a
              href="https://github.com/TeryKing/Project-MeowWoof"
              className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 bg-teal-500 hover:bg-teal-200">
              GitHub Repo
            </a>
            <a
              href="https://shielded-harbor-87736.herokuapp.com/"
              className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 bg-teal-500 hover:bg-teal-200">
              Deployed App
            </a>
            <br></br>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
              #JavaScript
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
              #NodeJS
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
              #Sequelize
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
              #Express
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
              #Handlebars
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
              #Flowbite
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Portfolio;
