import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = navItems.map((id) =>
        document.getElementById(id.toLowerCase())
      );
      sections.forEach((section, index) => {
        if (
          section &&
          scrollY >= section.offsetTop - 80 &&
          scrollY < section.offsetTop + section.offsetHeight - 80
        ) {
          setActive(navItems[index]);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed w-full top-0 left-0 z-50 shadow-md bg-gradient-to-r from-[#154D71] via-[#1C6EA4] to-[#33A1E0]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold text-white cursor-pointer tracking-wide">
          Shamsut-<span className="text-[#FFF9AF]">Tabriz</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setActive(item)}
                className={`cursor-pointer transition-all duration-300 hover:text-[#FFF9AF] ${
                  active === item
                    ? "text-[#FFF9AF] border-b-2 border-[#FFF9AF]"
                    : ""
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div
          onClick={() => setNavOpen(!navOpen)}
          className="text-white text-2xl md:hidden cursor-pointer"
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {navOpen && (
        <ul className="md:hidden flex flex-col items-center bg-gradient-to-b from-[#154D71] via-[#1C6EA4] to-[#33A1E0] py-6 space-y-4 text-white font-semibold">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => {
                  setActive(item);
                  setNavOpen(false);
                }}
                className={`cursor-pointer transition-all duration-300 hover:text-[#FFF9AF] ${
                  active === item ? "text-[#FFF9AF]" : ""
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
