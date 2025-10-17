import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#154D71]/10 via-[#1C6EA4]/10 to-[#33A1E0]/10 px-6"
    >
      {/* Title */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#154D71] leading-tight">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-[#1C6EA4] to-[#33A1E0] bg-clip-text text-transparent">
          Shamsut
        </span>{" "}
        Tabriz
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-gray-700 max-w-2xl text-sm sm:text-base md:text-lg">
        Passionate Frontend Developer & Problem Solver focused on crafting
        responsive, user-centered web interfaces with precision and performance”
      </p>

      {/* Button */}
      <a
        href="https://drive.google.com/file/d/1SAqaLTk3PZ_8dKJB_MkZK2Oj5IFBhWsD/view"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block px-6 py-3 text-white font-semibold rounded-full shadow-md transition-all duration-300 bg-gradient-to-r from-[#154D71] via-[#1C6EA4] to-[#33A1E0] hover:opacity-90"
      >
        Download Resume
      </a>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 text-[#1C6EA4] animate-bounce">
        <span className="text-sm font-medium">Scroll</span>
        <div className="text-2xl">↓</div>
      </div>
    </section>
  );
};

export default Hero;
