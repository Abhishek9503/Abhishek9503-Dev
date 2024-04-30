import React, { useRef } from "react";
import Styles from "./styles.module.css";

export default function Rainman() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <lottie-player
      ref={ref}
      id={Styles.headLottie}
      src="https://assets7.lottiefiles.com/private_files/lf30_dsx6vnmh.json"
      background="transparent"
      speed="1"
      loop
      autoplay
    ></lottie-player>
  );
}
