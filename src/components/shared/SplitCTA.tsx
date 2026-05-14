import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SplitCTAProps {
  href: string;
  label: string;
}

export function SplitCTA({ href, label }: SplitCTAProps) {
  return (
    <Link href={href} className="group inline-flex items-center gap-2">
      <div className="flex h-12 items-center justify-center rounded-full bg-bg-secondary px-8 text-sm font-semibold text-text-primary transition-colors border border-transparent group-hover:bg-bg-tertiary group-hover:border-border">
        {label}
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bg-secondary text-text-primary transition-all border border-transparent group-hover:bg-bg-tertiary group-hover:border-border group-hover:translate-x-1">
        <ArrowRight size={18} />
      </div>
    </Link>
  );
}
