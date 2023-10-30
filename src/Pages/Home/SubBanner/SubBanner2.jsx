import React from "react";
import img from "/src/assets/SubBanner/service.png";
import { Link } from "react-router-dom";

const SubBanner2 = () => {
  return (
    <Link to="/explore">
      <div className="container mx-auto my-8 relative rounded-lg shadow-lg">
        <div className="w-full md:h-72 ">
          <img
            src={img}
            alt="SubBanner"
            className="md:h-72  md:w-full rounded-lg transition-transform transform hover:scale-105 duration-300"
          />
        </div>
      </div>
    </Link>
  );
};

export default SubBanner2;
