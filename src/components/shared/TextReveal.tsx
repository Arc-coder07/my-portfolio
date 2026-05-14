"use client";

import { motion, useInView, Variants } from "framer-motion";
import React, { useRef } from "react";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "span";
  type?: "words" | "characters";
}

const MotionComponents = {
  p: motion.create("p"),
  h1: motion.create("h1"),
  h2: motion.create("h2"),
  h3: motion.create("h3"),
  h4: motion.create("h4"),
  h5: motion.create("h5"),
  h6: motion.create("h6"),
  div: motion.create("div"),
  span: motion.create("span"),
};

export function TextReveal({
  children,
  className = "",
  delay = 0,
  as: Component = "p",
  type = "words",
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Split text into words or characters
  const elements = type === "words" ? children.split(" ") : children.split("");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const MotionComponent = MotionComponents[Component] || MotionComponents.p;

  return (
    <MotionComponent
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`${className} flex flex-wrap`}
    >
      {elements.map((element, index) => (
        <motion.span
          variants={child}
          key={index}
          className={type === "words" ? "mr-[0.25em]" : ""}
          style={{ display: "inline-block" }}
        >
          {element === " " ? "\u00A0" : element}
        </motion.span>
      ))}
    </MotionComponent>
  );
}
