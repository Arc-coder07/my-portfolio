import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SplitCTAProps {
  href: string;
  label: string;
}

export function SplitCTA({ href, label }: SplitCTAProps) {
  return (
    <Link href={href} className="group inline-flex items-center gap-2">
      <div className="flex h-12 items-center justify-center rounded-full bg-bg-secondary px-8 text-sm font-semibold text-text-primary transition-colors duration-300 border border-transparent group-hover:bg-bg-tertiary group-hover:border-border shadow-sm group-hover:shadow-md">
        {label}
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bg-secondary text-text-primary transition-all duration-300 border border-transparent group-hover:bg-accent group-hover:text-bg-primary group-hover:border-accent group-hover:translate-x-2 shadow-sm group-hover:shadow-md">
        <ArrowRight size={18} className="transition-transform duration-300 group-hover:-rotate-45" />
      </div>
    </Link>
  );
}
