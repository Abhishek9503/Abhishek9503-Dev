import React from "react";

import { logo } from "../assets";
import { styles } from "../styles";
import Clock from "./Clock";

const Footer = () => {
  return (

    <div className="  flex justify-evenly align-center relative  sm:px-16 px-6 sm:py-12 py-10 min-h-[250px] mt-20 select-none">

<div className="flex flex-col gap-5 ">
          <a href="https://www.linkedin.com/in/abhishek-yadav17/"  target="_blank" className="abhishek relative inline-block text-lg group">
            <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span class="relative">Linkedin</span>
            </span>
            <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear  rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
          </a>
          <a href="https://github.com/Abhishek9503" target="_blank"  className="abhishek relative inline-block text-lg group">
            <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span class="absolute  left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span class="relative">Github</span>
            </span>
            <span class="absolute bottom-1 right-1 w-4/5 h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear  rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
          </a>
          <a href="https://leetcode.com/Abhishek9503/" target="_blank"  className=" abhishek relative inline-block text-lg group">
            <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span class="relative">Leetcode</span>
            </span>
            <span class="absolute bottom-1 right-1 w-4/5 h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
          </a>
        
        </div>

      <div className="flex  flex-col items-center">

        <img src={logo} alt="logo" className="w-36  mb-5" />

        <p className="text-secondary text-[17px] leading-[30px] text-center   left-0 right-0 cle">
          {new Date().getFullYear()} &copy; Abhishek. All rights reserved.
        </p>

      </div>

      <div>
        <a
          href="#about"
          className="w-fit abhishek mx-auto flex items-center justify-center gap-6 bg-tertiary lg:px-7 lg:py-3 px-4 py-2 rounded-xl lg:mt-10 mt-5 cursor-pointer max-[350px]:hidden select-none"
        >
          <div className="group border-[3px] border-white rounded-full h-12 w-7 flex justify-center lg:scale-100 scale-75">
            <div className="bg-white h-3 w-1 rounded-full mt-[10px] animate-bounce lg:scale-100 scale-75"></div>
          </div>

          <a href="https://www.hitwebcounter.com" target="_blank">
            <img
              src="https://hitwebcounter.com/counter/counter.php?page=8792236&style=0001&nbdigits=3&type=page&initCount=1"
              title="Counter Widget"
              Alt="Visit counter For Websites"
              border="0"
            />
          </a>

          <p className={styles.sectionSubText}>Portfolio Visits</p>
        </a>

      </div>
    </div>
  );
};

export default Footer;
