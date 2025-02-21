import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text?: string[];
  typingSpeed?: number;
  loop?: boolean;
  className?: string;
}

const AnimatedText = ({
  text = [
    "Full Stack Developer",
    "MERN Stack",
    "React",
    "Node.js",
    "MongoDB",
    "Express",
  ],
  typingSpeed = 100,
  loop = true,
  className = "",
}: AnimatedTextProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const animateText = () => {
      const currentFullText = text[currentTextIndex];

      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          timeout = setTimeout(() => {
            setDisplayText(currentFullText.slice(0, displayText.length + 1));
          }, typingSpeed);
        } else {
          timeout = setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText.length > 0) {
          timeout = setTimeout(() => {
            setDisplayText(currentFullText.slice(0, displayText.length - 1));
          }, typingSpeed / 2);
        } else {
          setIsDeleting(false);
          if (loop) {
            setCurrentTextIndex((prev) => (prev + 1) % text.length);
          }
        }
      }
    };

    animateText();

    return () => clearTimeout(timeout);
  }, [displayText, currentTextIndex, isDeleting, text, typingSpeed, loop]);

  return (
    <div
      className={`bg-background min-h-[120px] flex items-center ${className}`}
    >
      <motion.div
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span>{displayText}</span>
        <motion.span
          className="inline-block w-[3px] h-8 ml-1 bg-primary"
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.div>
    </div>
  );
};

export default AnimatedText;
