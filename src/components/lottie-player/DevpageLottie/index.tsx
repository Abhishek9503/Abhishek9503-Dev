import React from "react";
import Lottie from "react-lottie";
import animationData from "./devpgnewlottie.json";

export default function DevPgLottie() {
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
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
}
