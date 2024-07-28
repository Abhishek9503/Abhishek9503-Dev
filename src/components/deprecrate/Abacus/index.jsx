import React from "react";
import ImageItem from "./ImageItem";
import styles from "./styles.module.css";


const Abacus = ({theme}) => {

  const path = "/images/technical/";
  const images = [
    ["5", ""],
    ["6", ""],
    ["7", ""],
    ["8", " "],
    ["9", ""],
    ["10", "  "],
  ];

  const path2 = "/images/abacus/";
  const images2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <div className={styles.wrapper  + (theme === "dark" ? "dark":"")}>
      {/* {images.map((image, ind) => (
        <ImageItem
          key={ind}
          src={path + image[0] + "-min.jpg"}
          alt="image"
          title={image[1]}
        />
      ))} */}

      {images2.map((image, ind) => (
        <ImageItem
          key={ind + images.length}
          src={path2 + image + ".jpg"}
          alt="image"
          title="Events"
        />
      ))}
    </div>
    </>
  );
};

export default Abacus;
