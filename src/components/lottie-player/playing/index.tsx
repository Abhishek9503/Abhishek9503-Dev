import React from "react";
import Lottie from "react-lottie";
import animationData from "./playing.json";

export default function WorkingMan() {
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
      <Lottie options={defaultOptions} speed={0.5} />
    </div>
  );
}
