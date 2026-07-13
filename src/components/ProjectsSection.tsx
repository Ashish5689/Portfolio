import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronDown, ExternalLink, Github } from "lucide-react";
import { archiveProjects, featuredProjects, type FeaturedProject } from "@/data/portfolio";
import { Button } from "./ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

const ArchitectureDiagram = ({ project }: { project: FeaturedProject }) => (
  <div className="architecture-diagram" role="img" aria-label={`${project.title} architecture flow`}>
    {project.architecture.map((node, index) => (
      <div className="architecture-step" key={node.label}>
        <div className="architecture-node">
          <span>{node.label}</span>
          <small>{node.detail}</small>
        </div>
        {index < project.architecture.length - 1 ? <span className="architecture-connector" aria-hidden="true" /> : null}
      </div>
    ))}
  </div>
);

const ProjectCaseStudy = ({ project, index }: { project: FeaturedProject; index: number }) => {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className={`project-case ${index % 2 === 1 ? "project-case--reverse" : ""}`}
      initial={reduceMotion ? undefined : { opacity: 0, y: 34 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <Collapsible open={open} onOpenChange={setOpen} className="project-collapsible">
        <div className="project-story">
          <span className="project-number">{project.number}</span>
          <h3>{project.title}</h3>
          <p className="project-summary">{project.summary}</p>
          <p className="project-stack">{project.stack.join(" · ")}</p>
          <div className="project-links">
            <Button variant="link" asChild>
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                View repository
                <ArrowUpRight data-icon="inline-end" />
              </a>
            </Button>
            <CollapsibleTrigger asChild>
              <Button variant="link" aria-expanded={open}>
                Read architecture
                <ChevronDown data-icon="inline-end" className={open ? "rotate-icon" : undefined} />
              </Button>
            </CollapsibleTrigger>
          </div>
        </div>

        <ArchitectureDiagram project={project} />

        <CollapsibleContent className="architecture-notes">
          <h4>Architecture notes</h4>
          <ul>
            {project.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </motion.article>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="editorial-section projects-section" aria-labelledby="projects-title">
      <div className="page-container">
        <h2 id="projects-title">Selected systems</h2>

        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <ProjectCaseStudy key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="archive-section">
          <div className="archive-heading">
            <h3>Earlier experiments</h3>
            <span>{archiveProjects.length.toString().padStart(2, "0")}</span>
          </div>
          <div className="archive-list">
            {archiveProjects.map((project) => (
              <article className="archive-row" key={project.title}>
                <h4>{project.title}</h4>
                <p>{project.focus}</p>
                <span>{project.stack.join(" · ")}</span>
                <div className="archive-links">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} repository`}>
                    <Github aria-hidden="true" />
                  </a>
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} live site`}>
                      <ExternalLink aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
