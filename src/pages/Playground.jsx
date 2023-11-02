import React, { useState, useEffect } from "react";
import { Spinner } from "../components";
import Spline from "@splinetool/react-spline";

const Playground = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
        setIsLoading(false)
    }, 6000);
  }, []);

  return (
    <div className="w-full h-full">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="w-full">
        <Spline scene="https://prod.spline.design/CXC90oesn2aWwg4o/scene.splinecode" />
        </div>
      )}
    </div>
  );
};

export default Playground;
