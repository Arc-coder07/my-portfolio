"use client";

import { Asterisk } from "lucide-react";

interface MarqueeBannerProps {
  items?: string[];
  speed?: number; // in seconds
}

const defaultItems = [
  "USER-FRIENDLY",
  "ADAPTIVE",
  "FLUID",
  "FUTURE-PROOF",
  "SEO-READY",
  "IMMERSIVE",
  "PROTECTED",
  "DEPENDABLE",
];

export function MarqueeBanner({
  items = defaultItems,
  speed = 40,
}: MarqueeBannerProps) {
  return (
    <div className="relative w-full overflow-hidden h-32 flex items-center justify-center -my-24 z-10 pointer-events-none">
      {/* Container for the intersecting banners */}
      <div className="relative w-full h-full flex items-center justify-center pointer-events-auto">

        {/* Banner 1 - Tilted down, moving left */}
        <div
          className="absolute w-[500vw] left-[-200vw] flex bg-accent text-[#ffffff] py-3 shadow-lg shadow-accent/20 z-10 hover:bg-accent-hover transition-colors duration-300"
          style={{ transform: "rotate(-2deg)" }}
        >
          <div
            className="flex whitespace-nowrap"
            style={{
              animation: `marquee-left ${speed}s linear infinite`,
            }}
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center">
                {items.map((item, index) => (
                  <div key={index} className="flex items-center px-6">
                    <span className="text-sm md:text-base font-bold tracking-widest">{item}</span>
                    <Asterisk className="w-10 h-10 mx-12 text-white/80" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Banner 2 - Tilted up, moving right */}
        <div
          className="absolute w-[500vw] left-[-200vw] flex bg-bg-secondary text-text-primary py-3 border-y border-border shadow-md z-0"
          style={{ transform: "rotate(2deg)" }}
        >
          <div
            className="flex whitespace-nowrap"
            style={{
              animation: `marquee-right ${speed}s linear infinite`,
            }}
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center">
                {items.map((item, index) => (
                  <div key={index} className="flex items-center px-6">
                    <span className="text-sm md:text-base font-bold tracking-widest">{item}</span>
                    <Asterisk className="w-10 h-10 mx-12 text-accent" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
