"use client";

import { Reveal, StaggerChildren, staggerItem } from "@/components/ui/Reveal";
import { skills } from "@/data";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const categoryMeta: Record<string, { emoji: string; accent: string; tagBase: string; tagStar: string }> = {
  Design: {
    emoji: "🎨",
    accent: "text-brand-600 dark:text-brand-400",
    tagBase: "bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/5",
    tagStar: "bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 border-brand-200 dark:border-brand-800/50 font-semibold",
  },
  Tools: {
    emoji: "🛠",
    accent: "text-violet-600 dark:text-violet-400",
    tagBase: "bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/5",
    tagStar: "bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800/50 font-semibold",
  },
  Development: {
    emoji: "⌨️",
    accent: "text-sky-600 dark:text-sky-400",
    tagBase: "bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/5",
    tagStar: "bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800/50 font-semibold",
  },
  Specializations: {
    emoji: "🎯",
    accent: "text-amber-600 dark:text-amber-500",
    tagBase: "bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/5",
    tagStar: "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800/50 font-semibold",
  },
};

function SkillTag({ label, meta }: { label: string; meta: { emoji: string; accent: string; tagBase: string; tagStar: string } }) {
  const isStar = label.startsWith("⭐") || label.startsWith("🔥");
  const display = label.replace(/^[⭐🔥]\s?/, "");
  return (
    <span className={cn(
      "px-2.5 py-1 rounded-lg text-xs border transition-colors cursor-default",
      isStar ? meta.tagStar : meta.tagBase
    )}>
      {isStar && <span className="mr-1 text-[10px]">{label.startsWith("🔥") ? "🔥" : "⭐"}</span>}
      {display}
    </span>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-slate-50/50 dark:bg-surface-850/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-2">Capabilities</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white leading-tight">
            Tools & skills I <span className="gradient-text">work with daily.</span>
          </h2>
        </Reveal>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skills.map((skillGroup) => {
            const meta = categoryMeta[skillGroup.category];
            return (
              <motion.div key={skillGroup.category} variants={staggerItem}
                className="p-6 rounded-2xl bg-white dark:bg-surface-850 border border-slate-100 dark:border-white/5 shadow-card dark:shadow-none hover:shadow-card-hover dark:hover:shadow-card-dark-hover hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="text-xl" aria-hidden>{meta.emoji}</span>
                  <h3 className={cn("text-sm font-semibold", meta.accent)}>{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, idx) => (
                    <motion.div key={item} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }} transition={{ delay: idx * 0.03 }}>
                      <SkillTag label={item} meta={meta} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </StaggerChildren>

        {/* Process */}
        <Reveal className="mt-16">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-2">My Process</p>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">How I design, from brief to ship.</h3>
          </div>
        </Reveal>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { step: "01", title: "Workflow & Data Analysis", desc: "Uncover user pain points and data-driven insights to define the problem" },
            { step: "02", title: "Structuring the System", desc: "Unify workflows, data, and tools into a scalable system aligned with user, business, and engineering requirements" },
            { step: "03", title: "Interaction & Interface Design", desc: "Design clear, accessible interfaces that support decisions and reduce cognitive load" },
            { step: "04", title: "Validation & Optimization", desc: "Validate with stakeholders and real usage to ensure usability, iteration, and feasibility" },
            { step: "05", title: "Launch & Iteration", desc: "Ship, measure impact, and continuously refine based on feedback and usage" },
          ].map((phase, i) => (
            <motion.div key={phase.step} variants={staggerItem}
              className="relative p-4 rounded-xl bg-white dark:bg-surface-850 border border-slate-100 dark:border-white/5 group hover:border-brand-200 dark:hover:border-brand-800/50 transition-all">
              {i < 4 && <div className="hidden md:block absolute top-6 right-0 w-4 h-px bg-slate-200 dark:bg-white/10 translate-x-full" aria-hidden />}
              <span className="font-mono text-xs font-semibold text-brand-400 dark:text-brand-600 mb-2 block">{phase.step}</span>
              <h4 className="text-xs font-semibold text-slate-900 dark:text-white mb-1.5 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors leading-snug">{phase.title}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-600 leading-relaxed">{phase.desc}</p>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
