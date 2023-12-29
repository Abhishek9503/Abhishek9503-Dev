import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { github } from "../assets";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  project,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full "
  >
    <p className="text-white font-black text-[20px]">{project}</p>

    <div className="mt-3">
      {/* <p className='text-white tracking-wider text-[18px]'>{testimonial}</p> */}
      <img src={testimonial} alt="Project Image" />

      {/* <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-yellow-400  text-[16px] font-bold">
            <span className="blue-text-gradient"></span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} {company}
          </p>
        </div>

        <a
          href="https://github.com/Abhishek9503"
          target="_blank"
          onClick={() => window.open(source_code_link, "_blank")}
        >
          <img
            src={github}
            alt="source code"
            className="w-10 h-10 rounded-full object-cover"
          />
        </a>
      </div> */}
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            My current Learnings 
          </p>
          <h2 className={styles.sectionHeadText}>Certificates</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");

// import React from 'react'

// const Feedbacks = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Feedbacks
