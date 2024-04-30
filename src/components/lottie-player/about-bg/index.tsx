import React, { useRef } from "react";
import Styles from "./aboutbg.module.css";

export default function AboutLottie() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <lottie-player
      ref={ref}
      src="https://assets7.lottiefiles.com/packages/lf20_goxlemcj.json"
      autoplay
      loop
      mode="normal"
      background="transparent"
      id={Styles.lottie}
      style={{ width: "1400px", height: "1400px" }}
    ></lottie-player>
  );
}
