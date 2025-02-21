import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";

interface HomeProps {
  isDarkMode?: boolean;
  onThemeToggle?: () => void;
}

const Home = ({
  isDarkMode = false,
  onThemeToggle = () => console.log("Theme toggle clicked"),
}: HomeProps) => {
  const handleDownloadResume = () => {
    // Replace '/resume.pdf' with the actual path to your resume file
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "john-doe-resume.pdf";
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
          name="John Doe"
          profileImage="https://api.dicebear.com/7.x/avataaars/svg?seed=portfolio"
          onViewProjects={scrollToProjects}
          onDownloadResume={handleDownloadResume}
        />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Home;
