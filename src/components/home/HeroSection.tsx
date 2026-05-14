"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/shared/Button";
import { ArrowRight, FileText, Mail } from "lucide-react";
import { GithubIcon } from "@/components/shared/Icons";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[hsl(210,80%,55%)]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[hsl(280,70%,60%)]/3 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-accent bg-accent-light border border-border-accent rounded-full">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            Open to opportunities
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
        >
          <span className="text-text-primary">I build </span>
          <span className="gradient-text">intelligent systems</span>
          <br />
          <span className="text-text-primary">& digital products</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
        >
          AI + Full-Stack Product Engineer — designing and shipping AI agents,
          SaaS platforms, and agentic workflows from{" "}
          <span className="text-text-primary font-medium">idea to deployed product</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Button
            href="/projects"
            variant="primary"
            size="lg"
            iconRight={<ArrowRight size={16} />}
          >
            View Projects
          </Button>
          <Button
            href="/contact"
            variant="secondary"
            size="lg"
            icon={<Mail size={16} />}
          >
            Get in Touch
          </Button>
          <Button
            href="https://github.com"
            variant="ghost"
            size="lg"
            icon={<GithubIcon width={16} height={16} />}
            external
          >
            GitHub
          </Button>
          <Button
            href="#"
            variant="ghost"
            size="lg"
            icon={<FileText size={16} />}
          >
            Resume
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border-2 border-border rounded-full mx-auto flex justify-center pt-1"
          >
            <div className="w-1 h-2 bg-text-muted rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
