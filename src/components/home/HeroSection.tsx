"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/shared/Icons";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { SplitCTA } from "@/components/shared/SplitCTA";
import { SocialPill } from "@/components/shared/SocialPill";

export function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden pt-24 pb-12">
      {/* Background Geometric Lines */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full border border-border opacity-60" />
        <div className="absolute top-[30%] -right-[20%] w-[70vw] h-[70vw] rounded-full border border-border opacity-40" />
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12">
        {/* Top bar (Status & CTA) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-1"
          >
            <span className="text-sm font-semibold tracking-wider text-text-primary uppercase">
              Amarnadh P B
            </span>
            <span className="text-sm text-text-secondary font-sans">
              Currently open to new opportunities
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SplitCTA href="/projects" label="Projects" />
          </motion.div>
        </div>

        {/* Asymmetric Typography */}
        <div className="flex flex-col w-full mb-16 relative z-10">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold tracking-tighter leading-[0.85] text-text-primary uppercase"
          >
            Full-Stack
          </motion.h1>
          
          <motion.h1
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold tracking-tighter leading-[0.85] text-text-primary uppercase self-end md:mr-12 lg:mr-24 mt-4 sm:mt-6"
          >
            Engineer
          </motion.h1>
        </div>

        {/* Bottom Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <p className="text-lg sm:text-xl text-text-secondary font-sans leading-relaxed max-w-md">
              My goal is to <span className="font-mono italic text-text-primary">write maintainable, clean</span> and <span className="font-mono italic text-text-primary">understandable code</span> that powers high-performance SaaS applications and AI platforms.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-7 flex flex-wrap lg:justify-end gap-3"
          >
            <MagneticButton>
              <SocialPill href="https://github.com" icon={<GithubIcon width={16} height={16} />} label="Github" />
            </MagneticButton>
            <MagneticButton>
              <SocialPill href="https://linkedin.com" icon={<LinkedinIcon width={16} height={16} />} label="Linkedin" />
            </MagneticButton>
            <MagneticButton>
              <SocialPill href="https://twitter.com" icon={<TwitterIcon width={16} height={16} />} label="Twitter" />
            </MagneticButton>
            <MagneticButton>
              <SocialPill href="mailto:contact@example.com" icon={<span className="font-mono text-xs">@</span>} label="E-mail" />
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
