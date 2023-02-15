import React from "react";
import { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="about my-64 h-800">
      {/* <div className="mx-6 my-12 justify-center text-center text-gray-800">
        <div>
          <h1 className="font-bold text-black lg:mb-8 md:text-lg lg:text-6xl">
            ABOUT ME
          </h1>
        </div>
        <div className="text-xl">
          <p className="">
            Hello and welcome to my portfolio! I am a recent graduate of Georgia
            Tech's coding boot camp. I have received my certificate in Full
            Stack web development, however I have an interest in front-end
            development. I'm passionate about building user-friendly apps that
            provide the user with simple, straightforward designs and responsive
            experiences.
          </p>
          <br></br>
          <p>
            I've always had an interest in computers and technology, but never
            thought of pursuing it as a career until recently. I'm currently
            working as an office manager in a small appliance repair company. I
            enjoy playing video games on PC, spending time with friends and
            family, and playing with my pets in my free time. I also love
            watching horror movies!
          </p>
        </div>
      </div> */}
      <div className="grid h-full max-w-screen-xl px-8 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="font-bold text-black lg:mb-8 md:text-lg lg:text-8xl">
            ABOUT ME
          </h1>
        </div>
        <div className=" lg:mt-0 lg:col-span-5">
          <h2 className="max-w-2xl font-medium text-gray-800 lg:mb-8 md:text-lg lg:text-4xl">
            Hello & welcome to my portfolio!
          </h2>
          <p className="text-xl">
            I am a recent graduate of Georgia Tech's coding boot camp and have
            received my certificate in Full Stack web development. I have an
            interest in front-end development and am passionate about building
            user-friendly apps that provide the user with simple,
            straightforward designs and responsive experiences.
            <br></br>
            I've always had an interest in computers and technology, but never
            thought of pursuing it as a career until recently due to the
            pandemic. I'm currently working as an office manager in a small
            appliance repair company. I enjoy playing video games on PC,
            spending time with friends and family, and playing with my pets in
            my free time. I also love watching horror movies!
          </p>
        </div>
      </div>
    </div>
  );
});

export default About;
