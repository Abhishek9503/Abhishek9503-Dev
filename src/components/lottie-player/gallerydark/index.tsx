import React from "react";
import Lottie from "react-lottie";
import animationData from "./gallerylottie3.json";

export default function DarkGallery() {
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
        height={"70%"}
        width={"40vw"}
        options={defaultOptions}
        speed={1.5}
      />
    </div>
  );
}
