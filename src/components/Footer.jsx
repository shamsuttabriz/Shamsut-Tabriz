import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#154D71] text-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-base text-gray-300 font-semibold tracking-wide">
            © {new Date().getFullYear()} Shamsut Tabriz
          </h2>
        </div>

        {/* Right Section (Social Links) */}
        <div className="flex space-x-5 text-xl">
          <a
            href="https://github.com/shamsuttabriz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#FFF9AF] transition-all"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/shamsuttabriz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#FFF9AF] transition-all"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/shamsuttabriz01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#FFF9AF] transition-all"
          >
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com/shamsuttabriz0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#FFF9AF] transition-all"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
