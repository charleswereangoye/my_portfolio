"use client";

import { motion, Variants } from "framer-motion"; // <-- 1. Imported 'Variants'

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function TextReveal({ text, className = "", delay = 0 }: TextRevealProps) {
  const words = text.split(" ");

  // 2. Added explicitly typed ': Variants' and removed the function wrapper
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * 0.1 },
    },
  };

  // 3. Added explicitly typed ': Variants' here to clear the red squiggly line!
  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 100, 
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ 
            marginRight: "0.25em", 
            paddingBottom: "0.1em",
            display: "inline-block" 
          }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}