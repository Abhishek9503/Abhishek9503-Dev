import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../../styles";
import { navLinks } from "../../constants";
import { logo, menu, close } from "../../assets";
import resume from "/src/Abhishek's Resume.pdf";

import { Router } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const { linkRef } = useRef(null);
  return (
    <nav
      className={` ${styles.paddingX}  w-full flex items-center py-2 fixed top-0 z-20  backdrop-blur-md`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-16 h-20  
        object-contain  "
          />
          <p
            className="text-white text-[18px]  mt-4 
        font-bold cursor-pointer flex"
          >
            Full Stack Developer&nbsp; <span className="sm:block hidden"></span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row items-center gap-10">
          <a href={resume} download="Abhishek.pdf">
            <button
              className={`${
                active === Link.title ? "abhishek" : "abhishek-btn"
              }   font-medium cursor-pointer border-[1px]`}
              onClick={() => setActive(Link.title)}
            >
              <span className="flex items-center">
                {" "}
                <svg
                  class="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>{" "}
                Download Cv
              </span>
            </button>
          </a>

          <Link
            ref={linkRef}
            to="/project"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className={`${
              active === Link.title ? "  text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
          >
            Projects
          </Link>

          <Link
            ref={linkRef}
            to="/Experience"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className={`${
              active === Link.title ? "  text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
          >
            Experience
          </Link>

          <Link
            ref={linkRef}
            to="/Gallery"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className={`${
              active === Link.title ? "  text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
          >
            Gallery
          </Link>

          <Link
            ref={linkRef}
            to="/play"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className={`${
              active === Link.title ? "  text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
          >
            Playground
          </Link>

          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}
            >
              <a href={` #${Link.id}`}> {Link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px]  object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient 
          absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex  justfy-end items-start flex-col gap-4">
              <a href={resume} download="Abhishek Abhishek.pdf">
                <button
                  className={`${
                    active === Link.title ? " abhishek" : "abhishek-btn"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => setActive(Link.title)}
                >
                  <span className="flex items-center">
                    {" "}
                    <svg
                      class="fill-current w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>{" "}
                    Download Cv
                  </span>
                </button>
              </a>
              <Link
                ref={linkRef}
                to="/project"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className={`${
                  active === Link.title ? "  text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              >
                Projects
              </Link>

              <Link
                ref={linkRef}
                to="/Experience"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className={`${
                  active === Link.title ? "  text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              >
                Experience
              </Link>

              {navLinks.map((Link) => (
                <li
                  key={Link.id}
                  className={`${
                    active === Link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium  cursor-pointer  text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(Link.title);
                  }}
                >
                  <a href={` #${Link.id}`}> {Link.title}</a>
                </li>
              ))}

              <a href="https://hashnode.com/@Abhishek9503" target="_blank">
                <button
                  className={`${
                    active === Link.title ? "  text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => setActive(Link.title)}
                >
                  <span className="flex items-center"> Blogs</span>
                </button>
              </a>

              <a href="https://abhishek-bio.onrender.com/" target="_blank">
                <button
                  className={`${
                    active === Link.title ? "  text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => setActive(Link.title)}
                >
                  <span className="flex items-center"> Socials</span>
                </button>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
