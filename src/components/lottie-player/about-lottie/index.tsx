import React, { useRef } from "react";

export default function AboutLottie() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <lottie-player
      ref={ref}
      src="https://assets3.lottiefiles.com/packages/lf20_bq13w0xb.json"
      autoplay
      loop
      mode="normal"
      speed="0.8"
      background="transparent"
    ></lottie-player>
  );
}
