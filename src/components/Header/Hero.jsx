import React, { useRef } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils/motion";

// Social icons
import { 
  BsTwitter, 
  BsGithub, 
  BsDiscord, 
  BsInstagram, 
  BsLinkedin 
} from "react-icons/bs";

// Avatar card component with Tilt effect
const AvatarCard = ({ reference }) => (
  <Tilt className="xs:w-[250px] w-full cursor-move">
    <motion.div
      drag
      dragConstraints={{
        left: -200,
        top: -200,
        right: 100,
        bottom: -100, // Fixed "down" to "bottom"
      }}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.2}
      variants={fadeIn("right", "spring", 0.5, 0.75)}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="w-full"
      >
        <div className="abhishek hover:hoverAbhishekbg flex items-center justify-center 
                        lg:w-96 lg:h-96 w-[12.5rem] h-[12.5rem] max-[350px]:w-[10.5rem] max-[350px]:h-[10.5rem]
                        mx-auto bg-gradient-to-b from-blue-800 via-purple-700 to-red-700 
                        hero-animation will-change-transform shadow-card">
          <div className="bg-avatar Abhishekbg hover:bg-avatar1 bg-cover bg-no-repeat bg-[50%] 
                          justify-self-center lg:w-[374px] lg:h-[374px] w-48 h-48 max-[350px]:w-40 max-[350px]:h-40 
                          hero-animation will-change-transform" />
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const Hero = () => {
  const avatarRef = useRef(null);

  const [text] = useTypewriter({
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

  const socialLinks = [
    { Icon: BsLinkedin, url: "https://www.linkedin.com/in/abhishek-yadav17/" },
    { Icon: BsGithub, url: "https://github.com/Abhishek9503" },
    { Icon: BsTwitter, url: "https://twitter.com/Abhishe9503" },
    { Icon: BsDiscord, url: "https://discord.com/channels/@me" },
    { Icon: BsInstagram, url: "https://www.instagram.com/abhishek__yadav17_/" },
  ];

  return (
    <section className="w-full mx-auto">
      <div
        className={`${styles.paddingX} pt-40 max-w-7xl sm:mx-auto flex lg:flex-row flex-col-reverse pl-25 md:pl-10 items-start md:gap-20 gap-5`}
      >
        <div>
          <div className="flex gap-3">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
              <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
            </div>

            <div className="lg:w-[32rem]">
              <p>Hi, I'm</p> <br />
              <h1 className={`${styles.heroHeadText} text-white`}>
                <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
                  Abhishek Yadav
                </span>
              </h1>

              <p className={`${styles.heroSubText} h-8 mt-2 text-white-100 max-w-lg`}>
                {text}{" "}
                <Cursor cursorColor="#915eff" />
              </p>
            </div>
          </div>

          <div className="text-[30px] md:text-[35px] flex justify-center gap-5 items-center md:gap-12 mt-8 md:mt-0 mb-20">
            {socialLinks.map(({ Icon, url }, index) => (
              <Link 
                key={index} 
                to={url} 
                target="_blank" 
                className="hover:-translate-y-1 transition-all duration-100"
              >
                <Icon className="text-white" />
              </Link>
            ))}
          </div>
        </div>

        <div ref={avatarRef} className="w-full">
          <AvatarCard reference={avatarRef} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
