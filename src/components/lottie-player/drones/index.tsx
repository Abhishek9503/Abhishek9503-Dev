import React from "react";
import Styles from "./drones.module.css";

export default function Rainman() {
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <lottie-player
      src="https://assets3.lottiefiles.com/packages/lf20_jidltgpb.json"
      background="transparent"
      speed="1"
      id={Styles.drones}
      loop
      autoplay
    ></lottie-player>
  );
}
