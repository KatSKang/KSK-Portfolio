import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FORM_ENDPOINT = "https://formsubmit.co/0f1c3850ad75dbf702f5621bc3c51806";

const titleStyle =
  "font-bold text-zinc-100 sm:mb-4 lg:mb-8 sm:text-4xl md:text-5xl lg:text-7xl tracking-wide uppercase";

const labelStyle = "block mb-2 text-sm font-medium text-zinc-200";

const inputStyle =
  "bg-zinc-100 border border-gray-600 text-zinc-900 text-sm rounded-lg block w-full p-2.5";

const btnStyle =
  "bg-zinc-900 text-zinc-200  hover:bg-zinc-200 hover:text-zinc-900 py-2 px-4 rounded-md transition ease-in-out duration-300";

const boxVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, x: 2 },
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  const control = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  if (submitted) {
    return (
      <>
        <div className="text-2xl text-center text-zinc-900">Thank you!</div>
        <div className="text-md text-center text-zinc-900">
          We'll be in touch soon.
        </div>
      </>
    );
  }

  return (
    <motion.div
      className="h-full bg-zinc-800"
      id="contact"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}>
      <div className="grid md:grid-cols-5 sm:gap-8 lg:gap-12 h-full max-w-screen-xl px-8 py-8 mx-auto max-sm:grid-cols-1">
        <div className="place-self-center col-span-2">
          <h1 className={titleStyle}>Contact Me</h1>
          <p className="mb-8 lg:mb-16 font-light text-zinc-200 md:text-l lg:text-xl">
            Have questions or want to collaborate? Feel free to message me.
          </p>
        </div>
        <div className="place-self-center col-span-3 lg:w-[32rem] md:w-72">
          <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            className="space-y-4">
            <div>
              <label for="name" className={labelStyle}>
                Your Name
              </label>
              <input
                type="text"
                name="name"
                className={inputStyle}
                placeholder=""
                required></input>
            </div>
            <div>
              <label for="email" className={labelStyle}>
                Email
              </label>
              <input
                type="email"
                name="email"
                className={inputStyle}
                placeholder=""
                required></input>
            </div>
            <div>
              <label for="message" className={labelStyle}>
                Message
              </label>
              <textarea
                name="message"
                rows="6"
                className={inputStyle}
                placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" className={btnStyle}>
              Send message
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
