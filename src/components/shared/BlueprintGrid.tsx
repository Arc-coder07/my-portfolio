"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface PulseLine {
  id: number;
  type: "horizontal" | "vertical";
  position: number; // percentage
  delay: number;
}

export function BlueprintGrid() {
  const [pulseLines, setPulseLines] = useState<PulseLine[]>([]);

  useEffect(() => {
    // Generate random pulse lines on mount
    const timeout = setTimeout(() => {
      const lines: PulseLine[] = [];
      for (let i = 0; i < 6; i++) {
        lines.push({
          id: i,
          type: i % 2 === 0 ? "horizontal" : "vertical",
          position: 15 + Math.random() * 70, // keep within 15-85% range
          delay: Math.random() * 8,
        });
      }
      setPulseLines(lines);
    }, 0);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Static grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(var(--text-primary) 1px, transparent 1px),
            linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Smaller subdivision grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(var(--text-primary) 0.5px, transparent 0.5px),
            linear-gradient(90deg, var(--text-primary) 0.5px, transparent 0.5px)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Accent pulse lines — glow across the grid */}
      {pulseLines.map((line) => (
        <motion.div
          key={line.id}
          className="absolute"
          style={{
            ...(line.type === "horizontal"
              ? {
                  left: 0,
                  right: 0,
                  top: `${line.position}%`,
                  height: "1px",
                }
              : {
                  top: 0,
                  bottom: 0,
                  left: `${line.position}%`,
                  width: "1px",
                }),
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.3, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: line.delay,
            ease: "easeInOut",
          }}
        >
          <div
            className="w-full h-full"
            style={{
              background:
                line.type === "horizontal"
                  ? "linear-gradient(90deg, transparent, var(--accent), transparent)"
                  : "linear-gradient(180deg, transparent, var(--accent), transparent)",
            }}
          />
        </motion.div>
      ))}

      {/* Corner crosshair markers */}
      <svg
        className="absolute top-[15%] left-[10%] w-6 h-6 opacity-[0.08] text-text-primary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <line x1="12" y1="0" x2="12" y2="24" />
        <line x1="0" y1="12" x2="24" y2="12" />
        <circle cx="12" cy="12" r="4" />
      </svg>

      <svg
        className="absolute bottom-[20%] right-[12%] w-6 h-6 opacity-[0.08] text-text-primary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <line x1="12" y1="0" x2="12" y2="24" />
        <line x1="0" y1="12" x2="24" y2="12" />
        <circle cx="12" cy="12" r="4" />
      </svg>

      {/* Fade edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-transparent to-bg-primary" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-transparent to-bg-primary opacity-50" />
    </div>
  );
}
