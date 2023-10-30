import React from "react";
import videobg from "../../../assets/Home/vdo-4.mp4";
import Search from "../../../../src/Components/Search/Search"

const Banner = () => {
  return (
    <>
      <div className="relative h-[27rem] md:h-[33rem]">
        <div className="absolute inset-0 z-10 bg-black bg-opacity-40 h-full"></div>
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videobg}
          autoPlay
          muted
          loop
        ></video>
        <div className="relative z-20 h-full flex flex-col items-center justify-center  dark:text-slate-300 text-white">
          <div className="h-full flex flex-col justify-center">
            <h1 className="text-3xl md:text-6xl text-white text-center font-bold mb-4 ">
              Welcome to Bangladesh!
            </h1>
            <h3 className="text-lg md:text-2xl text-slate-200 text-center mb-4">
              Explore Bangladesh's culture & beauty with us.
            </h3>
            <Search></Search>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
