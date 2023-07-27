import React, { useState } from "react";

const FORM_ENDPOINT = "https://formsubmit.co/0f1c3850ad75dbf702f5621bc3c51806";

const titleStyle =
  "font-bold text-zinc-900 lg:mb-8 sm:text-4xl lg:text-5xl min-[320px]:text-4xl uppercase text-center";

const labelStyle = "block mb-2 text-sm font-medium text-zinc-200";

const inputStyle =
  "bg-zinc-100 border border-gray-600 text-zinc-900 text-sm rounded-lg block w-full p-2.5";

const btnStyle =
  "bg-zinc-900 text-zinc-200  hover:bg-zinc-200 hover:text-zinc-900 py-2 px-4 rounded-md transition ease-in-out duration-300";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

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
    // <div id="contact" className="h-800 min-[320px]:my-32">
    //   <div className="grid md:grid-cols-5 sm:gap-8 lg:gap-12 h-full max-w-screen-xl px-8 py-8 mx-auto min-[320px]:grid-cols-1">
    //     <div className="place-self-center col-span-2"></div>
    //     <h2 className={titleStyle}>Contact Me</h2>
    //     <p className="mb-8 lg:mb-16 font-light text-center text-zinc-900 sm:text-xl">
    //       Have questions or want to collaborate? Feel free to message me.
    //     </p>
    //   </div>
    //   <div className="about-text place-self-center col-span-3 ">
    //     <form
    //       action={FORM_ENDPOINT}
    //       onSubmit={handleSubmit}
    //       method="POST"
    //       target="_blank"
    //       className="space-y-8">
    //       <div>
    //         <label
    //           for="name"
    //           className="block mb-2 text-sm font-medium text-gray-300">
    //           Your Name
    //         </label>
    //         <input
    //           type="text"
    //           name="name"
    //           className="bg-gray-300 border border-gray-600 text-gray-900 text-sm rounded-lg block w-full p-2.5"
    //           placeholder=""
    //           required></input>
    //       </div>
    //       <div>
    //         <label
    //           for="email"
    //           className="block mb-2 text-sm font-medium text-gray-300">
    //           Email
    //         </label>
    //         <input
    //           type="email"
    //           name="email"
    //           className="bg-gray-300 border border-gray-600 text-gray-900 text-sm rounded-lg block w-full p-2.5"
    //           placeholder=""
    //           required></input>
    //       </div>
    //       <div className="sm:col-span-2">
    //         <label
    //           for="message"
    //           className="block mb-2 text-sm font-medium text-gray-300">
    //           Message
    //         </label>
    //         <textarea
    //           name="message"
    //           rows="6"
    //           className="bg-gray-300 border border-gray-600 text-gray-900 text-sm rounded-lg block w-full p-2.5"
    //           placeholder="Leave a comment..."></textarea>
    //       </div>
    //       <button
    //         type="submit"
    //         className="py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg bg-teal-500 sm:w-fit hover:bg-teal-300">
    //         Send message
    //       </button>
    //     </form>
    //   </div>
    // </div>

    <div className="h-full bg-zinc-800" id="contact">
      <div className="grid md:grid-cols-5 sm:gap-8 lg:gap-12 h-full max-w-screen-xl px-8 py-8 mx-auto min-[320px]:grid-cols-1">
        <div className="place-self-center col-span-2">
          <h1 className="font-bold text-zinc-100 lg:mb-8 sm:text-5xl lg:text-7xl min-[320px]:text-4xl tracking-wide uppercase">
            Contact Me
          </h1>
          <p className="mb-8 lg:mb-16 font-light text-zinc-200 sm:text-xl">
            Have questions or want to collaborate? Feel free to message me.
          </p>
        </div>
        <div className="place-self-center col-span-3 w-[32rem]">
          <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            className="space-y-8">
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
            <div className="sm:col-span-2">
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
    </div>
  );
};

export default Contact;
