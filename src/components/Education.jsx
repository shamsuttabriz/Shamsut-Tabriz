import { motion } from "framer-motion";
import { FaPlusCircle } from "react-icons/fa";

const EducationTimeline = () => {
  const education = [
    {
      title: "B.Sc in Computer Science and Engineering",
      location: "Dhaka, Bangladesh",
      institute:
        "Ahsanullah Institute of Information & Communication Technology",
      duration: "Dec 2018 – Aug 2024",
    },
    {
      title: "Higher Secondary School Certificate",
      location: "Gazipur, Dhaka, Bangladesh",
      institute: "MEH. Arif College",
      duration: "July 2015 – May 2017",
    },
  ];

  return (
    <div id="education" className="bg-gradient-to-br from-[#154D71]/10 via-[#1C6EA4]/10 to-[#33A1E0]/10 py-12 px-4 md:px-0 flex flex-col justify-center items-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#154D71] via-[#1C6EA4] to-[#33A1E0] mb-4 text-center">
        Educations
      </h2>

      {/* Summary */}
      <p className="text-center max-w-2xl text-sm sm:text-base text-gray-600 mb-10 sm:mb-16">
      My educational path reflects curiosity and dedication to learning — from building strong fundamentals in high school to pursuing Computer Science and Engineering, each step has strengthened my skills and problem-solving mindset as a developer.
      </p>

      <div className="relative w-full md:w-3/4 lg:w-2/3">
        {/* Vertical Line (hide on mobile) */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-[#1C6EA4]"></div>

        {education.map((edu, index) => (
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
                {edu.title}
              </h3>
              <p className="text-[#1C6EA4] text-sm mt-1">{edu.location}</p>
              <p className="text-gray-700 mt-2">{edu.institute}</p>
              <p className="text-gray-500 text-sm mt-1 font-medium">
                {edu.duration}
              </p>
            </div>

            {/* Timeline Circle (mobile optimized) */}
            <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-[#154D71] p-2 sm:p-3 rounded-full shadow-lg mb-5 md:mb-0 mt-0 md:mt-0">
              <FaPlusCircle className="text-white text-lg sm:text-2xl" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;
