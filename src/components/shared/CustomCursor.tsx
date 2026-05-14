"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Add interactivity hooks to all clickable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if hovering over a link or button
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovered(true);
        setHoverText("");
      } 
      // Check for specific data attribute for custom text (e.g., "View")
      else if (target.closest("[data-cursor-text]")) {
        setIsHovered(true);
        setHoverText(target.closest("[data-cursor-text]")?.getAttribute("data-cursor-text") || "");
      } else {
        setIsHovered(false);
        setHoverText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // Hide cursor on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference flex items-center justify-center text-bg-primary font-medium text-xs tracking-wider uppercase"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      animate={{
        width: isHovered ? (hoverText ? 80 : 48) : 16,
        height: isHovered ? (hoverText ? 80 : 48) : 16,
        opacity: isVisible ? 1 : 0,
        backgroundColor: "var(--color-text-primary)",
        borderRadius: "50%",
        marginLeft: isHovered ? (hoverText ? -24 : -8) : 8,
        marginTop: isHovered ? (hoverText ? -24 : -8) : 8,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered && hoverText ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="text-[10px]"
      >
        {hoverText}
      </motion.span>
    </motion.div>
  );
}
