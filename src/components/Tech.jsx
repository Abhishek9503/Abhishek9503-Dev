// import React from "react";

// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";

// const Tech = () => {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {technologies.map((technology) => (
//         <div className='w-28 h-28' key={technology.name}>
//           <BallCanvas icon={technology.icon} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "");



import React from "react"
// import Tilt from "react-tilt"
import { Tilt } from "react-tilt";


// import Tilt from "react-tilt/dist/tilt"

import { motion } from "framer-motion"

import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { styles } from "../styles"

const TechCard = ({ index, icon }) => {
  return (
    <Tilt className="w-28 h-28">
      <div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className=" w-full green-pink-gradient p-[1px] rounded-full shadow-card select-none">
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-full py-5 flex justify-evenly items-center flex-col">
          <img src={icon} className="w-16 h-16 object-contain" />
        </div>
      </div>
    </Tilt>
  )
}

const Tech = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My tools</p>
        <h2 className={`${styles.sectionHeadText} text-center flux `}>
          Technologies.
        </h2>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {technologies.map((technology) => (
          <TechCard icon={technology.icon} key={technology.name} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "tech")

