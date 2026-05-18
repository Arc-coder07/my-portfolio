"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionReveal } from "@/components/shared/SectionReveal";
import { Badge } from "@/components/shared/Badge";
import { projects, categoryLabels, type ProjectMeta } from "@/lib/projects";

const categories = [
  { value: "all", label: "All Projects" },
  { value: "ai-systems", label: "AI Systems" },
  { value: "saas", label: "SaaS" },
  { value: "developer-tools", label: "Developer Tools" },
  { value: "full-stack", label: "Full-Stack" },
  { value: "experimental", label: "Experimental" },
];

function ProjectCard({ project }: { project: ProjectMeta }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.article
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        whileHover={{ y: -4 }}
        className="group h-full rounded-xl border border-border bg-bg-secondary overflow-hidden hover:border-border-accent hover:shadow-md transition-all duration-300"
      >
        {/* Visual header */}
        <div
          className="relative aspect-[16/9] bg-bg-tertiary flex items-center justify-center overflow-hidden"
          style={{
            background: !project.image 
              ? `linear-gradient(135deg, ${project.color}08, ${project.color}04)`
              : undefined,
          }}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div
              className="w-20 h-20 rounded-xl opacity-15"
              style={{ backgroundColor: project.color }}
            />
          )}
          
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
          
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <Badge variant="category">{categoryLabels[project.category]}</Badge>
            {project.tier === "featured" && (
              <Badge variant="tech">Featured</Badge>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: project.color }}
            />
            <span className="text-xs text-text-tertiary font-medium">
              {project.date}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="mt-1.5 text-sm text-text-secondary line-clamp-2 leading-relaxed">
            {project.tagline}
          </p>

          {/* Tech */}
          <div className="mt-4 flex flex-wrap gap-1">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-medium text-text-tertiary bg-bg-tertiary px-2 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-5 flex items-center gap-1 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
            View project
            <ArrowUpRight size={12} />
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <SectionReveal>
          <div className="mb-12">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Portfolio
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">
              All Projects
            </h1>
            <p className="mt-3 text-text-secondary max-w-lg">
              A collection of products, experiments, and explorations across AI,
              SaaS, and full-stack engineering.
            </p>
          </div>
        </SectionReveal>

        {/* Filters */}
        <SectionReveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all cursor-pointer ${
                  activeCategory === cat.value
                    ? "bg-accent text-[#ffffff] shadow-sm"
                    : "bg-bg-secondary text-text-secondary hover:text-text-primary hover:bg-bg-tertiary border border-border"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-tertiary">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
