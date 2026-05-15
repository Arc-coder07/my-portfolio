"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:',.<>?/~`✦✽✳＊※⁂";

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number; // seconds before scramble begins
  speed?: number; // ms per character resolve
  as?: "h1" | "h2" | "h3" | "span" | "div" | "p";
}

export function TextScramble({
  text,
  className = "",
  delay = 0,
  speed = 40,
  as: Tag = "span",
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const [hasStarted, setHasStarted] = useState(false);

  const scramble = useCallback(() => {
    const finalText = text;
    const length = finalText.length;
    let resolvedCount = 0;

    const interval = setInterval(() => {
      const scrambled = finalText
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (char === "-") return "-";
          if (index < resolvedCount) return finalText[index];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplayText(scrambled);
      resolvedCount++;

      if (resolvedCount > length) {
        setDisplayText(finalText);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHasStarted(true);
      scramble();
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [delay, scramble]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: hasStarted ? 1 : 0 }}
      transition={{ duration: 0.1 }}
      style={{ display: "inline-block" }}
    >
      {Tag === "h1" ? (
        <h1 className={className}>{displayText}</h1>
      ) : Tag === "h2" ? (
        <h2 className={className}>{displayText}</h2>
      ) : Tag === "h3" ? (
        <h3 className={className}>{displayText}</h3>
      ) : (
        <span className={className}>{displayText}</span>
      )}
    </motion.span>
  );
}
