"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ExternalLink,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import type { Project } from "@/data";
import { projects } from "@/data";
import { Reveal, StaggerChildren, staggerItem } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

interface Props {
  project: Project;
}

const statusColors: Record<string, string> = {
  Live: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/50",
  Completed:
    "bg-slate-100 dark:bg-slate-800/40 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700/50",
  "In Progress":
    "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800/50",
};

export function ProjectDetail({ project }: Props) {
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="min-h-screen pt-20">
      {/* Hero */}
      <div
        className={cn(
          "relative py-24 sm:py-32 overflow-hidden",
          !project.image && `bg-gradient-to-br ${project.coverGradient}`
        )}
      >
        {/* Real image background */}
        {project.image && (
          <div className="absolute inset-0" aria-hidden>
            <Image src={project.image} alt="" fill className="object-cover object-top" priority />
            <div className={cn("absolute inset-0 bg-gradient-to-br opacity-90", project.coverGradient)} />
          </div>
        )}
        {/* Decorative */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/10 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          {/* Back nav */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors group"
            >
              <ArrowLeft
                size={15}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Back to Work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-3xl" aria-hidden>
                {project.emoji}
              </span>
              <span
                className={cn(
                  "px-2.5 py-1 rounded-full text-xs font-medium border",
                  "bg-white/10 text-white border-white/20"
                )}
              >
                {project.type}
              </span>
              <span
                className={cn(
                  "px-2.5 py-1 rounded-full text-xs font-medium border",
                  "bg-white/10 text-white border-white/20"
                )}
              >
                {project.year}
              </span>
              <span
                className={cn(
                  "px-2.5 py-1 rounded-full text-xs font-medium border",
                  statusColors[project.status]
                )}
              >
                {project.status}
              </span>
            </div>

            <h1 className="text-display text-4xl sm:text-5xl md:text-6xl text-white mb-3">
              {project.title}
            </h1>
            <p className="text-xl text-white/70 max-w-xl leading-relaxed">
              {project.subtitle}
            </p>
          </motion.div>

          {/* Outcome metrics preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {project.outcomes.map((outcome) => (
              <div
                key={outcome.metric}
                className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15"
              >
                <p className="text-2xl font-display font-bold text-white leading-none mb-1">
                  {outcome.value}
                </p>
                <p className="text-xs text-white/60">{outcome.metric}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Case Study Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        {/* Overview */}
        <Reveal>
          <section className="mb-14" aria-labelledby="overview-heading">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-6 rounded-md bg-brand-100 dark:bg-brand-950/40 flex items-center justify-center text-xs text-brand-600 dark:text-brand-400 font-bold">
                01
              </span>
              <h2
                id="overview-heading"
                className="text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400"
              >
                Overview
              </h2>
            </div>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.overview}
            </p>
          </section>
        </Reveal>

        <div className="h-px bg-slate-100 dark:bg-white/5 mb-14" aria-hidden />

        {/* Problem */}
        <Reveal>
          <section className="mb-14" aria-labelledby="problem-heading">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-6 rounded-md bg-accent-100 dark:bg-accent-950/40 flex items-center justify-center text-xs text-accent-600 dark:text-accent-400 font-bold">
                02
              </span>
              <h2
                id="problem-heading"
                className="text-xs font-semibold uppercase tracking-widest text-accent-500 dark:text-accent-400"
              >
                The Problem
              </h2>
            </div>
            <div className="p-6 rounded-2xl bg-accent-50 dark:bg-accent-950/20 border border-accent-100 dark:border-accent-900/30">
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>
          </section>
        </Reveal>

        <div className="h-px bg-slate-100 dark:bg-white/5 mb-14" aria-hidden />

        {/* Process */}
        <Reveal>
          <section className="mb-14" aria-labelledby="process-heading">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-6 h-6 rounded-md bg-violet-100 dark:bg-violet-950/40 flex items-center justify-center text-xs text-violet-600 dark:text-violet-400 font-bold">
                03
              </span>
              <h2
                id="process-heading"
                className="text-xs font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400"
              >
                The Process
              </h2>
            </div>
            <StaggerChildren className="space-y-3">
              {project.process.map((step, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-surface-850 border border-slate-100 dark:border-white/5 hover:border-brand-200 dark:hover:border-brand-800/40 transition-colors group"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle2
                      size={16}
                      className="text-brand-400 dark:text-brand-600 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors"
                    />
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step}
                  </p>
                </motion.div>
              ))}
            </StaggerChildren>
          </section>
        </Reveal>

        <div className="h-px bg-slate-100 dark:bg-white/5 mb-14" aria-hidden />

        {/* Solution */}
        <Reveal>
          <section className="mb-14" aria-labelledby="solution-heading">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-6 rounded-md bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                04
              </span>
              <h2
                id="solution-heading"
                className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400"
              >
                The Solution
              </h2>
            </div>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              {project.solution}
            </p>

            {/* Tools used */}
            <div>
              <p className="text-xs text-slate-400 dark:text-slate-600 uppercase tracking-widest mb-3 font-semibold">
                Tools Used
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <div className="h-px bg-slate-100 dark:bg-white/5 mb-14" aria-hidden />

        {/* Outcomes */}
        <Reveal>
          <section className="mb-14" aria-labelledby="outcome-heading">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-6 h-6 rounded-md bg-amber-100 dark:bg-amber-950/40 flex items-center justify-center text-xs text-amber-600 dark:text-amber-400 font-bold">
                05
              </span>
              <h2
                id="outcome-heading"
                className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-500"
              >
                Outcomes
              </h2>
            </div>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              {project.outcome}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.outcomes.map((o) => (
                <div
                  key={o.metric}
                  className="p-4 rounded-xl bg-white dark:bg-surface-850 border border-slate-100 dark:border-white/5 text-center"
                >
                  <p
                    className="text-2xl font-display font-bold mb-1"
                    style={{ color: project.color }}
                  >
                    {o.value}
                  </p>
                  <p className="text-xs font-semibold text-slate-900 dark:text-white mb-1">
                    {o.metric}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-600 leading-tight">
                    {o.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Figma link */}
        {project.figmaLink && (
          <Reveal>
            <a
              href={project.figmaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-50 dark:bg-brand-950/30 text-brand-700 dark:text-brand-400 border border-brand-100 dark:border-brand-800/40 text-sm font-medium hover:bg-brand-100 dark:hover:bg-brand-950/50 transition-all hover:-translate-y-0.5 group mb-14"
            >
              View in Figma
              <ExternalLink
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </Reveal>
        )}

        {/* Next Project */}
        <div className="h-px bg-slate-100 dark:bg-white/5 mb-10" aria-hidden />

        <Reveal>
          <div className="flex items-center justify-between">
            <Link
              href="/#projects"
              className="text-sm text-slate-500 dark:text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors flex items-center gap-1 group"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-1 transition-transform"
              />
              All Projects
            </Link>

            <Link
              href={`/projects/${nextProject.id}`}
              className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 dark:border-white/5 hover:border-brand-200 dark:hover:border-brand-800/40 hover:bg-white dark:hover:bg-surface-850 transition-all hover:-translate-y-0.5 group"
            >
              <div className="text-right">
                <p className="text-xs text-slate-400 dark:text-slate-600 mb-0.5">
                  Next Project
                </p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {nextProject.title}
                </p>
              </div>
              <ChevronRight
                size={16}
                className="text-slate-400 group-hover:text-brand-500 group-hover:translate-x-1 transition-all"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
