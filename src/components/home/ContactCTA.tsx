"use client";

import { SectionReveal } from "@/components/shared/SectionReveal";
import { Button } from "@/components/shared/Button";
import { Mail, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/Icons";

export function ContactCTA() {
  return (
    <section className="py-28 sm:py-32">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionReveal>
          <div className="relative rounded-3xl border border-border bg-bg-secondary overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-[hsl(210,80%,55%)]/5 rounded-full blur-3xl" />
            </div>

            <div className="px-8 py-16 sm:px-16 sm:py-20 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
                Let&apos;s build something{" "}
                <span className="gradient-text">together</span>
              </h2>
              <p className="mt-4 text-text-secondary max-w-lg mx-auto leading-relaxed">
                Looking for an AI engineer, product builder, or collaborator?
                I&apos;m open to internships, freelance work, and interesting
                conversations.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon={<Mail size={16} />}
                  iconRight={<ArrowRight size={16} />}
                >
                  Get in Touch
                </Button>
                <Button
                  href="https://github.com"
                  variant="secondary"
                  size="lg"
                  icon={<GithubIcon width={16} height={16} />}
                  external
                >
                  GitHub
                </Button>
                <Button
                  href="https://linkedin.com"
                  variant="secondary"
                  size="lg"
                  icon={<LinkedinIcon width={16} height={16} />}
                  external
                >
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
