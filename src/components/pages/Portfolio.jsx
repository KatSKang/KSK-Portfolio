import React from "react";
import resumade from "../../assets/images/resumade.jpeg"


export default function Portfolio() {
  return (
    <div>
      <h1 className="text-4xl my-4 border-b text-center text-gray-200">
        My Projects
      </h1>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div className="max-w-s overflow-hidden rounded border border-gray-800">
          <img
            className="w-full"
            src={resumade}
            id="card-img"
            alt="resumade homepage"></img>
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-gray-200 mb-2 ">
              Resumade
            </div>
            <p className="text-gray-200 text-base ">
              A resume generator application. After signing up or logging, the user will be able to access the dashboard where they can add, edit or download their resume. To add a new resume, users can simply click on the 'new resume' button and is prompted to fill out the forms. Their resume will be generated at the end and automatically saved. The user will also have the option to download the file for $5. The resume will be saved to their account, where it can be accessed again through the dashboard.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a
              href="https://github.com/PeytonCast/ResuMade"
              className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 bg-teal-500 hover:bg-teal-200">
              GitHub Repo
            </a>
            <a
              href="https://resumade.herokuapp.com/"
              className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 bg-teal-500 hover:bg-teal-200">
              Deployed App
            </a>
            <br></br>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
              #MERN
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
              #Ant Design
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
              #CSS
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
              #DOCX
            </span>
          </div>
        </div>
        <div className="max-w-s overflow-hidden rounded border border-gray-800">
          <img
            className="w-full"
            src="https://user-images.githubusercontent.com/30813052/185979386-86d19788-df9c-4d08-bf06-4b654f572165.png"
            id="card-img"
            alt="concerteer img"></img>
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-gray-200 mb-2 ">
              Concerteer
            </div>
            <p className="text-gray-200 text-base ">
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
            <div className="font-bold text-xl text-gray-200 mb-2 ">
              MeowWoof
            </div>
            <p className="text-gray-200 text-base ">
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
        <div className="max-w-s overflow-hidden rounded border border-gray-800">
          <img
            className="w-full"
            src="https://user-images.githubusercontent.com/105574653/205253011-cc49cea0-9ff3-434d-9066-5c0e608099ee.png"
            id="card-img"
            alt="tech blog img"></img>
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-gray-200 mb-2 ">
              The Tech Blog
            </div>
            <p className="text-gray-200 text-base ">
              This app is a simple CMS-style blog where users can post blogs,
              view other users' blogs and write comments.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a
              href="https://github.com/KatSKang/Tech-Blog-MVC"
              className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 bg-teal-500 hover:bg-teal-200">
              GitHub Repo
            </a>
            <a
              href="https://intense-meadow-37447.herokuapp.com/"
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
        <div className="max-w-s overflow-hidden rounded border border-gray-800">
          <img
            className="w-full"
            src="https://user-images.githubusercontent.com/105574653/184787797-4271661d-36a7-4705-b572-d2bb0ec7e2ee.png"
            id="card-img"
            alt="weather dashboard img"></img>
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-gray-200 mb-2 ">
              Weather Dashboard
            </div>
            <p className="text-gray-200 text-base ">
              A simple weather dashboard app using the OpenWeatherMap API. This
              assignment focused on using server side APIs to fetch data and
              create a dynamic webpage.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a
              href="https://github.com/KatSKang/Weather-Dashboard"
              className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 bg-teal-500 hover:bg-teal-200">
              GitHub Repo
            </a>
            <a
              href="https://katskang.github.io/Weather-Dashboard/"
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
              #Bootstrap
            </span>
          </div>
        </div>
        
        <div className="max-w-s overflow-hidden rounded border border-gray-800">
          <img
            className="w-full"
            src="https://user-images.githubusercontent.com/105574653/204119858-e66b7aff-6dc9-474b-bf7b-2140dcc83bbe.png"
            id="card-img"
            alt="jate preview"></img>
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-gray-200 mb-2 ">
              J.A.T.E.
            </div>
            <p className="text-gray-200 text-base ">
              JATE is a text editor with code syntax that uses Progressive Web
              Applications to create a web and local application. This
              application focuses on creating server side and client side
              modules.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a
              href="https://github.com/KatSKang/text-editor-pwa"
              className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 bg-teal-500 hover:bg-teal-200">
              GitHub Repo
            </a>
            <a
              href="https://text-editor-ksk.herokuapp.com/"
              className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 bg-teal-500 hover:bg-teal-200">
              Deployed App
            </a>
            <br></br>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
              #NodeJS
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
              #JavaScript
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
              #PWA
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
              #IDB
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
