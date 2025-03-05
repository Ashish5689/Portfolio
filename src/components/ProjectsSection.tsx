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
import todoListImage from "../assets/todoApp.png";
import aiTranscribeImage from "../assets/Aitranscribe.png";
import weatherVueImage from "../assets/weatheVue.png";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  features?: string[];
}

const projects: Project[] = [
  {
    title: "AI-Powered Todo List",
    description: "An innovative, AI-enhanced task management tool that transforms how you handle daily tasks and projects. Built with modern technologies and featuring AI-driven insights for better productivity.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "OpenAI API"],
    features: [
      "Smart Task Management",
      "Drag & Drop Organization",
      "AI Task Breakdown",
      "Automatic Saving",
      "Geolocation Tracking",
      "Time Stamping",
      "Responsive Design"
    ],
    githubUrl: "https://github.com/Ashish5689/TodoList",
    liveUrl: "https://ashishtodo--newtodoailist.netlify.app/",
    image: todoListImage
  },
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
    title: "AiTranscribe 🎙️ → 📝",
    description:
      "A modern, sleek, and intuitive voice-to-text transcription tool powered by the Groq API—all in real time!",
    technologies: ["React", "TypeScript", "Tailwind CSS", "ShadCN UI", "Groq API"],
    features: [
      "Instant Transcription",
      "Intuitive Recording Interface",
      "Real-Time Display",
      "Session History",
      "Fast & Secure"
    ],
    githubUrl: "https://github.com/Ashish5689/AiTranscribe.git",
    liveUrl: "https://aitranscribe.netlify.app/",
    image: aiTranscribeImage
  },
  {
    title: "🌦️ WeatherVue",
    description:
      "A beautiful, modern weather dashboard built with React, TypeScript, and D3.js for visualizing weather data with interactive charts.",
    technologies: ["React", "TypeScript", "D3.js", "Tailwind CSS", "Framer Motion"],
    features: [
      "Real-time Weather Data",
      "Interactive D3.js Charts",
      "Location Search",
      "24-hour Forecast",
      "Temperature & Humidity Trends",
      "Unit Conversion",
      "Responsive Design"
    ],
    githubUrl: "https://github.com/Ashish5689/WeatherVue",
    liveUrl: "https://weathercue.netlify.app/",
    image: weatherVueImage
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
    title: "Social Media Analytics",
    description:
      "Analytics dashboard for social media metrics with data visualization.",
    technologies: ["Vue.js", "Python", "FastAPI", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/social-analytics",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600",
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
          className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-64 transition-transform duration-300 group-hover:scale-105 ${
                          project.title.includes("AiTranscribe") 
                            ? "object-contain bg-white p-2" 
                            : "object-cover"
                        }`}
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <Button
                          variant="outline"
                          size="icon"
                          asChild
                          className="rounded-full bg-background/10 hover:bg-background/20 backdrop-blur-sm"
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        </Button>
                        {project.liveUrl && (
                          <Button
                            variant="outline"
                            size="icon"
                            asChild
                            className="rounded-full bg-background/10 hover:bg-background/20 backdrop-blur-sm"
                          >
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground">{project.description}</p>
                      {project.features && (
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                          <ul className="list-disc list-inside text-sm text-muted-foreground">
                            {project.features.map((feature, idx) => (
                              <li key={idx}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
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

export default ProjectsSection;
