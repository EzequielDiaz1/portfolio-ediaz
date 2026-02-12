"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface CinematicSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  effect?: "fade-up" | "zoom-in" | "parallax" | "none";
}

const CinematicSection: React.FC<CinematicSectionProps> = ({
  children,
  className = "",
  id,
  effect = "fade-up",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Entry: 0→0.3 = entering viewport, 0.3→0.7 = in view, 0.7→1 = leaving
  const fadeUpOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const fadeUpY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [80, 0, 0, -40]);

  const zoomScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.92, 1, 1, 0.96]);
  const zoomOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  const parallaxY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  if (effect === "none") {
    return (
      <div ref={ref} id={id} className={className}>
        {children}
      </div>
    );
  }

  const styleMap = {
    "fade-up": { opacity: fadeUpOpacity, y: fadeUpY },
    "zoom-in": { opacity: zoomOpacity, scale: zoomScale },
    parallax: { y: parallaxY },
  };

  return (
    <div ref={ref} id={id} className={`${className} overflow-hidden`}>
      <motion.div style={styleMap[effect]} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  );
};

export default CinematicSection;
