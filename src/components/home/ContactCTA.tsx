"use client";

import { SectionReveal } from "@/components/shared/SectionReveal";
import { Button } from "@/components/shared/Button";
import { Mail, Calendar, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/Icons";
import Dither from "@/components/shared/Dither";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://linkedin.com",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "View my code",
    href: "https://github.com",
  },
  {
    icon: Calendar,
    label: "Book a Call",
    value: "Schedule a chat",
    href: "#",
  },
];

export function ContactCTA() {
  return (
    <section id="contact" className="relative py-28 sm:py-40 overflow-hidden border-t border-border">
      {/* Interactive Dither Background */}
      <div className="absolute inset-0 -z-10 bg-bg-primary opacity-60">
        <Dither
          waveColor={[0.36, 0.2, 0.9]} 
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.4}
          colorNum={4}
          waveAmplitude={0.15}
          waveFrequency={2.5}
          waveSpeed={0.05}
          pixelSize={3}
        />
        {/* Fallback gradient if WebGL fails */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <SectionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center bg-bg-primary/70 backdrop-blur-3xl border border-border/50 p-8 sm:p-12 lg:p-16 rounded-[2.5rem] shadow-2xl">
            {/* Left Side: Text and Methods */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary">
                Let&apos;s build something <br/>
                <span className="gradient-text italic font-serif text-5xl sm:text-6xl lg:text-7xl">together.</span>
              </h2>
              <p className="mt-6 text-text-secondary text-lg max-w-xl leading-relaxed">
                Looking for an AI engineer, product builder, or collaborator?
                I&apos;m currently open to internships, freelance projects, and interesting conversations.
              </p>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={method.label}
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group p-5 rounded-2xl border border-border/60 bg-bg-secondary/40 hover:bg-bg-secondary/80 hover:border-accent/40 transition-all duration-300 flex items-center gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon width={20} height={20} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-primary text-sm group-hover:text-accent transition-colors">
                          {method.label}
                        </h3>
                        <p className="text-xs text-text-tertiary mt-1">{method.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right Side: Quick Message Form */}
            <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl border border-border/50 bg-bg-secondary/80 shadow-inner backdrop-blur-md">
              <h3 className="text-2xl font-bold text-text-primary mb-2">Send a message</h3>
              <p className="text-text-secondary text-sm mb-8">I typically respond within 24 hours.</p>
              
              <form className="space-y-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-text-tertiary">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-bg-primary text-text-primary placeholder-text-muted text-sm focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-text-tertiary">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-bg-primary text-text-primary placeholder-text-muted text-sm focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-text-tertiary">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell me about your project or idea..."
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-bg-primary text-text-primary placeholder-text-muted text-sm focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                  />
                </div>
                <Button type="submit" variant="primary" className="w-full justify-center py-6 text-sm" iconRight={<ArrowRight size={16} />}>
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
