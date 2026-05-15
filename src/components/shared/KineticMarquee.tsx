"use client";

import { Asterisk } from "lucide-react";

interface KineticMarqueeProps {
  text?: string;
  speed?: number;
}

export function KineticMarquee({
  text = "FULL-STACK ENGINEER",
  speed = 50,
}: KineticMarqueeProps) {
  // Repeat the text enough times to fill the width
  const items = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none flex items-center"
      style={{ transform: "rotate(-8deg) scale(1.2)" }}
    >
      {/* Row 1 — moves left */}
      <div className="absolute top-[22%] w-[400vw] left-[-100vw]">
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: `marquee-left ${speed}s linear infinite`,
          }}
        >
          {items.map((i) => (
            <div key={i} className="flex items-center">
              <span
                className="text-[8rem] sm:text-[12rem] lg:text-[16rem] font-black uppercase select-none tracking-tight leading-none"
                style={{
                  WebkitTextStroke: "1px var(--border)",
                  color: "transparent",
                  opacity: 0.3,
                }}
              >
                {text}
              </span>
              <Asterisk
                className="mx-8 sm:mx-12 shrink-0"
                style={{ color: "var(--border)", opacity: 0.3 }}
                size={48}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — moves right, offset */}
      <div className="absolute top-[55%] w-[400vw] left-[-100vw]">
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: `marquee-right ${speed * 1.3}s linear infinite`,
          }}
        >
          {items.map((i) => (
            <div key={i} className="flex items-center">
              <span
                className="text-[8rem] sm:text-[12rem] lg:text-[16rem] font-black uppercase select-none tracking-tight leading-none"
                style={{
                  WebkitTextStroke: "1px var(--border)",
                  color: "transparent",
                  opacity: 0.2,
                }}
              >
                {text}
              </span>
              <Asterisk
                className="mx-8 sm:mx-12 shrink-0"
                style={{ color: "var(--border)", opacity: 0.2 }}
                size={48}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
