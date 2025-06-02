import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

const experiences = [
  {
    title: "Software Engineer",
    company: "Optimiser India Pvt Ltd",
    location: "Noida, India",
    duration: "October 2022 - Present",
    responsibilities: [
      "Developed and deployed scalable React.js and Node.js web applications, serving 10,000+ active users with enhanced user experience.",
      "Led feature development initiatives that boosted system performance by 30% and reduced page load times by 20%.",
      "Created reusable React components and custom hooks to improve code maintainability and accelerate development cycles.",
      "Designed and optimized MongoDB schemas and queries, ensuring efficient and reliable data storage.",
      "Collaborated closely with QA teams to implement robust error handling and monitoring, reducing bug reports by 25%.",
      "Participated actively in Agile ceremonies, consistently delivering features on time within sprint deadlines."
    ]
  },
  {
    title: "Application Developer Intern",
    company: "Decimal technologies",
    location: "Gurugram, India",
    duration: "January 2022 - May 2022",
    responsibilities: [
      "Designed application interfaces using a proprietary low-code/no-code platform to accelerate UI development.",
      "Developed and tested REST APIs using Postman, ensuring seamless integration and functionality.",
      "Conducted thorough application testing to validate accuracy and performance.",
      "Collaborated with the development team to optimize code quality and enhance system reliability."
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
