import Link from "next/link";
import { ReactNode } from "react";

interface SocialPillProps {
  href: string;
  icon: ReactNode;
  label: string;
}

export function SocialPill({ href, icon, label }: SocialPillProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border-subtle bg-transparent hover:bg-bg-secondary hover:border-border transition-all duration-300 group"
    >
      <span className="text-text-secondary group-hover:text-text-primary transition-colors">
        {icon}
      </span>
      <span className="text-sm font-medium font-sans text-text-secondary group-hover:text-text-primary transition-colors">
        {label}
      </span>
    </Link>
  );
}
