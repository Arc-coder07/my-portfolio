"use client";

import { motion } from "framer-motion";
import { Asterisk } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/shared/Icons";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { SplitCTA } from "@/components/shared/SplitCTA";
import { SocialPill } from "@/components/shared/SocialPill";
import { BlueprintGrid } from "@/components/shared/BlueprintGrid";
import { FloatingAsterisks } from "@/components/shared/FloatingAsterisks";
import { TextScramble } from "@/components/shared/TextScramble";
import { KineticMarquee } from "@/components/shared/KineticMarquee";
import { GeometricWireframes } from "@/components/shared/GeometricWireframes";

export function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden pt-24 pb-12">
      {/* === BACKGROUND LAYERS === */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Layer 1: Kinetic text marquee (deepest) */}
        <KineticMarquee />

        {/* Layer 2: Blueprint grid with pulse lines */}
        <BlueprintGrid />

        {/* Layer 3: Floating asterisk/star decorations */}
        <FloatingAsterisks count={14} />

        {/* Layer 4: Geometric Wireframes */}
        <GeometricWireframes />
      </div>

      {/* === DECORATIVE ASTERISKS (strategic placement) === */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Massive Solid Asterisk Background */}
        <motion.div
          className="absolute top-[10%] -right-[10%] opacity-5 text-text-primary z-0 hidden md:block select-none font-sans"
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        >
          <span style={{ fontSize: '50rem', lineHeight: 1 }}>⁕</span>
        </motion.div>

        {/* Top-right decorative asterisk */}
        <motion.div
          className="absolute top-28 right-[8%] hidden lg:block"
          initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <Asterisk
              size={64}
              strokeWidth={1}
              className="text-accent opacity-20"
            />
          </motion.div>
        </motion.div>

        {/* Left side — between heading and bottom content */}
        <motion.div
          className="absolute bottom-[28%] left-[5%] hidden md:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            <span
              className="text-5xl font-mono select-none opacity-[0.07] text-text-primary"
              style={{ lineHeight: 1 }}
            >
              ✦
            </span>
          </motion.div>
        </motion.div>

        {/* Near "Engineer" — layered typography asterisk */}
        <motion.div
          className="absolute top-[42%] right-[15%] hidden lg:block"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9, type: "spring", stiffness: 100 }}
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1], rotate: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-7xl font-mono select-none text-accent opacity-10">
              ✽
            </span>
          </motion.div>
        </motion.div>

        {/* Bottom-center gap filler */}
        <motion.div
          className="absolute bottom-[12%] left-1/2 -translate-x-1/2 hidden sm:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, -6, 0], rotate: [0, 90, 180, 270, 360] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          >
            <Asterisk
              size={32}
              strokeWidth={1.5}
              className="text-text-primary opacity-[0.06]"
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12">
        {/* Top bar (Name & CTA) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            {/* Status Pill — "Open to work" */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border-subtle bg-bg-secondary/80 backdrop-blur-sm"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-green-500"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="text-xs font-medium text-text-secondary tracking-wide">
                Open to opportunities
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SplitCTA href="/projects" label="Projects" />
          </motion.div>
        </div>

        {/* Intro line + Asymmetric Typography */}
        <div className="flex flex-col w-full mb-16 relative z-10">
          {/* Small intro text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-sm sm:text-base font-sans text-text-tertiary mb-4 sm:mb-5 tracking-wide flex items-center gap-2"
          >
            <span className="text-accent text-lg">✦</span>
            <span>
              Hi, I&apos;m <span className="text-text-primary font-semibold">Amarnadh</span> —
            </span>
          </motion.p>

          {/* "Full-Stack" heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="relative"
          >
            <TextScramble
              text="Full-Stack"
              delay={0.3}
              speed={35}
              className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold tracking-tighter leading-[0.85] text-text-primary uppercase block"
            />
          </motion.div>

          {/* "Engineer" heading */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="self-end md:mr-12 lg:mr-24 mt-4 sm:mt-6 flex items-baseline gap-4 sm:gap-6"
          >
            <TextScramble
              text="Engineer"
              delay={0.6}
              speed={35}
              className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold tracking-tighter leading-[0.85] text-text-primary uppercase block"
            />
            {/* Inline decorative asterisk next to "Engineer" */}
            <motion.span
              className="text-accent text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mono select-none hidden sm:inline-block"
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 0.25, rotate: 0 }}
              transition={{ duration: 1, delay: 1, type: "spring" }}
            >
              <motion.span
                className="inline-block"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                ✳
              </motion.span>
            </motion.span>
          </motion.div>
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
