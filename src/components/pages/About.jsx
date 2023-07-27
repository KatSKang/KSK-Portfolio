import React from "react";
import { forwardRef } from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";

const About = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="about min-[320px]:my-32" id="about">
      <div className="grid md:grid-cols-5 sm:gap-8 lg:gap-12 h-full max-w-screen-xl px-8 py-8 mx-auto min-[320px]:grid-cols-1">
        <div className="place-self-center col-span-2">
          <h1 className="font-bold text-zinc-900 lg:mb-8 sm:text-6xl lg:text-8xl min-[320px]:text-4xl tracking-wide">
            WHO AM I?
          </h1>
        </div>
        <div className="about-text place-self-center col-span-3 ">
          <p className="text-zinc-300 text-l mt-6 px-3 py-6 tracking-wide">
            I am a recent graduate of Georgia Tech's coding boot camp and have
            received my certificate in Full Stack Web Development in December
            2022. I have an interest in front-end development and creating
            intuitive UX/UI. I enjoy building user-friendly apps that provide
            users with simple, straightforward designs and responsive
            experiences.
          </p>
          <p className="text-zinc-300 text-l p-3 tracking-wide">
            Although I am new to the tech industry, I have years of experience
            in customer service, office management and administration. I also
            have a background in science (BS, Biology) and understand the
            importance of critical thinking and having an analytical mindset
            when encountering any problems.
          </p>
        </div>
      </div>
    </div>
  );
});

export default About;
