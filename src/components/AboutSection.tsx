import React from "react";
import { motion } from "framer-motion";

const technicalSkills = {
  frontend: ["ReactJS", "Next.js", "JavaScript", "HTML", "CSS", "jQuery", "TailwindCSS", "Bootstrap"],
  backend: ["Node.js", "Express.JS", "RESTful APIs"],
  database: ["MongoDB", "SQL (Basic Knowledge)"],
  versionControl: ["Git", "Bitbucket"],
  frameworks: ["MERN Stack", "Next.js"],
  cloud: ["Firebase", "Supabase", "MongoDB Atlas"],
  other: ["Jira", "Data Modeling", "Agile (Scrum)", "Design Patterns", "Debugging", "Root Cause Analysis"]
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Professional Summary */}
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground">About Me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Full-stack software engineer with extensive experience in developing enterprise-level web applications.
                Specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js) with a proven track record of
                delivering scalable, performance-optimized solutions. Passionate about creating intuitive user experiences
                and implementing industry best practices in software development.
              </p>
              <p className="text-lg leading-relaxed">
                My approach combines technical excellence with a strong problem-solving mindset. I'm passionate about 
                writing clean, maintainable code and continuously expanding my technical capabilities. Whether working 
                independently or as part of a team, I focus on delivering high-quality solutions that meet both user 
                needs and business objectives.
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="bg-card/50 rounded-lg p-8 border border-border/50">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">
              Technical Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Frontend */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-1 bg-primary rounded"></div>
                  <h4 className="text-lg font-semibold text-foreground">Frontend</h4>
                </div>
                <div className="flex flex-wrap gap-2 pl-4">
                  {technicalSkills.frontend.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-1 bg-primary rounded"></div>
                  <h4 className="text-lg font-semibold text-foreground">Backend</h4>
                </div>
                <div className="flex flex-wrap gap-2 pl-4">
                  {technicalSkills.backend.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Database & Cloud */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-1 bg-primary rounded"></div>
                  <h4 className="text-lg font-semibold text-foreground">Database & Cloud</h4>
                </div>
                <div className="flex flex-wrap gap-2 pl-4">
                  {[...technicalSkills.database, ...technicalSkills.cloud].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frameworks */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-1 bg-primary rounded"></div>
                  <h4 className="text-lg font-semibold text-foreground">Frameworks & Stacks</h4>
                </div>
                <div className="flex flex-wrap gap-2 pl-4">
                  {technicalSkills.frameworks.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Version Control */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-1 bg-primary rounded"></div>
                  <h4 className="text-lg font-semibold text-foreground">Version Control</h4>
                </div>
                <div className="flex flex-wrap gap-2 pl-4">
                  {technicalSkills.versionControl.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Other Skills */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-1 bg-primary rounded"></div>
                  <h4 className="text-lg font-semibold text-foreground">Tools & Methods</h4>
                </div>
                <div className="flex flex-wrap gap-2 pl-4">
                  {technicalSkills.other.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-card/50 rounded-lg p-8 border border-border/50">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Education</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-foreground">
                  MCA (Master of Computer Application)
                </h4>
                <p className="text-primary">Institute of Management Studies, Ghaziabad</p>
                <p className="text-sm text-muted-foreground">August 2020 - July 2022 | CGPA: 8.8</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-foreground">
                  BCA (Bachelor of Computer Application)
                </h4>
                <p className="text-primary">Bhagwati Institute of technology & Science</p>
                <p className="text-sm text-muted-foreground">August 2017 - July 2020 | CGPA: 6.4</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
