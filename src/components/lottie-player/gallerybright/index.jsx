import React from "react";
import Lottie from "react-lottie";
import animationData from "./gallerylottiebright.json";

export default function BrightGallery() {
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
        height={"55%"}
        width={"75%"}
        options={defaultOptions}
        speed={1.5}
      />
    </div>
  );
}
