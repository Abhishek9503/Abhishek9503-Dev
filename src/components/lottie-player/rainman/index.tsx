import React, { useRef } from "react";

export default function Rainman() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <lottie-player
      ref={ref}
      autoplay
      loop
      mode="normal"
      src="https://assets8.lottiefiles.com/packages/lf20_n9teq50f.json"
      style={{ width: "500px", height: "500px" }}
      speed="1"
    ></lottie-player>
  );
}
