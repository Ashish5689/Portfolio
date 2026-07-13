import { motion, useReducedMotion } from "framer-motion";
import { skillGroups } from "@/data/portfolio";

const AboutSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="editorial-section about-section" aria-labelledby="about-title">
      <motion.div
        className="page-container"
        initial={reduceMotion ? undefined : { opacity: 0, y: 30 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-intro">
          <h2 id="about-title">Engineering reliable systems, end to end.</h2>
          <p>
            I build backend services, asynchronous pipelines, secure integrations, and the product
            surfaces around them.
          </p>
        </div>

        <div className="skill-rail">
          {skillGroups.map((group) => (
            <div className="skill-column" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
