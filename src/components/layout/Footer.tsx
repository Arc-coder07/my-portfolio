import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/Icons";

const socialLinks = [
  { href: "https://github.com", label: "GitHub", icon: GithubIcon },
  { href: "https://linkedin.com", label: "LinkedIn", icon: LinkedinIcon },
  { href: "mailto:hello@example.com", label: "Email", icon: Mail },
];

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-text-primary font-semibold text-lg tracking-tight"
            >
              amarnadh<span className="text-accent">.</span>
            </Link>
            <p className="text-text-tertiary text-sm max-w-xs leading-relaxed">
              Building intelligent systems, SaaS products, and agentic
              workflows — end to end.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-text-primary text-sm font-semibold uppercase tracking-wider">
              Navigate
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-tertiary text-sm hover:text-text-primary transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-text-primary text-sm font-semibold uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-tertiary text-sm hover:text-text-primary transition-colors inline-flex items-center gap-2"
                    >
                      <Icon width={14} height={14} />
                      {link.label}
                      <ArrowUpRight size={12} className="opacity-50" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} Amarnadh P B. All rights reserved.
          </p>
          <p className="text-text-muted text-xs">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
