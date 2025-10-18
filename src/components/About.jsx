import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import MyImage from "../assets/profile.png";

const About = () => {
  return (
    <section
      id="about"
      className="bg-white max-w-7xl mx-auto bg-red-500 py-16 px-6 md:px-0 flex flex-col-reverse md:flex-row items-center justify-between gap-10"
    >
      {/* Left Text Section */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#154D71] via-[#1C6EA4] to-[#33A1E0]">
            About Me
          </span>
        </h2>
        <h3 className="text-xl md:text-2xl text-gray-600 font-semibold  mb-6">
          Frontend Developer & Aspiring Full Stack Engineer
        </h3>
        <p className="text-gray-600 text-justify leading-relaxed mb-6">
          I recently graduated in Computer Science and Engineering. I have been
          involved in <b>Competitive Programming</b> for a long time and hold
          certifications in it. Currently, I’m focusing on{" "}
          <b>Frontend Development</b> using React, Tailwind, and modern UI
          frameworks — but my goal is to transition into{" "}
          <b>Full Stack Development</b>.
          <br />
          <br />
          Outside of coding, I enjoy exploring new tech trends, learning design
          concepts, and occasionally playing games or spending time with
          friends. I love building clean, interactive, and user-friendly web
          experiences.
        </p>

        {/* Social Links */}
        <div className="flex gap-5 text-2xl text-[#154D71]">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1C6EA4] transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1C6EA4] transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1C6EA4] transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1C6EA4] transition"
          >
            <FaTwitter />
          </a>
        </div>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={MyImage}
          alt="Shamsut Tabriz"
          className="rounded-[2rem] shadow-lg w-80 h-80 md:w-96 md:h-auto object-cover object-top"
        />
      </motion.div>
    </section>
  );
};

export default About;
