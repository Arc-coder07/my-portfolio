import type { Metadata } from "next";
import { SectionReveal } from "@/components/shared/SectionReveal";
import { Badge } from "@/components/shared/Badge";
import { Button } from "@/components/shared/Button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "AI + Full-Stack Product Engineer building intelligent systems, SaaS products, and agentic workflows from idea to deployed product.",
};

const skills = {
  "AI & ML": ["LLM Orchestration", "CrewAI", "LangChain", "RAG", "Vector Search", "Computer Vision"],
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  Backend: ["Python", "FastAPI", "Node.js", "REST APIs", "WebSockets"],
  "Developer Tools": ["Git", "Docker", "Vercel", "Supabase", "Tauri"],
  Infrastructure: ["Web Crypto API", "IndexedDB", "PWA", "CI/CD"],
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <SectionReveal>
          <div className="mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              About
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">
              Building at the intersection of{" "}
              <span className="gradient-text">AI and product</span>
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-2xl">
              I&apos;m Amarnadh — an AI + Full-Stack Product Engineer who designs
              and ships intelligent systems from concept to production. I believe
              the best products are built by people who understand both the user
              experience and the underlying architecture.
            </p>
          </div>
        </SectionReveal>

        {/* Philosophy */}
        <SectionReveal delay={0.1}>
          <section className="mb-16">
            <h2 className="text-2xl font-bold tracking-tight text-text-primary mb-6">
              What drives me
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-border bg-bg-secondary">
                <h3 className="font-semibold text-text-primary mb-2">
                  AI as a core layer, not a feature
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  I build products where AI is the intelligence engine — from multi-agent
                  orchestration to autonomous workflows. Every AI decision is tied to
                  tangible user value.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-bg-secondary">
                <h3 className="font-semibold text-text-primary mb-2">
                  End-to-end thinking
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  From database schema to deployment pipeline, from UX research to
                  security architecture — I own the full stack. No handoffs between
                  idea and shipped product.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-bg-secondary">
                <h3 className="font-semibold text-text-primary mb-2">
                  Engineering decisions deserve explanation
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  I document not just what I built, but why. The tradeoffs, the
                  failures, the optimizations — because great engineering is also
                  great communication.
                </p>
              </div>
            </div>
          </section>
        </SectionReveal>

        {/* Skills */}
        <SectionReveal delay={0.2}>
          <section className="mb-16">
            <h2 className="text-2xl font-bold tracking-tight text-text-primary mb-6">
              Technical skills
            </h2>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-3">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="tech">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </SectionReveal>

        {/* CTA */}
        <SectionReveal delay={0.3}>
          <div className="p-8 rounded-2xl border border-border bg-bg-secondary text-center">
            <h2 className="text-2xl font-bold text-text-primary mb-3">
              Interested in working together?
            </h2>
            <p className="text-text-secondary mb-6 max-w-md mx-auto">
              Whether it&apos;s a full-time role, freelance project, or just a
              conversation about AI systems — I&apos;d love to connect.
            </p>
            <Button href="/contact" variant="primary" iconRight={<ArrowRight size={14} />}>
              Get in Touch
            </Button>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
