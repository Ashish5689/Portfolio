import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "../assets/ashish-jha-portrait-dark.webp";

const HeroSection = () => {
  return (
    <section id="top" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-grid page-container">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 id="hero-title">Ashish Jha</h1>
          <p className="hero-positioning">
            Backend-focused full-stack engineer building reliable distributed systems.
          </p>
          <p className="hero-summary">
            Node.js, Java Micronaut, event-driven architecture, cloud integrations, and the frontend
            skills to ship complete products.
          </p>
          <div className="hero-actions">
            <Button size="lg" asChild>
              <a href="#projects">
                View selected work
                <ArrowRight data-icon="inline-end" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/Ashish-Jha-Resume.pdf" download="Ashish-Jha-Resume.pdf">
                Download résumé
                <Download data-icon="inline-end" />
              </a>
            </Button>
          </div>
          <p className="hero-location">
            <MapPin aria-hidden="true" />
            Ghaziabad, India · Open to backend and full-stack roles
          </p>
        </motion.div>

        <motion.div
          className="hero-portrait-wrap"
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={profileImage} alt="Ashish Jha" width="1080" height="1440" />
        </motion.div>

        <div className="hero-circuit" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
