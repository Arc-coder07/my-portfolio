import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/shared/Icons";
import { Badge } from "@/components/shared/Badge";
import { Button } from "@/components/shared/Button";
import { projects, categoryLabels, getProjectBySlug } from "@/lib/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — ${project.tagline}`,
    description: project.description,
    openGraph: {
      title: `${project.title} — ${project.tagline}`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          All Projects
        </Link>

        {/* ===== A. PROJECT HERO ===== */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="category">{categoryLabels[project.category]}</Badge>
            <Badge variant={project.status === "active" ? "status-active" : "status-completed"}>
              {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
            </Badge>
            <span className="text-xs text-text-tertiary">{project.date}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">
            {project.title}
          </h1>
          <p className="mt-3 text-xl text-text-secondary leading-relaxed">
            {project.tagline}
          </p>

          {/* Metric pills */}
          <div className="mt-8 flex flex-wrap gap-3">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="px-4 py-3 rounded-xl bg-bg-secondary border border-border-subtle text-center min-w-[120px]"
              >
                <p className="text-base font-semibold text-text-primary">{m.value}</p>
                <p className="text-xs text-text-tertiary mt-0.5">{m.label}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                variant="primary"
                icon={<ExternalLink size={14} />}
                external
              >
                Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                variant="secondary"
                icon={<GithubIcon width={14} height={14} />}
                iconRight={<ArrowUpRight size={12} />}
                external
              >
                Source Code
              </Button>
            )}
          </div>
        </section>

        {/* Hero visual visual */}
        <section className="mb-16">
          <div
            className="aspect-[16/9] rounded-2xl border border-border overflow-hidden flex items-center justify-center bg-bg-secondary"
            style={{
              background: !project.image 
                ? `linear-gradient(135deg, ${project.color}10, ${project.color}05, var(--bg-secondary))`
                : undefined,
            }}
          >
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center opacity-20">
                <div className="text-6xl mb-4">🖼️</div>
                <p className="text-sm font-medium tracking-wider uppercase">Visual Coming Soon</p>
              </div>
            )}
          </div>
        </section>

        {/* ===== B. THE PROBLEM ===== */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-text-primary mb-6">
            The Problem
          </h2>
          <blockquote className="border-l-4 border-accent pl-6 py-2 mb-6">
            <p className="text-lg text-text-primary italic leading-relaxed">
              &ldquo;{project.description}&rdquo;
            </p>
          </blockquote>
          <p className="text-text-secondary leading-relaxed">
            This project addresses a real pain point by building a purpose-built solution
            that goes beyond existing tools. The focus is on creating an intuitive,
            performant experience that users can trust with their most sensitive workflows.
          </p>
        </section>

        {/* ===== C. ARCHITECTURE ===== */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-text-primary mb-6">
            Architecture & System Design
          </h2>
          <div className="rounded-xl border border-border bg-bg-secondary p-8">
            <div className="flex items-center justify-center h-48 text-text-tertiary text-sm">
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-bg-tertiary mx-auto mb-3 flex items-center justify-center">
                  <span className="text-lg">🏗️</span>
                </div>
                <p>Architecture diagram will be added here</p>
                <p className="text-xs mt-1">(Mermaid / SVG / Interactive visualization)</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== E. TECH BREAKDOWN ===== */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-text-primary mb-6">
            Technical Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="tech" className="text-sm px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        {/* ===== F. ENGINEERING DECISIONS ===== */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-text-primary mb-6">
            Key Engineering Decisions
          </h2>
          <div className="space-y-4">
            <div className="p-6 rounded-xl border border-border bg-bg-secondary">
              <p className="text-sm font-semibold text-accent mb-2">Decision #1</p>
              <p className="text-text-primary font-medium">
                Architecture choice and its tradeoffs
              </p>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                This section will detail the key architectural decisions made during development,
                including alternatives considered, tradeoffs evaluated, and the reasoning behind
                the final approach.
              </p>
            </div>
          </div>
        </section>

        {/* ===== G. RESULTS ===== */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-text-primary mb-6">
            Results & Metrics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="p-6 rounded-xl border border-border bg-bg-secondary text-center"
              >
                <p className="text-2xl font-bold text-text-primary">{m.value}</p>
                <p className="text-sm text-text-tertiary mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <div className="pt-8 border-t border-border flex justify-between items-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            <ArrowLeft size={14} />
            All Projects
          </Link>
          <Button href="/contact" variant="primary" size="sm">
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  );
}
