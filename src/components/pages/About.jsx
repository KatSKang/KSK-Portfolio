import React from "react";
import { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="about my-64 h-800" id="about">
      <div className="grid h-full max-w-screen-xl px-8 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="font-bold text-black lg:mb-8 md:text-lg lg:text-8xl">
            ABOUT ME
          </h1>
        </div>
        <div className=" lg:mt-0 lg:col-span-5 rounded p-6 shadow-2xl">
          <h2 className="max-w-2xl font-medium text-gray-800 lg:mb-8 md:text-lg lg:text-4xl border-b border-gray-800">
            Who am I?
          </h2>
          <p className="text-l mb-4">
            I am a recent graduate of Georgia Tech's coding boot camp and have
            received my certificate in Full Stack Web Development in December
            2022. I have an interest in front-end development and creating
            intuitive UX/UI. I enjoy building user-friendly apps that provide
            users with simple, straightforward designs and responsive
            experiences.
          </p>
          <p className="text-l">
            I've always had an interest in computers and technology, but never
            thought of pursuing it as a career until recently due to the
            Covid-19 pandemic. Although I am new to the tech industry, I have
            years of experience in customer service, office management and
            administration. I also have a background in science (BS, Biology)
            and understand the importance of critical thinking and having an
            analytical mindset when encountering problems.
          </p>
        </div>
      </div>
    </div>
  );
});

export default About;
