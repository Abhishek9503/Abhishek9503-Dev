import React from "react";

export default function Rainman() {
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <lottie-player
      src="https://assets2.lottiefiles.com/packages/lf20_bpqri9y8.json"
      background="transparent"
      speed="1"
      loop
      autoplay
    ></lottie-player>
  );
}
