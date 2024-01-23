import React from "react"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"
import { CVDuncan } from "../constants"
import CVDoc from "../assets/CV_Ilya_Aleksin.pdf"

const Card = ({ index, text, name, designation, company, image }) => (
  <div className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full select-none">

    <div className="mt-1">

      <div className="mt-7 flex justify-between items-center gap-1">
    
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </div>
)

const CV = () => {
  return (
    <div className="bg-black-100 rounded-[20px]">
        
        <div className="flex min-[850px]:flex-row flex-col justify-around items-center">
            <img src={CVDuncan} alt="CVDuncan" className="w-[250px]" />

            <a href={CVDoc} download>
              <button className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary text-[21px]">
                Download CV
              </button>
            </a>
          </div>
        
      </div>
    
  )
}

export default SectionWrapper(CV, "cv")
