import React from "react";
import travel from "../../../src/assets/Animation/TravelAnimation.json";
import Lottie from "lottie-react";

const TravelAnimation = () => {
  return (
    <div >
      <div   >
        <Lottie  style={{width : '100%', height:'400px'}} loop={true} autoplay={true} animationData={travel} />
      </div>
    </div>
  );
};

export default TravelAnimation;
