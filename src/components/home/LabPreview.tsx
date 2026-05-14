"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionReveal } from "@/components/shared/SectionReveal";
import { Badge } from "@/components/shared/Badge";
import { getLabProjects, categoryLabels } from "@/lib/projects";

export function LabPreview() {
  const lab = getLabProjects();
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });
  const progressWidth = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-20 sm:py-24 bg-bg-secondary border-y border-border-subtle">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <SectionReveal>
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                Lab
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                More experiments & work
              </h2>
              <p className="mt-2 text-text-secondary text-sm">
                Explorations, side projects, and smaller builds.
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
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
                  className="group h-full rounded-xl border border-border bg-bg-primary p-6 hover:border-border-accent hover:shadow-md transition-all duration-300"
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
                  <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-text-secondary line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Tech badges */}
                  <div className="mt-4 flex flex-wrap gap-1">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-medium text-text-tertiary bg-bg-tertiary px-2 py-0.5 rounded"
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
          <div className="mt-4 h-0.5 bg-border rounded-full overflow-hidden max-w-xs mx-auto">
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
