import type { Metadata } from "next";
import { SectionReveal } from "@/components/shared/SectionReveal";
import { Button } from "@/components/shared/Button";
import { Mail, ArrowUpRight, MapPin, Calendar } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch — open to internships, freelance work, collaborations, and interesting conversations about AI and product engineering.",
};

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
    description: "Best for detailed inquiries",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://linkedin.com",
    description: "Professional networking",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "View my work",
    href: "https://github.com",
    description: "Open source & projects",
  },
  {
    icon: Calendar,
    label: "Book a Call",
    value: "Schedule a meeting",
    href: "#",
    description: "30-min introductory chat",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Contact
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">
              Let&apos;s{" "}
              <span className="gradient-text">connect</span>
            </h1>
            <p className="mt-4 text-lg text-text-secondary max-w-lg mx-auto">
              Open to internships, freelance projects, collaborations, and
              conversations about AI, product engineering, and building cool things.
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-text-tertiary">
              <MapPin size={14} />
              <span>India · Open to Remote</span>
            </div>
          </div>
        </SectionReveal>

        {/* Contact Methods */}
        <SectionReveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group p-6 rounded-xl border border-border bg-bg-secondary hover:border-border-accent hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent-light flex items-center justify-center">
                      <Icon width={18} height={18} className="text-accent" />
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-text-muted group-hover:text-accent transition-colors"
                    />
                  </div>
                  <h3 className="font-semibold text-text-primary group-hover:text-accent transition-colors">
                    {method.label}
                  </h3>
                  <p className="text-sm text-accent mt-0.5">{method.value}</p>
                  <p className="text-xs text-text-tertiary mt-2">
                    {method.description}
                  </p>
                </a>
              );
            })}
          </div>
        </SectionReveal>

        {/* Quick message */}
        <SectionReveal delay={0.2}>
          <div className="p-8 sm:p-10 rounded-2xl border border-border bg-bg-secondary">
            <h2 className="text-2xl font-bold text-text-primary mb-2">
              Send a quick message
            </h2>
            <p className="text-text-secondary text-sm mb-8">
              I typically respond within 24 hours.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-text-primary mb-1.5 block">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-bg-primary text-text-primary placeholder-text-muted text-sm focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-text-primary mb-1.5 block">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-bg-primary text-text-primary placeholder-text-muted text-sm focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-text-primary mb-1.5 block">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project, opportunity, or just say hello..."
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-bg-primary text-text-primary placeholder-text-muted text-sm focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                />
              </div>
              <Button type="submit" variant="primary" className="w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
