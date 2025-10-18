import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    name: "WorkLoy - Micro-Task and Earning Platform",
    thumbnail: "https://i.ibb.co.com/207HyTF9/workloy.png",
    github: "https://github.com/shamsuttabriz/workloy",
    live: "https://workloy-51802.web.app/",
    details:
      "WorkLoy is a Micro-Task and Earning Platform designed to provide users with opportunities to complete small tasks and earn rewards. The platform accommodates three distinct roles — Worker, Buyer, and Admin",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Firebase",
      "Node.js",
      "MongoDB",
    ],
  },
  {
    id: 2,
    name: "Plantora - Plant Tracking System",
    thumbnail: "https://i.ibb.co.com/m3hPcmN/plantora.png",
    github: "https://github.com/shamsuttabriz/plantora-client",
    live: "https://plantora-tracking-app.web.app/",
    details:
      "Plantora is a plant-themed web application that helps users manage their plant collection effortlessly. Users can add, view, and track plants with watering schedules, categories, and personalized details. Featuring a modern, responsive design, Plantora integrates Firebase for authentication and MongoDB for data management, offering a smooth and intuitive user experience.",
    technologies: [
      "React.js",
      "Firebase",
      "Express.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    id: 3,
    name: "AetherVault - Artifacts Tracking System",
    thumbnail: "https://i.ibb.co.com/wZXwMxzv/aethervault.png",
    github: "https://github.com/shamsuttabriz/AetherVault/",
    live: "https://aethervault-136c0.web.app/",
    details:
      "AetherVault is a full-stack web application that allows users to explore, upload, and interact with historical or creative artifacts. The platform provides dynamic features such as artifact liking, user-specific collections, and smooth animations for an engaging user experience.",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "JWT",
      "Express.js",
      "React Router",
      "Axios",
      "Farmer Motion",
      "Tailwind CSS",
    ],
  },
  {
    id: 4,
    name: " DrHubBD – Dr. Appointment Booking System",
    thumbnail: "https://i.ibb.co.com/WvcXtpGh/drhub.png",
    github: "https://github.com/shamsuttabriz/Dr.Hub",
    live: "https://drhubbd.netlify.app/",
    details:
      "DrHubBD is a modern and user-friendly web application designed to simplify communication between patients and doctors in Bangladesh. Through this platform, patients can easily view doctor profiles, search using filters, and directly book appointments.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "React Router",
      "Rechart",
      "React Hot Toast",
      "Netlify",
    ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-[#154D71] via-[#1C6EA4] to-[#33A1E0] text-white px-4 sm:px-8 md:px-16 py-16 md:py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-[#FFF9AF] mb-3"
      >
        My Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center text-sm sm:text-base text-gray-300 mb-10 md:mb-12"
      >
        Here are some of the projects I’ve worked on — showcasing my skills in full-stack web development, modern UI design, and problem-solving through creative coding.
      </motion.p>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white/10 p-4 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden flex flex-col"
          >
            <img
              src={project.thumbnail}
              alt={project.name}
              className="h-44 sm:h-48 w-full rounded-xl object-cover"
            />
            <div className="p-2 flex flex-col justify-between flex-grow">
              <h3 className="text-lg md:text-xl font-semibold text-[#FFF9AF] mb-3">
                {project.name}
              </h3>
              <button
                onClick={() => setSelectedProject(project)}
                className="bg-[#FFF9AF] text-[#154D71] font-semibold rounded-full py-1 mt-auto hover:bg-[#fef08a] transition"
              >
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-gradient-to-br from-black/80 via-[#1a1a1a]/90 to-black/80 flex justify-center items-center z-50 px-3 md:px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-5 sm:p-8 w-full max-w-xs sm:max-w-md md:max-w-lg text-center shadow-[0_0_30px_rgba(255,249,175,0.2)] border border-[#FFF9AF]/30 overflow-y-auto max-h-[90vh] animate-borderGlow"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-[#FFF9AF] text-2xl hover:text-white transition duration-300 hover:rotate-90"
            >
              ✕
            </button>

            {/* Project Title */}
            <h3 className="text-xl sm:text-3xl font-extrabold text-[#FFF9AF] mt-6 md:mt-auto mb-3 sm:mb-5 drop-shadow-[0_0_10px_#FFF9AF]">
              {selectedProject.name}
            </h3>

            {/* Thumbnail */}
            <div className="relative group mb-4 sm:mb-6">
              <img
                src={selectedProject.thumbnail}
                alt={selectedProject.name}
                className="rounded-xl w-full object-cover max-h-60 sm:max-h-72 shadow-lg transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-100/90 text-justify leading-relaxed mb-5">
              {selectedProject.details}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap justify-start md:justify-center gap-2 mb-6">
              {selectedProject.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-[#FFF9AF]/20 text-white border border-[#FFF9AF]/40 rounded-full px-1 py-0.5 text-xs sm:text-sm font-medium backdrop-blur-md hover:bg-[#FFF9AF]/30 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#FFF9AF]/20 hover:bg-[#FFF9AF]/30 text-white px-4 py-2 rounded-lg text-sm sm:text-base transition duration-300 hover:shadow-[0_0_10px_#FFF9AF]"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#FFF9AF]/20 hover:bg-[#FFF9AF]/30 text-white px-4 py-2 rounded-lg text-sm sm:text-base transition duration-300 hover:shadow-[0_0_10px_#FFF9AF]"
              >
                <FaExternalLinkAlt /> Live
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;
