import React from "react";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { holophin } from "../../../src/assets";
import { gitmap } from "../../assets";
import { styles } from "../../styles";
import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const Works = () => {
  return (
    <>
      <div className="flex justify-between mr-10">
        <motion.div variants={textVariant()}>
          <div>
            {/* <p className={`${styles.sectionSubText} mt-10`}>My work</p> */}
            <h2 className={`${styles.sectionHeadText} flux`}>Github Stats</h2>
          </div>
        </motion.div>

        <div
          className="flex justify-between "
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <a
            href="https://github.com/Abhishek9503 "
            target="_blank"
            className={`${styles.sectionSubText} flex items-center`}
          >
            View More <AiOutlineArrowRight />
          </a>
        </div>

        {/* <div variants={textVariant()}> */}
      </div>
      {/* <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-1 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div> */}

      <div className="mt-10 flex flex-wrap gap-20">
        <Tilt transition-all>
          <a href="https://app.daily.dev/Abhishek9503">
            <img
              className=""
              src="https://api.daily.dev/devcards/612db3c2a6bb4916824419a215f49bcd.png?r=xmo"
              width="400"
              alt="Abhishek Yadav's Dev Card"
            />
          </a>
        </Tilt>

        <div className="abhishek">
          <img
            width="100%"
            src="https://github-readme-stats.vercel.app/api?username=Abhishek9503&show_icons=true&theme=tokyonight"
          />
          <img
            width="100%"
            src="https://github-readme-streak-stats.herokuapp.com/?user=Abhishek9503&theme=tokyonight"
          />

          <img src={gitmap} width={500} alt="" />

          <a
            href="https://ko-fi.com/abhishek9503#paypalModal"
            target="_blank "
            className=" flex justify-start items-center gap-12 mt-5"
          >
            <img
              height="36"
              className="border-0px h-[36px] "
              src="https://cdn.ko-fi.com/cdn/kofi4.png?v=2"
              alt="Buy Me a Coffee at ko-fi.com"
            />

            <span className="abhishek-btn">
              ⭐⭐Give my Repo some stars⭐⭐
            </span>
          </a>
        </div>

        {/* <img className="mt-1" src={holophin} alt="holphin" /> */}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");

// import React from "react";
// import {Tilt} from "react-tilt";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { github } from "../assets";
// import { SectionWrapper } from "../hoc";
// import { projects } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";
// import { Link } from "react-router-dom";
// import {AiOutlineArrowRight } from 'react-icons/ai'

// const ProjectCard = ({
//   index,
//   name,
//   description,
//   tags,
//   image,
//   image2,
//   source_code_link,
// }) => {
//   return (
//     // <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} >
//       <Tilt
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
//       >
//         <div className='relative w-full h-[230px]  '>
//           <img
//             src={image}
//             alt='project_image'
//             className='w-full h-full object-cover rounded-2xl'
//           />

//           <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
//             <div
//               onClick={() => window.open(source_code_link, "_blank")}
//               className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
//             >
//               <img
//                 src={github}
//                 alt='source code'
//                 className='w-1/2 h-1/2 object-contain'
//               />
//             </div>

//           </div>

//         </div>

//         <div className='mt-5'>
//           <h3 className='text-white font-bold text-[24px]'>{name}</h3>
//           <p className='mt-2 text-secondary text-[14px]'>{description}</p>
//         </div>

//         <div className='mt-4 flex flex-wrap gap-2'>

//           {/* {tags.map((tag) => (
//             <p

//               key={`${name}-${tag.name}`}
//               className={`text-[14px] ${tag.color}`}

//             >

//               #{tag.name}
//             </p>

//           ))} */}

//    {/* <button>
//       <a href="" onClick={() => window.open(image2, "_blank")} > Deployed Web link</a>
//    </button> */}

//    <a  href="" onClick={() => window.open(image2, "_blank")} class=" relative inline-flex items-center justify-start py-2 pl-2 pr-2 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
// <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
// <span class="absolute right-0 pr-2 duration-200 ease-out group-hover:translate-x-12">
// <svg class="w-3 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
// </span>
// <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
// <svg class="w-3 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
// </span>
// <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Go TO WEB APP</span>
// </a>

// </div>
//       </Tilt>
//     // </motion.div>
//   );
// };

// const Works = () => {
//   return (
//     <>
//       <div className="flex justify-between mr-10">
//         {/* <motion.div variants={textVariant()}> */}
//        <div>
//        <p className={`${styles.sectionSubText} mt-10`}>My work</p>
//         <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
//        </div>
//       {/* </motion.div> */}

//       <div className="flex justify-between "
//        onClick={() => {
//               window.scrollTo(0, 0);
//       }}>
//        <Link to="/project" className={`${styles.sectionSubText} flex items-center`}>View More <AiOutlineArrowRight /></Link>
//        </div>

//       {/* <div variants={textVariant()}> */}
//     </div>
//       <div className='w-full flex'>
//         {/* <motion.p
//           variants={fadeIn("", "", 0.1, 1)}
//           className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
//         > */}
//           Following projects showcases my skills and experience through
//           real-world examples of my work. Each project is briefly described with
//           links to code repositories and live demos in it. It reflects my
//           ability to solve complex problems, work with different technologies,
//           and manage projects effectively.
//         {/* </motion.p> */}
//       </div>

//       <div className='mt-20 flex flex-wrap gap-7 '>
//         {projects.map((project, index) => (
//           <ProjectCard key={`project-${index}`} index={index} {...project} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Works, "");
