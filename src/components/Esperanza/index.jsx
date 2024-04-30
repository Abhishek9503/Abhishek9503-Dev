import React, { useState } from "react";
import ImageItem from "./ImageItem";
import styles from "./styles.module.css";


const Esperanza = ({theme}) => {


  const path1 = "./images/cultural/";
  const images1 = [
    ["1", " "],
    ["2", " "],
    ["3", " "],
    ["4", " "],
    ["5", " "],
  ];

  const path2 = "./images/esperanza/";
  const images2 = [1, 2, 3, 7, 4, 6, 8, 5, 9, 31];


  return (
    <>
       <div className={styles.wrapper  + (theme === "dark" ? "dark":"")}>
      {images1.map((image, ind) => (
        <ImageItem
          key={ind}
          src={path1 + image[0] + "-min.jpg"}
          alt="image"
          title={image[1]}
        />
      ))}

      {/* {images2.map((image, ind) => (
        <ImageItem
          key={ind + image.length}
          src={path2 + image + "-min.jpg"}
          alt="image"
          title="Esperanza"
        />
      ))} */}
    </div>
    </>
  );
};

export default Esperanza;
