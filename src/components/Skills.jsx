import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaFigma,
  FaCode, // ✅ Replaced VS Code icon
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiAuth0,
  SiVite,
  SiNetlify,
  SiNotion,
  SiReactrouter,
} from "react-icons/si";

const skillsData = {
  Frontend: [
    { name: "React", icon: <FaReact color="#61DBFB" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#38BDF8" /> },
    { name: "React Router", icon: <SiReactrouter color="#F44250" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs color="#68A063" /> },
    { name: "Express.js", icon: <SiExpress color="#fff" /> },
    { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
  ],
  Tools: [
    { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
    { name: "Auth0", icon: <SiAuth0 color="#EB5424" /> },
    { name: "Git", icon: <FaGitAlt color="#F1502F" /> },
    { name: "GitHub", icon: <FaGithub color="#fff" /> },
    { name: "Linux", icon: <FaLinux color="#FCC624" /> },
    { name: "VS Code", icon: <FaCode color="#0078D7" /> }, // ✅ replaced safely
    { name: "Figma", icon: <FaFigma color="#A259FF" /> },
    { name: "Notion", icon: <SiNotion color="#fff" /> },
    { name: "Vite", icon: <SiVite color="#FFD32B" /> },
    { name: "Netlify", icon: <SiNetlify color="#00C7B7" /> },
  ],
};

const Skills = () => {
  const [category, setCategory] = useState("All");

  const allSkills = [
    ...skillsData.Frontend,
    ...skillsData.Backend,
    ...skillsData.Tools,
  ];

  const filteredSkills =
    category === "All" ? allSkills : skillsData[category] || [];

  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-br from-[#154D71] via-[#1C6EA4] to-[#33A1E0] text-white px-6 md:px-16 py-20 flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-[#FFF9AF] mb-10"
      >
        My Skills
      </motion.h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {["All", "Frontend", "Backend", "Tools"].map((btn) => (
          <motion.button
            key={btn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCategory(btn)}
            className={`px-5 py-2 rounded-full text-lg font-semibold shadow-md transition-all duration-300 ${
              category === btn
                ? "bg-[#FFF9AF] text-[#154D71]"
                : "bg-white/20 hover:bg-white/30"
            }`}
          >
            {btn}
          </motion.button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
      >
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="flex flex-col items-center bg-white/10 p-6 rounded-2xl shadow-lg hover:shadow-2xl backdrop-blur-md"
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <p className="font-medium text-lg text-[#FFF9AF]">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
