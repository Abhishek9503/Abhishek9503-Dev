import React from "react";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AnimatedTestimonials } from "../ui/animated-testimonals";
import gitmap from "../../assets/gitmap.png";
import diwali from "../../assets/my-images/diwali.jpg" ;
import launch from "../../assets/my-images/launch.jpg" ;
import mic from "../../assets/my-images/mic.jpg" ;
import prize from "../../assets/my-images/prize.jpg" ;
import { holophin } from "../../assets";

const StatisticPage = () => {

  const testimonials = [
    {
      quote: "This product has completely transformed the way I work. Highly recommended!",
      name: "Jane Doe",
      designation: "Software Engineer",
      src: diwali,
    },
    {
      quote: "Exceptional service and quality. I couldn't be happier with my experience.",
      name: "John Smith",
      designation: "Product Manager",
      src: launch, 
    },
    {
      quote: "A wonderful tool that has saved me countless hours. Great work by the team!",
      name: "Emily Davis",
      designation: "Designer",
      src: mic, 
    },
    {
      quote: "A wonderful tool that has saved me countless hours. Great work by the team!",
      name: "TechHunterees Hackthon",
      designation: "Designer",
      src: prize, 
    },
  ];

  return (
    <>
      <div className="flex justify-between  mt-12 md:mt-2">
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

      <div className="mt-10 flex items-center justify-center flex-wrap gap-20">
        <Tilt transition-all>
          <a href="https://app.daily.dev/Abhishek9503">
            <img
              className=""
              src="https://api.daily.dev/devcards/612db3c2a6bb4916824419a215f49bcd.png?r=xmo"
              width="400"
              alt="Abhishek Yadav's Dev Card"
            />
          </a>

          <img src="https://komarev.com/ghpvc/?username=Abhishek9503" alt="Profile Views" />

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

        <img className="mt-1" src={holophin} alt="holphin" />


      


        <AnimatedTestimonials testimonials={testimonials}/>

      </div>
    </>
  );
};

export default SectionWrapper(StatisticPage, "");
