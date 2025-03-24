import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../../styles";
import { navLinks } from "../../constants";
import { logo, menu, close } from "../../assets";
// Removed resume import as it's no longer needed

const NavigationLink = ({ to, label, active, setActive }) => {
  const linkRef = useRef(null);

  return (
    <Link
      ref={linkRef}
      to={to}
      onClick={() => {
        setActive(label);
        window.scrollTo(0, 0);
      }}
      className={`${active === label ? "text-white" : "text-secondary"
        } hover:text-white text-[18px] font-medium cursor-pointer`}
    >
      {label}
    </Link>
  );
};

// DownloadButton component has been removed

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const navigationItems = [
    { to: "/project", label: "Projects" },
    { to: "/Experience", label: "Experience" },
    { to: "/statistics", label: "Code Statistics" }
  ];

  return (
    <nav
      className="px-5 w-full flex justify-center items-center py-2 fixed top-0 z-20 backdrop-blur-md"
    >
      <div className="glow-on-hover w-full flex justify-between border rounded-lg px-2 items-center max-w-7xl">
        {/* Logo */}
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
            className="w-12 h-12 object-contain"
          />
          <p
            className="text-white text-[18px] font-bold cursor-pointer flex"
          >
            Full Stack Developer&nbsp; <span className="sm:block hidden"></span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row items-center gap-10">
          {/* DownloadButton removed from here */}

          {navigationItems.map((item) => (
            <NavigationLink
              key={item.label}
              to={item.to}
              label={item.label}
              active={active}
              setActive={setActive}
            />
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient 
            absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {/* DownloadButton removed from here */}

              {navigationItems.map((item) => (
                <NavigationLink
                  key={item.label}
                  to={item.to}
                  label={item.label}
                  active={active}
                  setActive={setActive}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
