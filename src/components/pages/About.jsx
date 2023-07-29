import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// const AboutTitle = () => {
//   const control = useAnimation();
//   const [ref, inView] = useInView();

//   useEffect(() => {
//     if (inView) {
//       control.start("visible");
//     }
//   }, [control, inView]);

//   return (
//     <motion.div
//       ref={ref}
//       animate={control}
//       initial="hidden"
//       variants={boxVariant}
//       className="place-self-center col-span-2 about-box"
//     >
//       <h1 className="font-bold text-zinc-900 lg:mb-8 sm:text-6xl lg:text-8xl min-[320px]:text-4xl tracking-wide">
//         WHO AM I?
//       </h1>
//     </motion.div>
//   );
// };

const titleVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 2 } },
  hidden: { opacity: 0, x: -200 },
};

const contVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  hidden: { opacity: 0, y: -200 },
};

const About = () => {
  const control = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div
      className="about min-[320px]:my-48 min-[320px]:mx-8 lg:my-56"
      id="about">
      <div className="grid md:grid-cols-5 sm:gap-8 lg:gap-12 h-full max-w-screen-xl mx-auto min-[320px]:grid-cols-1 md:p-4">
        <motion.div
          className="place-self-center col-span-2"
          ref={ref}
          variants={titleVariant}
          initial="hidden"
          animate={control}>
          <h1 className="font-bold text-zinc-900 lg:mb-8 sm:text-6xl lg:text-8xl min-[320px]:text-4xl tracking-wide">
            WHO AM I?
          </h1>
        </motion.div>
        <motion.div
          ref={ref}
          variants={contVariant}
          initial="hidden"
          animate={control}
          className="about-text place-self-center col-span-3 min-[320px]:w-fit min-[320px]:h-fit lg:w-full lg:h-96 ">
          <p className="text-zinc-300 text-l min-[320px]:mt-6 min-[320px]:px-3 min-[320px]:py-2 md:mt-0 md:py-4 lg:mt-8 tracking-wide">
            I am a recent graduate of Georgia Tech's coding boot camp and have
            received my certificate in Full Stack Web Development in December
            2022. I have an interest in front-end development and creating
            intuitive UX/UI. I enjoy building user-friendly apps that provide
            users with simple, straightforward designs and responsive
            experiences.
          </p>
          <p className="text-zinc-300 text-l min-[320px]:mt-6 min-[320px]:px-3 min-[320px]:pb-8 md:mt-0 md:py-4 lg:mt-8 tracking-wide">
            Although I am new to the tech industry, I have years of experience
            in customer service, office management and administration. I also
            have a background in science (BS, Biology) and understand the
            importance of critical thinking and having an analytical mindset
            when encountering any problems.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
