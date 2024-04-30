import React from "react";
import Lottie from "react-lottie";
import animationData from "./reportlottie2.json";

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
      <Lottie
        options={defaultOptions}
        speed={1.5}
        style={{ height: "50%", width: "230px" }}
      />
    </div>
  );
}
