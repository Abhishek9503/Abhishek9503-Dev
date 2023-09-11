
import React from 'react';
import { Tilt } from 'react-tilt'


import { motion } from "framer-motion";
import { CVDuncan } from "../constants"

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import resume from '/src/Abhishek.pdf'


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full transition-all'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex 
        justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>


      <motion.div variants={textVariant()}>
        <div className='flex justify-between'>
          <div>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </div >
          <div className='  flex items-center flex-wrap'>
            <img src={CVDuncan} alt="CVDuncan" className="w-[250px]" />
            <a href={resume} download="Abhishek.pdf">
              <button className="md:hero-animation1 bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary text-[21px]">
                Download CV
              </button>
            </a>
          </div>
        </div>


      </motion.div>



      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className=' mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        An enthusiastic and motivated Student in  the field of Computer Science
        with a keen interest  in Full Stack Development. I love to build software
        that makes an impact on my organization and the world.
        I enjoy solving complex problem and taking on challenging tasks. I am currently
        learning  Data structure and algorithm for my interest in problem solving.
        I am a quick learner and open to working in any technology . Detailed Oriented Consistency
        and Hard work are some of my top qualities . I believe consistent practice brings excellence.


      </motion.p>



      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>






    </>
  );
};

export default SectionWrapper(About, "about");

// import React from 'react';
// import { Tilt } from 'react-tilt'


// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { services } from "../constants";

// import { fadeIn, textVariant } from "../utils/motion";

// const About=()=>{
//   return(
//     <>
//      <motion.div variants={textVariant()}>
//        <p className={styles.sectionSubText}>Introduction</p>
//         <h2 className={styles.sectionHeadText}>Overview.</h2>
//      </motion.div>
//     </>
//   )
// }

// export default About