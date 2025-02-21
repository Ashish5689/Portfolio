import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

const experiences = [
  {
    title: "Associate Software Developer",
    company: "Optimiser India Pvt Ltd",
    location: "Noida, India",
    duration: "October 2022 - Present",
    responsibilities: [
      "Developed and maintained RESTful APIs using Node.js and Express.js, improving API response times by 20%",
      "Built reusable React.js components and custom hooks for enhanced code maintainability and user experience",
      "Implemented and optimized MongoDB database schemas and queries for efficient data management",
      "Collaborated with the QA team to implement error handling and monitoring, reducing bug reports by 25%",
      "Actively participated in agile ceremonies and delivered features within sprint deadlines"
    ]
  },
  {
    title: "Application Developer Intern",
    company: "Decimal technologies",
    location: "Gurugram, India",
    duration: "January 2022 - May 2022",
    responsibilities: [
      "Designing Application Interface using their own Low code no code platform",
      "Developing API and testing it on Postman",
      "Testing applications for accuracy and functionality",
      "Working collaboratively with other developers to optimize the codebase"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Experience</h2>
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">
                            {experience.title}
                          </h3>
                          <p className="text-primary">{experience.company}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-muted-foreground">{experience.location}</p>
                          <p className="text-sm text-muted-foreground">{experience.duration}</p>
                        </div>
                      </div>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {experience.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-base">
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection; 