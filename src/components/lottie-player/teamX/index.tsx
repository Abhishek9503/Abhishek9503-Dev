import React, { useRef } from "react";
import Styles from "./teamx.module.css";

export default function Rainman() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <lottie-player
      ref={ref}
      className={Styles.lotTeam}
      src="https://assets7.lottiefiles.com/packages/lf20_gghk4m0m.json"
      background="transparent"
      speed="1"
      style={{ width: "300px", height: "300px" }}
      loop
      autoplay
    ></lottie-player>
  );
}
