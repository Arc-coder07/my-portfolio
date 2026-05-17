"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";
import { SectionReveal } from "@/components/shared/SectionReveal";
import { Badge } from "@/components/shared/Badge";
import { getLabProjects, categoryLabels } from "@/lib/projects";
import Grainient from "@/components/shared/Grainient";

/* ─── EASILY EDITABLE GRAINIENT CONFIGURATION ─── */
// Tweak these values to adjust the background effect

// 1. LIGHT MODE SETTINGS
const GRAINIENT_LIGHT = {
  color1: "#e8e0ff",
  color2: "#6C47FF", 
  color3: "#a78bfa",
  colorBalance: 0.15,
  grainAmount: 0.15, // Adjust between 0.05 and 0.5 for light mode
  contrast: 1.2,
  saturation: 0.55,
};

// 2. DARK MODE SETTINGS
const GRAINIENT_DARK = {
  color1: "#060406",
  color2: "#6C47FF", 
  color3: "#2a1f99",
  colorBalance: 0.3,
  grainAmount: 0.2, // Adjust between 0.1 and 4.0 for dark mode
  contrast: 1.5,
  saturation: 0.4,
};

// 3. SHARED SETTINGS (Applies to both modes)
const GRAINIENT_SHARED = {
  timeSpeed: 0.25,
  warpStrength: 1,
  warpFrequency: 4.6,
  warpSpeed: 2,
  warpAmplitude: 50,
  blendAngle: -3,
  blendSoftness: 0.05,
  rotationAmount: 500,
  noiseScale: 2,
  grainScale: 2,
  grainAnimated: true,
  gamma: 1,
  centerX: 0,
  centerY: 0,
  zoom: 0.95,
};

export function LabPreview() {
  const lab = getLabProjects();
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });
  const progressWidth = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);

  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : false;
  const activeConfig = isDark ? GRAINIENT_DARK : GRAINIENT_LIGHT;

  return (
    <section className="relative py-20 sm:py-24 border-y border-border-subtle overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Grainient {...GRAINIENT_SHARED} {...activeConfig} />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <SectionReveal>
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider dark:text-accent text-white drop-shadow-sm">
                Lab
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight dark:text-text-primary text-white drop-shadow-sm">
                More experiments & work
              </h2>
              <p className="mt-2 text-sm dark:text-text-secondary text-white/80 drop-shadow-sm">
                Explorations, side projects, and smaller builds.
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium dark:text-accent text-white hover:text-accent-hover transition-colors drop-shadow-sm"
            >
              See all
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </SectionReveal>

        {/* Scrollable Cards */}
        <SectionReveal delay={0.15}>
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {lab.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="snap-start shrink-0 w-[300px] sm:w-[340px]"
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="group h-full rounded-xl border border-white/20 dark:border-border bg-white/10 dark:bg-bg-primary backdrop-blur-md p-6 hover:border-accent/40 hover:shadow-md transition-all duration-300"
                >
                  {/* Color dot + Category */}
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: project.color }}
                    />
                    <Badge variant="category">
                      {categoryLabels[project.category]}
                    </Badge>
                  </div>

                  {/* Title + tagline */}
                  <h3 className="text-lg font-semibold dark:text-text-primary text-white group-hover:text-accent transition-colors drop-shadow-sm">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-sm dark:text-text-secondary text-white/70 line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Tech badges */}
                  <div className="mt-4 flex flex-wrap gap-1">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-medium dark:text-text-tertiary text-white/60 dark:bg-bg-tertiary bg-white/15 px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div className="mt-5 flex items-center gap-1 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <ArrowUpRight size={12} />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Scroll progress bar */}
          <div className="mt-4 h-0.5 bg-white/20 dark:bg-border rounded-full overflow-hidden max-w-xs mx-auto">
            <motion.div
              className="h-full bg-accent rounded-full"
              style={{ width: progressWidth }}
            />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
