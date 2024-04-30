import React from "react";
import Styles from "./upev.module.css";

export default function Rainman() {
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <lottie-player
      src="https://assets4.lottiefiles.com/private_files/lf30_imu7829s.json"
      id={Styles.upev}
      background="transparent"
      speed="1"
      loop
      autoplay
      style={{ width: "100px", height: "100px" }}
    ></lottie-player>
  );
}
