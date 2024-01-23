import React, { useRef } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";

import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const ServiceCard = ({ index, title, icon, reference }) => (
  <Tilt className="xs:w-[250px] w-full ">
    <motion.div
      drag dragConstraints={{
        left:-200,
        top:-200,
        right:100,
        down:-100
      }

      }
      whileDrag={{scale:1.2, }}
       dragElastic={0.2}
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className=""
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="w-full "
      >
        <div className="abhishek hover:hoverAbhishekbg flex items-center justify-center lg:w-96 lg:h-96 w-[12.5rem] h-[12.5rem] max-[350px]:w-[10.5rem] max-[350px]:h-[10.5rem] mx-auto bg-gradient-to-b from-blue-800 via-purple-700 to-red-700 hero-animation will-change-transform shadow-card   ">
          <div className="bg-avatar Abhishekbg hover:bg-avatar1 bg-cover bg-no-repeat bg-[50%]  justify-self-center lg:w-[374px] lg:h-[374px] w-48 h-48 max-[350px]:w-40 max-[350px]:h-40 hero-animation will-change-transform " />
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const Hero = () => {
  const ref = useRef(null);
  const [isExploding, setIsExploding] = React.useState(true);

  const [text, count] = useTypewriter({
    words: [
      "I'm Web Developer",
      "I'm Fitness Freak",
      "I'm Retrogamer",
      "GuyWhoLovesTea.jsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <section className="w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} cursor-pointer  h-screen max-w-7xl mx-auto flex lg:flex-row flex-col-reverse  pl-25 md:pl-10 mt-10 sm:justify-center items-start  md:gap-20 gap-5  pt-20`}
      >
        <div>
          <div className="flex gap-3 ">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
              <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
            </div>

            <div className="lg:w-[32rem]">
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <br />
                <span className=" animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
                  Abhishek Yadav
                </span>
              </h1>

              <p
                className={`${styles.heroSubText} mt-2 text-white-100 max-w-lg`}
              >
                {text}
                <Cursor cursorColor="#915eff" />
              </p>
            </div>
          </div>

          <div className="flex">
            <a
              href="#tech"
              className="  w-fit mx-auto flex items-center justify-center gap-6 bg-tertiary lg:px-7 lg:py-3 px-4 py-2 rounded-xl lg:mt-10 mt-5 cursor-pointer max-[350px]:hidden select-none"
            >
              <div className=" group border-[3px] border-white rounded-full md:h-12 h-10 w-7 flex justify-center lg:scale-100 scale-75">
                <div className="bg-white h-3 w-1 rounded-full mt-[10px] animate-bounce lg:scale-100 scale-75"></div>
              </div>

              <p className=" ">
                {/* <span className="faulty-letter">Down</span><span className=" glowing-txt">Scroll</span>
              
               */}
                Scroll Down
              </p>
            </a>
          </div>

          <div className="text-[20px] md:text-[35px] flex justify-center gap-5  items-center md:mt-10 mt-5 md:gap-12 sm:mb-20  ">
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/abhishek-yadav17/"
            >
              {" "}
              <BsLinkedin className=" text-white mr-2 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:mr-0 -md:my-[1px]" />
            </Link>

            <Link target="_blank" to="https://github.com/Abhishek9503">
              <BsGithub className="mx-2 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:mx-0 -md:my-[1px]" />
            </Link>

            <Link target="_blank" to="https://twitter.com/Abhishe9503">
              <BsTwitter className="ml-2 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:ml-0 -md:my-[1px]  " />
            </Link>
            <Link target="_blank" to="https://discord.com/channels/@me">
              <BsDiscord className="mx-4 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:mx-0 -md:my-[1px]" />
            </Link>

            <Link
              target="_blank"
              to="https://www.instagram.com/abhishek__yadav17_/"
            >
              <BsInstagram className="mx-2 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:mx-0 -md:my-[1px]" />
            </Link>
          </div>
        </div>

        <div ref={ref} className="w-full mt-10 ">
          <ServiceCard reference={ref} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
