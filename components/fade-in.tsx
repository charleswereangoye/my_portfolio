"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function FadeIn({ children, delay = 0 }: { children: ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }} // Custom bezier curve for cinematic feel
      viewport={{ once: true, margin: "-100px" }} // Triggers slightly before scrolling fully into view
    >
      {children}
    </motion.div>
  );
}