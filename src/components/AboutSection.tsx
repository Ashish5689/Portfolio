import React from "react";
import { motion } from "framer-motion";

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
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground">About Me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate Full Stack Developer with 5 years of experience
                in building web applications. I specialize in JavaScript
                technologies across the MERN stack and have a strong foundation
                in building scalable, efficient applications.
              </p>
              <p>
                My journey in web development started with a curiosity about how
                things work on the internet, which led me to dive deep into
                modern web technologies. I've worked with startups and
                established companies, helping them build robust web solutions.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source
                projects, writing technical blogs, or exploring new
                technologies.
              </p>
            </div>
          </div>

          <div className="bg-card/50 rounded-lg p-8 border border-border/50">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-12">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-foreground">JavaScript/TypeScript</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-foreground">React.js</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-foreground">Node.js</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-foreground">Express.js</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-foreground">MongoDB</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-foreground">PostgreSQL</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-foreground">Next.js</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-foreground">TailwindCSS</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-foreground">Git</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-foreground">Docker</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-foreground">AWS</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-foreground">REST APIs</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
