// import React from 'react'
// import { motion } from 'framer-motion'

// import { styles } from '../styles'
// import {ComputersCanvas} from './canvas'
// const Hero = () => {
//   return (
//    <section className="realtive w-full h-screen mx-auto">

//     <div className={`${styles.paddingX } absolute inset-0 top-[120px]
//      max-w-7xl mx-auto flex flex-row items-start gap-5 `}>

//       <div className='flex flex-col justify-center items-center mt-5'>
       
//         <div className='w-5 h-5 rounded-full bg-[#915eff]'/>

//         <div className='w-1 sm:h-80 h-40 violet-gradient'/>

//         </div>

//         <div className={`${styles.heroHeadText} text-white`}>
//           <h1>Hi, I'm <span className='text-[#915eff]'> Abhishek</span></h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             I develop website , user <br className='sm:block hidden' /> 
//             interfaces and web application
//           </p>
//         </div>

//         </div>
        
//         <ComputersCanvas />
//         <div className='absolute xs:bottom-10 w-full flex justify-center items-center'>
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className='w-3 h-3 rounded-full bg-secondary mb-1'
//             />
//           </div>
//         </a>
//       </div>
      
       
//     </section>
//   );
// };

// export default Hero;



// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

// const Hero = () => {
//   return (

    
//     <section className={`relative w-full h-screen mx-auto `}>
//       <div
//         className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX}  flex flex-row items-start gap-5`}
//       >
//         <div className='flex flex-col justify-center items-center mt-5'>
//           <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
//           <div className='w-1 sm:h-80 h-40 violet-gradient' />
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className='text-[#915EFF]'>Abhishek Yadav</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//            Mern Stack Developer  <br className='sm:block hidden' />
//             Competitive Programmer
//           </p>
//         </div>
//       </div>

//       <ComputersCanvas />

//       <div className='absolute xs:bottom-1 bottom-32 w-full flex justify-center items-center'>
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className='w-3 h-3 rounded-full bg-secondary mb-1'
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import React from "react"
import { Cursor, useTypewriter } from "react-simple-typewriter"

import { styles } from "../styles"

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
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
        className='w-full'
      >
      
       <div className="flex items-center justify-center lg:w-96 lg:h-96 w-[12.5rem] h-[12.5rem] max-[350px]:w-[10.5rem] max-[350px]:h-[10.5rem] mx-auto bg-gradient-to-b from-blue-800 via-purple-700 to-red-700 hero-animation will-change-transform shadow-card"></div>

       <div className="bg-avatar bg-cover bg-no-repeat bg-[50%]  justify-self-center lg:w-[374px] lg:h-[374px] w-48 h-48 max-[350px]:w-40 max-[350px]:h-40 hero-animation will-change-transform" />
       
      </div>
    </motion.div>
  </Tilt>
);




const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "I'm Web Developer",
      "I'm Fitness Freak",
      "I'm Retrogamer",
      "GuyWhoLovesTea.jsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <section className="w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} h-screen max-w-7xl mx-auto flex lg:flex-row flex-col-reverse items-center justify-center gap-5 pt-10`}>
        <div>
          <div className="flex gap-3 select-none">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
              <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
            </div>

            <div className="lg:w-[32rem]">
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <br />
                <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
                  Abhishek Yadav is DON
                </span>
              </h1>

              <p
                className={`${styles.heroSubText} mt-2 text-white-100 max-w-lg`}>
                {text}
                <Cursor cursorColor="#915eff" />
              </p>
            </div>
          </div>

          <a
            href="#about"
            className="w-fit mx-auto flex items-center justify-center gap-6 bg-tertiary lg:px-7 lg:py-3 px-4 py-2 rounded-xl lg:mt-10 mt-5 cursor-pointer max-[350px]:hidden select-none">
            <div className="group border-[3px] border-white rounded-full h-12 w-7 flex justify-center lg:scale-100 scale-75">
              <div className="bg-white h-3 w-1 rounded-full mt-[10px] animate-bounce lg:scale-100 scale-75"></div>
            </div>

            <p>Scroll Down</p>
          </a>
        </div>

        <div className="w-full">
          <div className="flex items-center justify-center lg:w-96 lg:h-96 w-[12.5rem] h-[12.5rem] max-[350px]:w-[10.5rem] max-[350px]:h-[10.5rem] mx-auto bg-gradient-to-b from-blue-800 via-purple-700 to-red-700 hero-animation will-change-transform shadow-card">
            <div className="bg-avatar bg-cover bg-no-repeat bg-[50%]  justify-self-center lg:w-[374px] lg:h-[374px] w-48 h-48 max-[350px]:w-40 max-[350px]:h-40 hero-animation will-change-transform" />
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Hero
