import React from "react";
import Lottie from "react-lottie";
import animationData from "./cloud.json";

export default function CloudLottie() {
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
      <Lottie options={defaultOptions} speed={0.7} />
    </div>
  );
}
