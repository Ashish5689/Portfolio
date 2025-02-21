import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import ExperienceSection from "./ExperienceSection";
import profileImage from "../assets/newProfile.jpeg";
import resumePDF from "../assets/Ashish_jha_Resume.pdf";

interface HomeProps {
  isDarkMode?: boolean;
  onThemeToggle?: () => void;
}

const Home = ({
  isDarkMode = false,
  onThemeToggle = () => console.log("Theme toggle clicked"),
}: HomeProps) => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Ashish_jha_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar isDarkMode={isDarkMode} onThemeToggle={onThemeToggle} />
      <main className="pt-20">
        <HeroSection
          name="Ashish Jha"
          profileImage={profileImage}
          onViewProjects={scrollToProjects}
          onDownloadResume={handleDownloadResume}
        />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Home;
