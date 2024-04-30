import React from "react";
import Lottie from "react-lottie";
import animationData from "./swipe.json";

export default function Slide() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie
        options={defaultOptions}
        style={{ height: "50px", width: "200px" }}
      />
    </div>
  );
}
