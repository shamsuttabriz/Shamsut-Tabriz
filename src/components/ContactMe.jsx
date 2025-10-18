import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaGithubSquare } from "react-icons/fa";
import LinkedInImg from "../assets/LinkedIn.jpg";
import GmailImg from "../assets/mail.jpg";
import GithubImg from "../assets/github.jpg";

const ContactMe = () => {
  const contacts = [
    {
      id: 1,
      title: "LinkedIn",
      subtitle: "Connect with me on LinkedIn",
      icon: <FaLinkedin className="text-2xl sm:text-3xl text-[#33A1E0]" />,
      img: LinkedInImg,
      link: "https://linkedin.com/in/shamsuttabriz",
    },
    {
      id: 2,
      title: "Gmail",
      subtitle: "Reach out to me via email",
      icon: <FaEnvelope className="text-2xl sm:text-3xl text-[#33A1E0]" />,
      img: GmailImg,
      link: "mailto:shamsuttabriz.md@gmail.com",
    },
    {
      id: 3,
      title: "Github",
      subtitle: "Follow me on Github",
      icon: <FaGithubSquare className="text-2xl sm:text-3xl text-[#33A1E0]" />,
      img: GithubImg,
      link: "https://github.com/shamsuttabriz",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#154D71] via-[#1C6EA4]/90 to-[#33A1E0]/80 text-white py-16 px-6 md:px-0"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-3 text-[#FFF9AF]"
        >
          Contact Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-200 text-base sm:text-lg"
        >
          Let’s connect and create something amazing together.
        </motion.p>
      </div>

      {/* Contact Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {contacts.map((contact) => (
          <motion.a
            key={contact.id}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="bg-[#ffffff0a] border border-[#33A1E0]/40 rounded-2xl shadow-md p-6 flex flex-col justify-between items-start hover:border-[#FFF9AF]/60 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between w-full mb-4">
              <h3 className="text-xl font-semibold text-[#FFF9AF]">
                {contact.title}
              </h3>
              {contact.icon}
            </div>
            <p className="text-gray-200 mb-4 text-sm">{contact.subtitle}</p>
            <div className="rounded-xl w-full overflow-hidden border border-[#33A1E0]/30">
              <img
                src={contact.img}
                alt={contact.title}
                className="w-full h-56 object-cover hover:opacity-90 transition-all"
              />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ContactMe;
