/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionReveal } from "@/components/shared/SectionReveal";
import { getFeaturedProjects, categoryLabels } from "@/lib/projects";
import { useState } from "react";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-24 sm:py-32 border-t border-border bg-bg-secondary/30 relative overflow-hidden">
      {/* Moving Marquee Banner */}
      <div className="absolute top-0 left-0 w-full overflow-hidden border-b border-border/40 bg-bg-primary/40 py-3 backdrop-blur-sm z-0">
        <div className="flex whitespace-nowrap w-max animate-[marquee-left_30s_linear_infinite]">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.3em] text-text-tertiary uppercase flex items-center">
              <span className="mx-6">Featured Work</span>
              <span className="text-accent/60">⁕</span>
              <span className="mx-6">Creative Engineering</span>
              <span className="text-accent/60">⁕</span>
              <span className="mx-6">AI Systems</span>
              <span className="text-accent/60">⁕</span>
              <span className="mx-6">Product Design</span>
              <span className="text-accent/60">⁕</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        <SectionReveal>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-accent text-xs font-mono font-bold tracking-[0.2em] uppercase mb-4 block">
                Selected Work
              </span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-text-primary">
                Featured <span className="text-text-muted italic font-serif font-light tracking-normal">Projects</span>
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-primary hover:text-accent transition-colors pb-1 border-b-2 border-text-primary hover:border-accent"
            >
              View full archive
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </SectionReveal>

        {/* List Layout - Refined & Compact Minimalist Approach */}
        <div className="flex flex-col border-t-2 border-border/80">
          {featured.map((project, index) => (
            <SectionReveal key={project.slug} delay={index * 0.05}>
              <Link href={`/projects/${project.slug}`}>
                <div 
                  className="group relative flex flex-col md:flex-row md:items-center justify-between py-10 md:py-12 border-b border-border/80 hover:bg-bg-primary transition-all duration-500 px-6 -mx-6 rounded-2xl"
                  onMouseEnter={() => setHoveredIdx(index)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {/* Left side: Index & Title */}
                  <div className="flex-1 md:pr-8 z-10 relative">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 mb-3 md:mb-0">
                      <span className="text-text-tertiary font-mono text-sm font-semibold tracking-widest">
                        0{index + 1}
                      </span>
                      <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary group-hover:-translate-y-1 group-hover:text-accent transition-all duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Middle: Details */}
                  <div className="hidden md:flex flex-1 flex-col items-start px-8 z-10 relative border-l border-border/50 pl-8">
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {project.tagline}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-[10px] font-mono text-text-tertiary uppercase tracking-wider px-2 py-1 rounded bg-bg-secondary border border-border">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-wider px-2 py-1 rounded bg-bg-secondary border border-border">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right side: Category & Link */}
                  <div className="flex items-center justify-between md:justify-end gap-6 mt-8 md:mt-0 md:w-32 text-right shrink-0 z-10 relative">
                    <span className="text-xs font-mono font-medium text-text-tertiary md:hidden tracking-wider uppercase">
                      {categoryLabels[project.category]}
                    </span>
                    
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border border-border group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300 ml-auto bg-bg-primary text-text-primary">
                      <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  {/* Floating Image Preview (Desktop only) */}
                  <div 
                    className="hidden lg:block absolute z-0 pointer-events-none w-[320px] h-[200px] left-1/2 top-1/2 rounded-xl overflow-hidden shadow-2xl transition-all duration-500 ease-out will-change-transform"
                    style={{
                      opacity: hoveredIdx === index ? 1 : 0,
                      transform: hoveredIdx === index 
                        ? 'translate(-50%, -50%) scale(1) rotate(2deg)' 
                        : 'translate(-50%, -40%) scale(0.95) rotate(0deg)',
                    }}
                  >
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-accent/20 flex items-center justify-center">
                        <span className="font-black text-2xl opacity-30 text-accent">{project.title}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 border border-white/10 rounded-xl" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-50" />
                  </div>
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
