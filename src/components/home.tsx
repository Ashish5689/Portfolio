import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import ExperienceSection from "./ExperienceSection";

const Home = () => {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Home;
