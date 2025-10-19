import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Education",
    "Projects",
    "Experience",
    "Achievement",
    "Contact",
  ];

  // Highlight active section on scroll
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

  // Disable background scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "auto";
  }, [navOpen]);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-gradient-to-r from-[#154D71] via-[#1C6EA4] to-[#33A1E0] shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 md:px-0 py-4">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold text-white cursor-pointer font-logo">
          Shamsut<span className="text-[#FFF9AF]">Tabriz</span>
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
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden fixed top-[60px] left-0 w-full bg-gradient-to-b from-[#154D71] via-[#1C6EA4] to-[#33A1E0] text-white font-semibold flex flex-col items-center gap-5 py-6 transition-all duration-300 ease-in-out ${
          navOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item}
            to={item.toLowerCase()}
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => {
              setActive(item);
              setNavOpen(false);
            }}
            className={`cursor-pointer text-lg transition-all duration-300 hover:text-[#FFF9AF] ${
              active === item ? "text-[#FFF9AF]" : ""
            }`}
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
