import React from "react"

import { logo } from "../assets"

const Footer = () => {
  return (
    <div className="bg-black-200 sm:px-16 px-6 sm:py-12 py-10 min-h-[250px] mt-20 select-none">
      <img src={logo} alt="logo" className="w-36 m-auto mb-5"  />

      <p className="text-secondary text-[17px] leading-[30px] text-center absolute  left-0 right-0 mx-auto">
        {new Date().getFullYear()} &copy; Abhishek. All rights reserved.
      </p>
    </div>
  )
}

export default Footer
