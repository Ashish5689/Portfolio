import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with real-time inventory, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://ecommerce-demo.com",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600",
  },
  {
    title: "AI Chat Application",
    description:
      "Real-time chat application with AI-powered responses and multi-language support.",
    technologies: ["Next.js", "OpenAI API", "TypeScript", "WebSocket"],
    githubUrl: "https://github.com/yourusername/ai-chat",
    liveUrl: "https://ai-chat-demo.com",
    image:
      "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=600",
  },
  {
    title: "Task Management System",
    description:
      "Collaborative task management platform with real-time updates and team features.",
    technologies: ["React", "Redux", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/task-manager",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600",
  },
  {
    title: "Weather Dashboard",
    description:
      "Interactive weather dashboard with location-based forecasts and historical data.",
    technologies: ["React", "Weather API", "D3.js", "Tailwind"],
    githubUrl: "https://github.com/yourusername/weather-app",
    liveUrl: "https://weather-dashboard-demo.com",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600",
  },
  {
    title: "Social Media Analytics",
    description:
      "Analytics dashboard for social media metrics with data visualization.",
    technologies: ["Vue.js", "Python", "FastAPI", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/social-analytics",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600",
  },
  {
    title: "Fitness Tracking App",
    description:
      "Mobile-first fitness tracking application with workout plans and progress monitoring.",
    technologies: ["React Native", "Firebase", "Node.js", "Express"],
    githubUrl: "https://github.com/yourusername/fitness-tracker",
    liveUrl: "https://fitness-app-demo.com",
    image:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-auto">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" /> Code
                        </a>
                      </Button>
                      {project.liveUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-2"
                          asChild
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" /> Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
