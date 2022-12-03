import React from 'react';
//import ReactDOM from "react-dom/client";

export default function About() {
    return(
        <div>
            <div className="grid justify-items-center">
                <img src="../assets/images/profile2.jpg" id="profile-img" alt="profliepic"></img>
            </div>
            <div className="flex sm:flex-wrap mx-6 my-12 justify-center text-gray-200">
                <div className="pl-5 w-2/5 text-xl">
                    <p className="">Hello and welcome to my portfolio page! I am a current Full StacK Web developer student with an interest in front-end development. I love building user-friendly apps that provide the user with simple, straightforward designs and responsive experiences.</p>
                    <br></br>
                    <p>I've always had an interest in computers and technology, but never thought of pursuing it as a career until recently. I'm currently working as an office manager in a small appliance repair company. I enjoy playing video games on PC, spending time with friends and family, and playing with my pets in my free time. I also love watching horror movies!</p>
                </div>                
            </div>
        </div>
    )
}