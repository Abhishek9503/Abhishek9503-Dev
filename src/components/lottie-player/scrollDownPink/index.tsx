import React, { useRef } from "react";
export default function Rainman() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <lottie-player
      ref={ref}
      src="https://assets5.lottiefiles.com/packages/lf20_zcHPSW8Gsv.json"
      background="transparent"
      speed="1"
      loop
      autoplay
    ></lottie-player>
  );
}
