import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Experience />
      <Achievements />
      <ContactMe />
      <Footer />
    </>
  );
};

export default MainLayout;
