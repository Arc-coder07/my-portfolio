"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GLYPHS = ["✦", "✽", "✳", "＊", "✵", "⁂", "※"];

interface FloatingGlyph {
  id: number;
  glyph: string;
  x: number; // percentage
  y: number; // percentage
  size: number; // rem
  rotation: number;
  duration: number;
  delay: number;
  floatRange: number; // pixels to float up/down
}

export function FloatingAsterisks({ count = 12 }: { count?: number }) {
  const [glyphs, setGlyphs] = useState<FloatingGlyph[]>([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const generated: FloatingGlyph[] = [];
      for (let i = 0; i < count; i++) {
        generated.push({
          id: i,
          glyph: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
          x: 5 + Math.random() * 90,
          y: 5 + Math.random() * 90,
          size: 0.6 + Math.random() * 1.8,
          rotation: Math.random() * 360,
          duration: 6 + Math.random() * 10,
          delay: Math.random() * 5,
          floatRange: 8 + Math.random() * 20,
        });
      }
      setGlyphs(generated);
    }, 0);
    return () => clearTimeout(timeout);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {glyphs.map((g) => (
        <motion.span
          key={g.id}
          className="absolute font-mono select-none"
          style={{
            left: `${g.x}%`,
            top: `${g.y}%`,
            fontSize: `${g.size}rem`,
            color: "var(--text-primary)",
          }}
          initial={{
            opacity: 0,
            rotate: g.rotation,
          }}
          animate={{
            opacity: [0.03, 0.1, 0.03],
            rotate: g.rotation + 360,
            y: [0, -g.floatRange, 0],
          }}
          transition={{
            duration: g.duration,
            repeat: Infinity,
            delay: g.delay,
            ease: "easeInOut",
          }}
        >
          {g.glyph}
        </motion.span>
      ))}
    </div>
  );
}
