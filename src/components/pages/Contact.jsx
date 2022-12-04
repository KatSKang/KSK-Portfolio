import React, { useState } from "react";

const FORM_ENDPOINT = "https://formsubmit.co/0f1c3850ad75dbf702f5621bc3c51806";

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
        <div className="text-2xl text-center text-gray-200">Thank you!</div>
        <div className="text-md text-center text-gray-200">
          We'll be in touch soon.
        </div>
      </>
    );
  }

  return (
    <div>
      <h1 className="text-4xl my-4 border-b text-center text-gray-200">
        Contact Me
      </h1>
      <section>
        <div className="py-4 lg:py-8 px-4 mx-auto max-w-screen-md">
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">
            Have questions or want to collaborate? Feel free to message me.
          </p>
          <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
            className="space-y-8">
            <div>
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                className="bg-gray-300 border border-gray-600 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder=""
                required></input>
            </div>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="bg-gray-300 border border-gray-600 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder=""
                required></input>
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                rows="6"
                className="bg-gray-300 border border-gray-600 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Leave a comment..."></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg bg-teal-500 sm:w-fit hover:bg-teal-300">
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
