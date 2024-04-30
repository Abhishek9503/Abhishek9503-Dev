import React, { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <lottie-player
      ref={ref}
      mode="normal"
      id="pattern"
      src="https://assets1.lottiefiles.com/packages/lf20_WfrFg5.json"
      background="transparent"
      speed="0.4"
      loop
      autoplay
    ></lottie-player>
  );
}
