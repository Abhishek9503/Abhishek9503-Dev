// import React, { useState } from "react";
// import styles from "./styles.module.css";
// import Esperanza from "../components/deprecrate/Esperanza";
// import Abacus from "../components/Abacus";
// import BrightGallery from "../components/lottie-player/gallerybright";

// const Gallery = () => {
//   const [active, setActive] = useState(true);

//   const mode = "";

//     const themeValue = mode != null ? mode : "default";

//   return (
//     <>
//    <div className="bg-[#050816]">
//    <div className="sm:h-[120px] h-[80px]" >
//     Hello
//    </div>
//    <div className={`${styles.header} `}>
//           <span></span>
//           <span></span>
//           <span></span>
       
       
//         <div className={styles.headerContainer}>
//           <div className={styles.lottiecont}>
//           {" "}
//           <BrightGallery />
//         </div>
//           <div className={styles.header_content }>
//             <p className={styles.gallerytext + (mode === "dark" ? ' ' + styles.dark : '')}>Gallery</p>
//             <span className={styles.gallerytext + (mode === "dark" ? ' ' + styles.dark : '')}>
//               A Picture Is Worth A Thousand Words.
//             </span>
//           </div>
//         </div>
        
//       <div className={styles.buttonContainer}>
//         <button
//           onClick={() => setActive(true)}
//           style={{
//             color: active ? "rgb(228, 31, 111)" : "rgb(35, 35, 35)",
//             boxShadow: active ? "0 0 20px rgb(228, 31, 111)" : "none",
            
//           }}
//         >
//           Self
//         </button>
//         <button
//           onClick={() => setActive(false)}
//           style={{
//             color: !active ? "rgb(228, 31, 111)" : "rgb(35, 35, 35)",
//             boxShadow: !active ? "0 0 20px rgb(228, 31, 111)" : "none",
            
//           }}
//         >
//           Event
//         </button>
//       </div>
        
//       </div>

//       {active && <Esperanza theme={mode} />}
//       {!active && <Abacus theme={mode}/>}
//    </div>
//     </>
//   );
// };

// export default Gallery;
