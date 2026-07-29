"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if mouse is hovering over interactive elements
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.onclick !== null ||
          target.closest("button") ||
          target.closest("a") ||
          target.classList.contains("cursor-pointer"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Small Glowing Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-sky-400 pointer-events-none z-[9999] shadow-[0_0_12px_rgba(56,189,248,0.8)]"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovered ? 1.8 : 1,
          backgroundColor: isHovered ? "#10b981" : "#38bdf8",
        }}
        transition={{ type: "spring", stiffness: 800, damping: 35, mass: 0.1 }}
      />

      {/* Larger Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-sky-400/40 pointer-events-none z-[9998] backdrop-blur-[0.5px]"
        animate={{
          x: mousePosition.x - 18,
          y: mousePosition.y - 18,
          scale: isHovered ? 1.6 : 1,
          borderColor: isHovered ? "rgba(16, 185, 129, 0.6)" : "rgba(56, 189, 248, 0.4)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.4 }}
      />
    </>
  );
}
