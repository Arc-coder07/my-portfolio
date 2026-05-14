"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionReveal } from "@/components/shared/SectionReveal";
import { Badge } from "@/components/shared/Badge";
import { getFeaturedProjects, categoryLabels } from "@/lib/projects";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="py-28 sm:py-32">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <SectionReveal>
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                Featured Work
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
                Projects I&apos;ve built
              </h2>
              <p className="mt-3 text-text-secondary max-w-lg">
                End-to-end products — from system architecture to deployed application.
                Each one is a deep dive into engineering decisions.
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
            >
              View all projects
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </SectionReveal>

        {/* Project Cards */}
        <div className="space-y-8">
          {featured.map((project, index) => (
            <SectionReveal key={project.slug} delay={index * 0.1}>
              <Link href={`/projects/${project.slug}`}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="group relative grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl border border-border bg-bg-secondary overflow-hidden hover:border-border-accent hover:shadow-lg transition-all duration-300"
                >
                  {/* Project Visual */}
                  <div
                    className="relative aspect-[16/10] lg:aspect-auto bg-bg-tertiary flex items-center justify-center overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}10, ${project.color}05)`,
                    }}
                  >
                    {/* Placeholder visual — geometric shapes */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div
                        className="w-32 h-32 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity"
                        style={{ backgroundColor: project.color }}
                      />
                      <div
                        className="absolute w-24 h-24 rounded-xl opacity-15 rotate-12 group-hover:rotate-6 transition-transform"
                        style={{ backgroundColor: project.color }}
                      />
                      <div
                        className="absolute w-16 h-16 rounded-lg opacity-10 -rotate-12 group-hover:-rotate-6 transition-transform"
                        style={{ backgroundColor: project.color }}
                      />
                      {/* Project title overlay */}
                      <span
                        className="absolute text-5xl font-black opacity-[0.06] select-none"
                        style={{ color: project.color }}
                      >
                        {project.title}
                      </span>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <Badge variant="category">{categoryLabels[project.category]}</Badge>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold tracking-tight text-text-primary group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-text-secondary leading-relaxed">
                      {project.tagline}
                    </p>

                    {/* Metrics */}
                    <div className="mt-6 grid grid-cols-3 gap-3">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="text-center p-3 rounded-lg bg-bg-primary border border-border-subtle">
                          <p className="text-sm font-semibold text-text-primary">{metric.value}</p>
                          <p className="text-xs text-text-tertiary mt-0.5">{metric.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 5).map((tech) => (
                        <Badge key={tech} variant="tech">{tech}</Badge>
                      ))}
                      {project.techStack.length > 5 && (
                        <Badge variant="outline">+{project.techStack.length - 5}</Badge>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="mt-8 flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all">
                      View Case Study
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </motion.article>
              </Link>
            </SectionReveal>
          ))}
        </div>

        {/* Mobile "view all" link */}
        <div className="mt-8 sm:hidden text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
          >
            View all projects
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
