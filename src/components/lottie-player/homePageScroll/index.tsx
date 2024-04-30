import React from "react";
import Lottie from "react-lottie";
import animationData from "./scrollanime.json";

export default function ScrollAnimation() {
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
      <Lottie options={defaultOptions} speed={1.5} />
    </div>
  );
}
