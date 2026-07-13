import { motion, useReducedMotion } from "framer-motion";
import { experiences } from "@/data/portfolio";

const ExperienceSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="editorial-section experience-section" aria-labelledby="experience-title">
      <div className="page-container">
        <div className="section-label">
          <span aria-hidden="true" />
          <h2 id="experience-title">Experience</h2>
        </div>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <motion.article
              className="experience-row"
              key={experience.company}
              initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <div className="experience-company">
                <span className="timeline-node" aria-hidden="true" />
                <h3>{experience.company}</h3>
                <p>{experience.role}</p>
              </div>
              <div className="experience-meta">
                <p>{experience.duration}</p>
                <span>{experience.location}</span>
              </div>
              <ul className="experience-highlights">
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
