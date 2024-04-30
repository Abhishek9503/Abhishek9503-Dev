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
      src="https://assets10.lottiefiles.com/private_files/lf30_h8sr4qjf.json"
      speed="1"
    ></lottie-player>
  );
}
