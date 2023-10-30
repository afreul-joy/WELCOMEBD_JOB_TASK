import React from 'react';
import UseAnimations from "react-useanimations";
import infinity from 'react-useanimations/lib/infinity';

const Spinner = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <UseAnimations animation={infinity} size={100} />
    </div>
  );
};

export default Spinner;
