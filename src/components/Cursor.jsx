import React, { useEffect, useRef } from "react";
import Styles from "./cursor.module.css";

const Curosr = () => {
  const cursorRef = useRef(null);
  useEffect(() => {
    if (cursorRef.current == null || cursorRef == null) return;
    document.addEventListener("mousemove", (e) => {
      if (cursorRef.current == null) return;
      cursorRef.current.setAttribute(
        "style",
        "top: " + (e.pageY - scrollY) + "px; left: " + e.pageX + "px;"
      );
    });
    document.addEventListener("click", () => {
      if (cursorRef.current == null) return;
      cursorRef.current.classList.add(Styles.expand);
      setTimeout(() => {
        if (cursorRef.current == null) return;
        cursorRef.current.classList.remove(Styles.expand);
      }, 500);
    });
  }, []);
  return <div className={Styles.cursor} ref={cursorRef}></div>;
};

export default Curosr;
