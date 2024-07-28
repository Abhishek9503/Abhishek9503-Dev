import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { testimonials } from "../../constants";

const FeedbackCard = ({
  index,
  testimonial,
  project,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200  p-5 rounded-3xl xs:w-[320px] w-full "
  >
    <p className="text-white font-black text-[20px]">{project}</p>
    

    <div className="mt-3">
      <img src={testimonial} alt="Project Image" />

     </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div
      className={`mt-1 bg-abstract bg-cover bg-no-repeat bg-center rounded-[20px]`}
    >
      <div className={` rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My current Learnings</p>
          <h2 className={`${styles.sectionHeadText} `}>Certificates</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14  ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
