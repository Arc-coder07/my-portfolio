"use client";

import { SectionReveal } from "@/components/shared/SectionReveal";
import { TextReveal } from "@/components/shared/TextReveal";
import { Cpu, Layers, Workflow, Lightbulb } from "lucide-react";

const philosophyItems = [
  {
    icon: Cpu,
    title: "AI-First Product Design",
    description:
      "Every product I build treats AI as the core intelligence layer — not an afterthought. From agent orchestration to inference pipelines, AI drives the experience.",
  },
  {
    icon: Layers,
    title: "Systems Thinking",
    description:
      "I design architectures, not just interfaces. Every component decision considers scalability, data flow, security boundaries, and deployment realities.",
  },
  {
    icon: Workflow,
    title: "End-to-End Ownership",
    description:
      "From UX design to backend architecture to CI/CD — I ship complete products. No handoffs needed between idea and deployed application.",
  },
  {
    icon: Lightbulb,
    title: "Engineering as Storytelling",
    description:
      "Great engineering decisions deserve explanation. I document not just what I built, but why — the tradeoffs, the failures, and the optimizations.",
  },
];

export function PhilosophySection() {
  return (
    <section className="py-28 sm:py-32">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Philosophy
            </span>
            <TextReveal as="h2" className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-text-primary" delay={0.1}>
              How I think about building
            </TextReveal>
            <p className="mt-3 text-text-secondary max-w-lg mx-auto">
              The principles that guide every technical decision and product I create.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {philosophyItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <SectionReveal key={item.title} delay={index * 0.1}>
                <div className="group p-8 rounded-2xl border border-border bg-bg-secondary hover:border-border-accent hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-accent-light flex items-center justify-center mb-5">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
