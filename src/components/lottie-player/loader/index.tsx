import React, { useRef } from "react";

export default function LoaderLottie() {
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
      src="https://assets7.lottiefiles.com/private_files/lf30_iqqh9ket.json"
      style={{ width: "500px", height: "500px" }}
      speed="1"
    ></lottie-player>
  );
}
