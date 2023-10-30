import React, { useState } from "react";
import image from "../../../../src/assets/Home/newsltr.png";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="container mx-auto mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left column */}
        <div>
          <img
            src={image}
            alt="placeholder"
            className="w-full h-80 md:rounded-l-[25px] rounded"
          />
        </div>

        {/* Right column */}
        <div className="bg-gray-200 dark:bg-slate-900 dark:text-slate-200 text-slate-600 h-80 mt-2 md:mt-0 md:rounded-r-[25px] rounded p-4">
          <h1 className="text-4xl font-bold mb-4 capitalize ">
            Get special offers & Update!
          </h1>
          <p className="mb-6 dark:text-slate-400">
            Subscribe to see secret deals prices drop the moment you sign up!
          </p>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full relative px-10 py-4 rounded-full border dark:bg-gray-700 focus:outline-none focus:border-teal-500 focus:ring-2"
              />

            </form>
          ) : (
            <p className="text-green-500 font-semibold mt-2">
              Thank you for subscribing! please check your email.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
