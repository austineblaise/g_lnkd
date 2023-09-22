import React from "react";
import { RotatingLines } from "react-loader-spinner";

const LoaderSpinner = () => {
  return (
    <div>
      <RotatingLines
        strokeColor="white"
        strokeWidth="5"
        animationDuration="0.75"
        width="23"
        visible={true}
      />
    </div>
  );
};

export default LoaderSpinner;
