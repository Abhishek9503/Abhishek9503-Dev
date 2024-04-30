import React from "react";

export default function Rainman() {
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <lottie-player
      src="https://assets5.lottiefiles.com/packages/lf20_LDS3JQ.json"
      background="transparent"
      speed="1"
      style={{ width: "70px", height: "70px" }}
      loop
      autoplay
    ></lottie-player>
  );
}
