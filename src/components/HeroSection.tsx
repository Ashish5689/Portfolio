import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Download, ArrowRight } from "lucide-react";
import AnimatedText from "./AnimatedText";
import defaultProfile from "../assets/newProfile.jpeg";

interface HeroSectionProps {
  name?: string;
  profileImage?: string;
  onViewProjects?: () => void;
  onDownloadResume?: () => void;
}

const HeroSection = ({
  name = "Ashish Jha",
  profileImage = defaultProfile,
  onViewProjects = () => console.log("View Projects clicked"),
  onDownloadResume = () => console.log("Download Resume clicked"),
}: HeroSectionProps) => {
  return (
    <section className="min-h-[90vh] w-full bg-background flex items-center px-4 md:px-8 lg:px-16">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
        {/* Left Content - 60% */}
        <motion.div
          className="lg:col-span-3 space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm {name}
          </motion.h1>

          <AnimatedText className="my-6" />

          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Passionate about creating seamless web experiences with modern
            technologies.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button size="lg" onClick={onViewProjects} className="group">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onDownloadResume}
              className="group"
            >
              Download Resume
              <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Content - 40% */}
        <motion.div
          className="lg:col-span-2 relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/40 blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.img
              src={profileImage}
              alt="Profile"
              className="relative w-full h-full object-cover object-center rounded-full border-4 border-background shadow-xl"
              style={{ objectPosition: "center 30%" }}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
