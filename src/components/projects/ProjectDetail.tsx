"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { ArrowLeft, ExternalLink, ChevronRight, CheckCircle2, Lock } from "lucide-react";
import type { Project } from "@/data";
import { projects } from "@/data";
import { Reveal, StaggerChildren, staggerItem } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { img } from "@/lib/imagePath";

interface Props { project: Project }

const statusColors: Record<string, string> = {
  Live: "bg-emerald-100 text-emerald-800 border-emerald-300",
  Completed: "bg-slate-100 text-slate-700 border-slate-300",
  "In Progress": "bg-amber-100 text-amber-800 border-amber-300",
};

// FlavorBuddy Mobbin-style scroll showcase component
function FlavorBuddyShowcase({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={ref} className="my-10 overflow-hidden rounded-2xl bg-slate-950 py-10">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
        App Screens
      </p>
      {/* Row 1 — scrolls left on scroll */}
      <motion.div style={{ x: x1 }} className="flex gap-4 mb-4 px-6">
        {[project.image, project.mockupImage, project.image, project.mockupImage].filter(Boolean).map((src, i) => (
          <div key={i} className="flex-shrink-0 w-48 h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image src={img(src!)} alt={`${project.title} screen ${i+1}`} width={192} height={384} className="w-full h-full object-cover object-top" />
          </div>
        ))}
      </motion.div>
      {/* Row 2 — scrolls right on scroll */}
      <motion.div style={{ x: x2 }} className="flex gap-4 px-6">
        {[project.mockupImage, project.image, project.mockupImage, project.image].filter(Boolean).map((src, i) => (
          <div key={i} className="flex-shrink-0 w-48 h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image src={img(src!)} alt={`${project.title} screen ${i+5}`} width={192} height={384} className="w-full h-full object-cover object-center" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function ProjectDetail({ project }: Props) {
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const isFlavorBuddy = project.id === "flavour-buddy";
  const isBPO = project.id === "b2b-bpo-platform";

  return (
    <article className="min-h-screen pt-20">
      {/* ── Hero ── */}
      <div className={cn("relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br", project.coverGradient)}>
        {project.image && (
          <div className="absolute inset-0" aria-hidden>
            <Image src={img(project.image!)} alt="" fill className="object-cover object-top opacity-100" priority />
          </div>
        )}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <Link href="/#projects" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors group">
              <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
              Back to Work
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-3xl" aria-hidden>{project.emoji}</span>
              {project.nda && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 text-white/90 border border-white/20">
                  <Lock size={11} /> NDA Protected
                </span>
              )}
              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 text-white/90 border border-white/20">{project.type}</span>
              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 text-white/90 border border-white/20">{project.year}</span>
              <span className={cn("px-2.5 py-1 rounded-full text-xs font-medium border", statusColors[project.status])}>
                {project.status}
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-3 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">{project.subtitle}</p>

            {/* Client / Role / Duration */}
            {project.client && (
              <div className="flex flex-wrap gap-4 mt-8">
                {[
                  { label: "Client", value: project.client },
                  { label: "Role", value: project.role },
                  { label: "Duration", value: project.duration },
                ].filter(i => i.value).map(({ label, value }) => (
                  <div key={label} className="px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 min-w-[140px]">
                    <p className="text-white/50 text-xs font-medium uppercase tracking-wider mb-1">{label}</p>
                    <p className="text-white font-medium text-sm">{value}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Outcome metrics */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.outcomes.map((o) => (
              <div key={o.metric} className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15">
                <p className="text-2xl font-display font-bold text-white leading-none mb-1">{o.value}</p>
                <p className="text-xs text-white/60">{o.metric}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">

        {/* Overview */}
        <Reveal>
          <section className="mb-14" aria-labelledby="overview-heading">
            <SectionLabel number="01" label="Overview" color="brand" />
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">{project.overview}</p>
          </section>
        </Reveal>

        <Divider />

        {/* Hero project image */}
        {project.image && !isFlavorBuddy && (
          <Reveal className="mb-14">
            <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-white/5 shadow-xl">
              <Image src={img(project.image!)} alt={`${project.title} interface`} width={1200} height={675} className="w-full h-auto object-cover" />
            </div>
          </Reveal>
        )}

        {/* FlavorBuddy: Mobbin-style scroll showcase */}
        {isFlavorBuddy && <FlavorBuddyShowcase project={project} />}

        {/* The Problem */}
        <Reveal>
          <section className="mb-14" aria-labelledby="problem-heading">
            <SectionLabel number="02" label="The Challenge" color="red" />
            <div className="p-6 rounded-2xl bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30">
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-4">{project.problem}</p>
              {project.problemBullets && (
                <ul className="space-y-2 mt-3">
                  {project.problemBullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        </Reveal>

        <Divider />

        {/* Process */}
        <Reveal>
          <section className="mb-14" aria-labelledby="process-heading">
            <SectionLabel number="03" label="The Process" color="violet" />
            <StaggerChildren className="space-y-3">
              {project.process.map((step, i) => {
                const [title, ...rest] = step.split(" — ");
                return (
                  <motion.div key={i} variants={staggerItem} className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-surface-850 border border-slate-100 dark:border-white/5 hover:border-brand-200 dark:hover:border-brand-800/40 transition-colors group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-100 dark:bg-violet-950/40 flex items-center justify-center text-xs font-bold text-violet-700 dark:text-violet-400 mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {rest.length > 0 ? (
                        <><strong className="text-slate-900 dark:text-white font-semibold">{title}</strong> — {rest.join(" — ")}</>
                      ) : step}
                    </p>
                  </motion.div>
                );
              })}
            </StaggerChildren>
          </section>
        </Reveal>

        <Divider />

        {/* Solution */}
        <Reveal>
          <section className="mb-14" aria-labelledby="solution-heading">
            <SectionLabel number="04" label="The Solution" color="green" />
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6">{project.solution}</p>
            <div>
              <p className="text-xs text-slate-400 dark:text-slate-600 uppercase tracking-widest mb-3 font-semibold">Tools Used</p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* BPO: show the design system screenshot */}
        {isBPO && (
          <Reveal className="mb-14">
            <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-white/5 shadow-xl">
              <Image src={img("/images/b2b-bpo-case-study.png")} alt="B2B BPO Platform design system" width={1200} height={800} className="w-full h-auto object-cover" />
            </div>
          </Reveal>
        )}

        {/* ML Wallet: show the case study screenshot */}
        {project.id === "ml-wallet" && (
          <Reveal className="mb-14">
            <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-white/5 shadow-xl">
              <Image src={img("/images/ml-wallet-case-study.png")} alt="ML Wallet case study screens" width={1200} height={800} className="w-full h-auto object-cover" />
            </div>
          </Reveal>
        )}

        <Divider />

        {/* Outcomes */}
        <Reveal>
          <section className="mb-14" aria-labelledby="outcome-heading">
            <SectionLabel number="05" label="Outcomes" color="amber" />
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6">{project.outcome}</p>

            {/* Impact cards */}
            {project.impactCards && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {project.impactCards.map((card, i) => (
                  <div key={i} className="p-4 rounded-xl border text-sm font-medium leading-snug" style={{ background: project.color + "15", borderColor: project.color + "40", color: project.color }}>
                    {card}
                  </div>
                ))}
              </div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.outcomes.map((o) => (
                <div key={o.metric} className="p-4 rounded-xl bg-white dark:bg-surface-850 border border-slate-100 dark:border-white/5 text-center">
                  <p className="text-2xl font-display font-bold mb-1" style={{ color: project.color }}>{o.value}</p>
                  <p className="text-xs font-semibold text-slate-900 dark:text-white mb-1">{o.metric}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 leading-tight">{o.description}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Figma prototype link */}
        {project.figmaLink && !project.nda && (
          <Reveal className="mb-14">
            <a href={project.figmaLink} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border text-sm font-medium transition-all hover:-translate-y-0.5 group"
              style={{ background: project.color + "10", borderColor: project.color + "40", color: project.color }}
            >
              View Prototype in Figma
              <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </Reveal>
        )}

        {/* NDA notice */}
        {project.nda && (
          <Reveal className="mb-14">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-surface-850 border border-slate-200 dark:border-white/5">
              <Lock size={16} className="text-slate-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Additional screens and design system files are protected under NDA. Available upon request with appropriate context.
              </p>
            </div>
          </Reveal>
        )}

        <Divider />

        {/* Next project nav */}
        <Reveal>
          <div className="flex items-center justify-between">
            <Link href="/#projects" className="text-sm text-slate-500 dark:text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors flex items-center gap-1 group">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              All Projects
            </Link>
            <Link href={`/projects/${nextProject.id}`} className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 dark:border-white/5 hover:border-brand-200 dark:hover:border-brand-800/40 hover:bg-white dark:hover:bg-surface-850 transition-all hover:-translate-y-0.5 group">
              <div className="text-right">
                <p className="text-xs text-slate-400 dark:text-slate-600 mb-0.5">Next Project</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {nextProject.title}
                </p>
              </div>
              <ChevronRight size={16} className="text-slate-400 group-hover:text-brand-500 group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </Reveal>
      </div>
    </article>
  );
}

function SectionLabel({ number, label, color }: { number: string; label: string; color: string }) {
  const colorMap: Record<string, string> = {
    brand: "bg-brand-100 dark:bg-brand-950/40 text-brand-700 dark:text-brand-400",
    red: "bg-red-100 dark:bg-red-950/40 text-red-700 dark:text-red-400",
    violet: "bg-violet-100 dark:bg-violet-950/40 text-violet-700 dark:text-violet-400",
    green: "bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400",
    amber: "bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-500",
  };
  const labelColorMap: Record<string, string> = {
    brand: "text-brand-600 dark:text-brand-400",
    red: "text-red-600 dark:text-red-400",
    violet: "text-violet-600 dark:text-violet-400",
    green: "text-emerald-600 dark:text-emerald-400",
    amber: "text-amber-600 dark:text-amber-500",
  };
  return (
    <div className="flex items-center gap-2 mb-5">
      <span className={cn("w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold", colorMap[color])}>
        {number}
      </span>
      <h2 className={cn("text-xs font-semibold uppercase tracking-widest", labelColorMap[color])}>
        {label}
      </h2>
    </div>
  );
}

function Divider() {
  return <div className="h-px bg-slate-100 dark:bg-white/5 mb-14" aria-hidden />;
}
