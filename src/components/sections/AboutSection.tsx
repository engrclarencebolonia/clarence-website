"use client";

import Image from "next/image";
import { Reveal, StaggerChildren, staggerItem } from "@/components/ui/Reveal";
import { personalInfo } from "@/data";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Layers } from "lucide-react";

const philosophyPoints = [
  {
    icon: "🎯",
    title: "System-first thinking",
    description:
      "Every component exists in a system. I design tokens, not one-offs. Consistency at scale is a design decision.",
  },
  {
    icon: "🧠",
    title: "Cognitive load reduction",
    description:
      "Less visual noise, more decision support. Good design helps users act faster with more confidence.",
  },
  {
    icon: "🔧",
    title: "Engineering feasibility",
    description:
      "Coming from a frontend background, I design knowing how it will be built. No handoff surprises.",
  },
  {
    icon: "📊",
    title: "Data-driven clarity",
    description:
      "I surface key metrics first, with clear drill-down paths. Dashboards must feel authoritative, not decorative.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text content */}
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-3">
                About Me
              </p>
              <h2 className="text-display-sm text-3xl sm:text-4xl text-slate-900 dark:text-white mb-6">
                I solve operational friction,{" "}
                <span className="gradient-text">not just screens.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                {personalInfo.bio}
              </p>
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {personalInfo.bioExtended}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex flex-col gap-3 mb-8">
                {[
                  { icon: <MapPin size={14} />, text: personalInfo.location },
                  {
                    icon: <Briefcase size={14} />,
                    text: "4+ years · 30+ projects",
                  },
                  {
                    icon: <Layers size={14} />,
                    text: "Fintech · B2B SaaS · Mobile Apps",
                  },
                ].map(({ icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500"
                  >
                    <span className="text-brand-500">{icon}</span>
                    {text}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="px-5 py-2.5 rounded-xl bg-brand-600 text-white text-sm font-medium hover:bg-brand-700 transition-all hover:-translate-y-0.5 shadow-sm shadow-brand-500/20"
                >
                  Let&rsquo;s Talk
                </a>
                <a
                  href={personalInfo.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-sm font-medium hover:border-brand-400 dark:hover:border-brand-700 transition-all hover:-translate-y-0.5 bg-white dark:bg-surface-800"
                >
                  View Figma Portfolio
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: Philosophy cards */}
          <div>
            <Reveal delay={0.1}>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-600 mb-5">
                Design Philosophy
              </p>
            </Reveal>
            <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {philosophyPoints.map((point) => (
                <motion.div
                  key={point.title}
                  variants={staggerItem}
                  className="p-5 rounded-2xl bg-white dark:bg-surface-850 border border-slate-100 dark:border-white/5 hover:border-brand-200 dark:hover:border-brand-800/50 shadow-card dark:shadow-none transition-all duration-200 hover:-translate-y-0.5 group"
                >
                  <div className="text-2xl mb-3" aria-hidden>
                    {point.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1.5 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-500 leading-relaxed">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </StaggerChildren>

            {/* Stats */}
            <Reveal delay={0.25} className="mt-5 mb-2">
            <div className="relative h-56 w-full rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 shadow-card">
              <Image
                src="/images/about-photo.jpg"
                alt="Clarence at work"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-medium bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                Bacoor, Cavite, Philippines
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3} className="mt-6">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100/50 dark:from-brand-950/30 dark:to-brand-900/20 border border-brand-100 dark:border-brand-800/30">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { val: "4+", lab: "Years" },
                    { val: "30+", lab: "Projects" },
                    { val: "3", lab: "Design Systems" },
                  ].map(({ val, lab }) => (
                    <div key={lab} className="text-center">
                      <p className="text-2xl font-display font-bold text-brand-600 dark:text-brand-400">
                        {val}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">
                        {lab}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
