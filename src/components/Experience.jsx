import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      title: "Intern Software Engineer",
      company: "Vivasoft Limited",
      duration: "Sep 2023 – Feb 2024",
    },
    {
      title: "Programming Instructor",
      company: "AIICT Programming Club",
      duration: "Jan 2022 – Oct 2024",
    },
    {
      title: "Instructor (HSC ICT)",
      company: "Learners’ Teaching Home",
      duration: "Jan 2019 – Feb 2025",
    },
    {
      title: "Mentor (Web)",
      company: "Sadhinota Camp",
      duration: "Sep 2024 – May 2025",
    },
  ];

  return (
    <div id="experience" className="min-h-screen bg-gradient-to-br from-[#154D71]/10 via-[#1C6EA4]/10 to-[#33A1E0]/10 py-12 px-4 flex flex-col justify-center items-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#154D71] via-[#1C6EA4] to-[#33A1E0] mb-6 text-center">
        Experiences
      </h2>

      {/* Summary */}
      <p className="text-gray-600 text-center max-w-2xl mb-10 sm:mb-16 text-sm sm:text-base">
        My professional journey has been driven by passion and learning — from
        mentoring and teaching to hands-on software development, every
        experience has enhanced my growth as a dedicated and skillful developer.
      </p>

      {/* Timeline */}
      <div className="relative w-full md:w-3/4 lg:w-2/3">
        {/* Vertical Line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-[#1C6EA4]"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative mb-12 sm:mb-16 flex flex-col-reverse md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Box */}
            <div
              className={`w-full md:w-5/12 bg-white p-4 sm:p-6 rounded-2xl shadow-lg border-l-4 sm:border-l-8 border-[#33A1E0] ${
                index % 2 === 0
                  ? "md:text-left md:ml-8"
                  : "md:text-right md:mr-8"
              }`}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-[#154D71]">
                {exp.title}
              </h3>
              <p className="text-gray-700 mt-2">{exp.company}</p>
              <p className="text-gray-500 text-sm mt-1 font-medium">
                {exp.duration}
              </p>
            </div>

            {/* Timeline Circle */}
            <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-[#154D71] p-2 sm:p-3 rounded-full shadow-lg mb-3 md:mb-0">
              <FaBriefcase className="text-white text-lg sm:text-2xl" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
