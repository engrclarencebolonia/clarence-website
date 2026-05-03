"use client";

import { Reveal, StaggerChildren, staggerItem } from "@/components/ui/Reveal";
import { skills } from "@/data";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const categoryColors: Record<string, string> = {
  Design:
    "bg-brand-50 dark:bg-brand-950/30 border-brand-100 dark:border-brand-800/40",
  Tools:
    "bg-violet-50 dark:bg-violet-950/30 border-violet-100 dark:border-violet-800/40",
  Development:
    "bg-sky-50 dark:bg-sky-950/30 border-sky-100 dark:border-sky-800/40",
  Specializations:
    "bg-amber-50 dark:bg-amber-950/30 border-amber-100 dark:border-amber-800/40",
};

const categoryIconColors: Record<string, string> = {
  Design: "text-brand-600 dark:text-brand-400",
  Tools: "text-violet-600 dark:text-violet-400",
  Development: "text-sky-600 dark:text-sky-400",
  Specializations: "text-amber-600 dark:text-amber-500",
};

const categoryEmoji: Record<string, string> = {
  Design: "🎨",
  Tools: "🛠",
  Development: "⌨️",
  Specializations: "🎯",
};

const toolLogos: Record<string, string> = {
  Figma: "🔥",
  "Product Design": "⭐",
  "UX Strategy": "⭐",
  "Design Systems in Figma (components, tokens, scalability)": "⭐",
   "B2B SaaS Platforms": "⭐",
      "Problem Framing & Solution Mapping": "⭐",
      "Data-informed Design": "⭐",
             "Product Discovery & Research":"⭐",
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 sm:py-32 bg-slate-50/50 dark:bg-surface-850/50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-2">
            Capabilities
          </p>
          <h2 className="text-display-sm text-3xl sm:text-4xl text-slate-900 dark:text-white">
            Tools & skills I{" "}
            <span className="gradient-text">work with daily.</span>
          </h2>
        </Reveal>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skills.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              variants={staggerItem}
              className={cn(
                "p-6 rounded-2xl border transition-all duration-200",
                "bg-white dark:bg-surface-850",
                "shadow-card dark:shadow-none",
                "hover:shadow-card-hover dark:hover:shadow-card-dark-hover",
                "hover:-translate-y-0.5"
              )}
            >
              <div className="flex items-center gap-2.5 mb-5">
                <span
                  className="text-xl"
                  aria-hidden
                >
                  {categoryEmoji[skillGroup.category]}
                </span>
                <h3
                  className={cn(
                    "text-sm font-semibold",
                    categoryIconColors[skillGroup.category]
                  )}
                >
                  {skillGroup.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, idx) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.04 }}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5 hover:border-brand-300 dark:hover:border-brand-700 hover:text-brand-700 dark:hover:text-brand-300 transition-all cursor-default"
                  >
                    {toolLogos[item] && (
                      <span className="mr-1" aria-hidden>
                        {toolLogos[item]}
                      </span>
                    )}
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </StaggerChildren>

        {/* Process section */}
        <Reveal className="mt-16">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-2">
              My Process
            </p>
            <h3 className="text-display-sm text-2xl sm:text-3xl text-slate-900 dark:text-white">
              How I design, from brief to ship.
            </h3>
          </div>
        </Reveal>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {[
            {
              step: "01",
              title: "Workflow & Data Analysis",
              desc: "Uncover user pain points and data-driven insights to define the problem",
            },
            {
              step: "02",
              title: "Structuring the System",
              desc: "Unify workflows, data, and tools into a scalable system aligned with user, business, and engineering requirements",
            },
            {
              step: "03",
              title: "Interaction & Interface Design",
              desc: "Design clear, accessible interfaces that support decisions and reduce cognitive load",
            },
            {
              step: "04",
              title: "Validation & Optimization",
              desc: "Validate with stakeholders and real usage to ensure usability, iteration, and feasibility",
            },
            {
              step: "05",
              title: "Launch & Iteration",
              desc: "Ship, measure impact, and continuously refine based on feedback and usage",
            },
          ].map((phase, i) => (
            <motion.div
              key={phase.step}
              variants={staggerItem}
              className="relative p-4 rounded-xl bg-white dark:bg-surface-850 border border-slate-100 dark:border-white/5 group hover:border-brand-200 dark:hover:border-brand-800/50 transition-all"
            >
              {/* Connector line */}
              {i < 4 && (
                <div
                  className="hidden md:block absolute top-6 right-0 w-4 h-px bg-slate-200 dark:bg-white/10 translate-x-full"
                  aria-hidden
                />
              )}
              <span className="font-mono text-xs font-semibold text-brand-400 dark:text-brand-600 mb-2 block">
                {phase.step}
              </span>
              <h4 className="text-xs font-semibold text-slate-900 dark:text-white mb-1.5 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors leading-snug">
                {phase.title}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-600 leading-relaxed">
                {phase.desc}
              </p>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
