import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { styles } from "../../styles";

const TechCard = ({ index, icon }) => {
  return (
    <Tilt className="w-28 h-28">
      <div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className=" w-full green-pink-gradient rounded-lg p-[1px] shadow-card select-none"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-lg py-5 flex justify-evenly items-center flex-col"
        >
          <img src={icon} className="w-16 h-16 object-contain" />
        </div>
      </div>
    </Tilt>
  );
};

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


      {/* <div className="flex flex-wrap  justify-center gap-10 mt-10 w-50">
  {technologies.map((technology) => (
    <div
      key={technology.name}
      className="relative group w-24 h-24 rounded-xl bg-gray-800 flex items-center justify-center transition-all duration-300"
    >
    
      <div className="absolute inset-0 rounded-xl opacity-0 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 blur-lg transition-all duration-300 group-hover:opacity-100"></div>

   
      <div className="z-10 text-white">
        <TechCard icon={technology.icon} />
      </div>

     
      <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-purple-500 group-hover:shadow-[0_0_20px_rgba(128,0,255,0.7)] transition-all duration-300"></div>
    </div>
  ))}
</div> */}


      
    </>
  );
};

export default SectionWrapper(Tech, "tech");
