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
      <motion.div
        variants={fadeIn("right", "spring", 0.2 * index, 0.75)}
        initial="hidden"
        whileInView="show"
        className="w-full green-pink-gradient rounded-lg p-[1px] shadow-card select-none"
      >
        <div
          options={{ max: 45, scale: 1, speed: 5000 }}
          className="bg-tertiary rounded-lg py-5 flex justify-evenly items-center flex-col"
        >
          <img src={icon} className="w-16 h-16 object-contain" alt="technology" />
        </div>
      </motion.div>
    </Tilt>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
      >
        <p className={`${styles.sectionSubText} text-center`}>My tools</p>
        <h2 className={`${styles.sectionHeadText} text-center flux `}>
          Technologies.
        </h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology, index) => (
          <TechCard
            icon={technology.icon}
            key={technology.name}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
