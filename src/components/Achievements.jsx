import { motion } from "framer-motion";
import TrophyImg from "../assets/achivement.png";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "ICPC ASIA DHAKA REGIONAL CONTEST 2022",
      details:
        "AIICT_Humbles, Rank: 93 out of 162 Teams | Dhaka, Bangladesh",
    },
    {
      id: 2,
      title: "BUET Inter University Programming Contest 2023",
      details:
        "AIICT_Humbles, Rank: 86 out of 110 Teams | Dhaka, Bangladesh",
    },
    {
      id: 3,
      title: "BUET Inter University Programming Contest 2022",
      details:
        "AIICT_Humbles, Rank: 88 out of 114 Teams | Dhaka, Bangladesh",
    },
    {
      id: 4,
      title: "Phitron Programming Contest 2022",
      details:
        "shamsuttabriz_md, Rank: 178 out of 679 Members | Dhaka, Bangladesh",
    },
  ];

  return (
    <section
      id="achievement"
      className="bg-gradient-to-b from-[#FFF9AF] via-[#33A1E0]/10 to-[#1C6EA4]/20 py-10 sm:py-16 px-4 md:px-0 md:px-0 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
        {/* Title & Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mb-10 md:mb-14 px-2"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#154D71] via-[#1C6EA4] to-[#33A1E0]">
            Achievements
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-600">
            My achievements represent milestones of dedication, teamwork, and
            problem-solving excellence in programming contests. Each recognition
            inspires me to aim higher and keep improving as a developer.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12 w-full">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center w-full md:w-1/2"
          >
            <img
              src={TrophyImg}
              alt="Achievement Trophy"
              className="w-48 sm:w-64 md:w-80 lg:w-96 drop-shadow-2xl object-contain"
            />
          </motion.div>

          {/* Right Achievements List */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 space-y-4 sm:space-y-6"
          >
            {achievements.map((ach) => (
              <div
                key={ach.id}
                className="flex items-start gap-3 sm:gap-4 bg-white rounded-xl sm:rounded-2xl shadow-md p-3 sm:p-5 border-l-8 border-[#33A1E0] hover:shadow-lg transition-all duration-300"
              >
                {/* Number Box */}
                <div className="flex-shrink-0 bg-gradient-to-r from-[#154D71] via-[#1C6EA4] to-[#33A1E0] text-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg font-bold text-base sm:text-lg">
                  {ach.id}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-[#154D71] font-semibold text-sm sm:text-xl leading-snug">
                    {ach.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    {ach.details}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
