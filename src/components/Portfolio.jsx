import React from 'react';
//import ReactDOM from "react-dom/client";

export default function Portfolio() {
    return (
        
        <div className="grid grid-cols-4 m-10">
            <div className="max-w-md rounded overflow-hidden shadow-lg ">
                <img className="w-full" src="../assets/images/concerteer.png" id="card-img" alt="concerteer img"></img>
            <div className="px-6 py-4">
            <div className="font-bold text-xl text-gray-200 mb-2 ">Concerteer</div>
                <p className="text-gray-200 text-base ">
                Concerteer is a simple website that can be used search for your favorite artist's upcoming events. This app uses third party APIs to fetch data for the artist's events and then uses the event's geolocation to find the nearest hotel.
                </p>
            </div>
                <div className="px-6">
                    <a href="https://scotttots.github.io/scottstots/" target="_blank" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-teal-500">GitHub repo</a>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Restful APIs</span>

                </div>
            </div>
            <div className="max-w-md rounded overflow-hidden shadow-lg ">
                <img className="w-full" src="../assets/images/meowwoof homepage.png" id="card-img" alt="MeowWoof img"></img>
            <div className="px-6 py-4">
            <div className="font-bold text-xl text-gray-200 mb-2 ">MeowWoof</div>
                <p className="text-gray-200 text-base ">
                This app is designed for pet shelters to keep track of pets and adoptions. The main features include a pet search, account signup, pet adoption and surrender request.
                </p>
            </div>
                <div className="px-6">
                    <a href="https://github.com/TeryKing/Project-MeowWoof" target="_blank" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-teal-500">GitHub repo</a>

                </div>
            </div>
            <div className="max-w-md rounded overflow-hidden shadow-lg ">
                <img className="w-full" src="https://user-images.githubusercontent.com/105574653/205253011-cc49cea0-9ff3-434d-9066-5c0e608099ee.png" id="card-img" alt="MeowWoof img"></img>
            <div className="px-6 py-4">
            <div className="font-bold text-xl text-gray-200 mb-2 ">The Tech Blog</div>
                <p className="text-gray-200 text-base ">
                This app is a simple CMS-style blog where users can post blogs, view other users' blogs and write comments.
                </p>
            </div>
                <div className="px-6">
                    <a href="https://github.com/KatSKang/Tech-Blog-MVC" target="_blank" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-teal-500">GitHub repo</a>

                </div>
            </div>
            <div className="max-w-md rounded overflow-hidden shadow-lg ">
                <img className="w-full" src="https://user-images.githubusercontent.com/105574653/184787797-4271661d-36a7-4705-b572-d2bb0ec7e2ee.png" id="card-img" alt="MeowWoof img"></img>
            <div className="px-6 py-4">
            <div className="font-bold text-xl text-gray-200 mb-2 ">Weather Dashboard</div>
                <p className="text-gray-200 text-base ">
                A simple weather dashboard app using the OpenWeatherMap API. This assignment focused on using server side APIs to fetch data and create a dynamic webpage.
                </p>
            </div>
                <div className="px-6">
                    <a href="https://github.com/KatSKang/Weather-Dashboard" target="_blank" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-teal-500">GitHub repo</a>
 

                </div>
            </div>

 
        </div>

        
    )
}
