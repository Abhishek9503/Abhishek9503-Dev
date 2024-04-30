import React from "react";
import Lottie from "react-lottie";
import animationData from "./CSSlogoanimation.json";

export default function NetworkLottie() {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie
        options={defaultOptions}
        style={{ height: "600px", width: "600px" }}
        speed={0.7}
      />
    </div>
  );
}
