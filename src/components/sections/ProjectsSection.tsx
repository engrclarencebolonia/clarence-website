"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data";
import { Reveal, StaggerChildren, staggerItem } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const statusColors: Record<string, string> = {
  Live: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/50",
  Completed:
    "bg-slate-50 dark:bg-slate-800/40 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700/50",
  "In Progress":
    "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800/50",
};

export function ProjectsSection() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered =
    activeTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <Reveal className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-2">
                Selected Work
              </p>
              <h2 className="text-display-sm text-3xl sm:text-4xl text-slate-900 dark:text-white">
                Projects that{" "}
                <span className="gradient-text">solve real problems.</span>
              </h2>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs text-right">
              {projects.length} projects across Fintech, SaaS, and Mobile
            </p>
          </div>
        </Reveal>

        {/* Filter tabs */}
        <Reveal delay={0.1} className="mb-10">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by tag">
            {["All", "Product Design", "Mobile Design", "Design System", "Fintech", "B2B SaaS"].map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 border",
                  activeTag === tag
                    ? "bg-brand-600 text-white border-brand-600 shadow-sm shadow-brand-500/20"
                    : "bg-white dark:bg-surface-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/10 hover:border-brand-300 dark:hover:border-brand-700 hover:text-brand-600 dark:hover:text-brand-400"
                )}
                aria-pressed={activeTag === tag}
              >
                {tag}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Project Grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((project) => (
            <motion.div key={project.id} variants={staggerItem}>
              <Link href={`/projects/${project.id}`} className="group block">
                <article
                  className={cn(
                    "relative rounded-2xl overflow-hidden border transition-all duration-300",
                    "border-slate-200 dark:border-white/5",
                    "hover:border-brand-200 dark:hover:border-brand-800",
                    "shadow-card dark:shadow-card-dark",
                    "hover:shadow-card-hover dark:hover:shadow-card-dark-hover",
                    "hover:-translate-y-1",
                    "bg-white dark:bg-surface-850"
                  )}
                  aria-label={`${project.title} – ${project.subtitle}`}
                >
                  {/* Cover — real image or gradient fallback */}
                  <div className={cn(
                    "h-52 relative overflow-hidden",
                    !project.image && `bg-gradient-to-br ${project.coverGradient}`
                  )}>
                    {project.image ? (
                      <>
                        <Image
                          src={project.image}
                          alt={`${project.title} screenshot`}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Overlay gradient for text legibility */}
                        <div className={cn(
                          "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                        )} />
                      </>
                    ) : (
                      <>
                        <div className="absolute top-4 right-4 w-24 h-24 rounded-2xl bg-white/5 rotate-12" aria-hidden />
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-white/5" aria-hidden />
                      </>
                    )}

                    {/* Emoji */}
                    <div className="absolute top-5 right-6 text-3xl drop-shadow-lg" aria-hidden>
                      {project.emoji}
                    </div>

                    {/* Bottom text overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                      <div>
                        <p className="text-white/70 text-xs font-medium mb-0.5">{project.type}</p>
                        <h3 className="font-display font-bold text-white text-xl leading-tight drop-shadow">
                          {project.title}
                        </h3>
                      </div>
                      <motion.div
                        className="w-9 h-9 rounded-xl bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white flex-shrink-0"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.25)" }}
                        aria-hidden
                      >
                        <ArrowUpRight size={16} />
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 mb-4">
                      {project.subtitle}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="px-2 py-0.5 rounded-md text-xs bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={cn("px-2 py-0.5 rounded-full text-xs font-medium border", statusColors[project.status])}>
                          {project.status}
                        </span>
                        <span className="text-xs text-slate-400 dark:text-slate-600">{project.year}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </StaggerChildren>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-400 dark:text-slate-600">
            <p className="text-lg font-medium mb-2">No projects found</p>
            <p className="text-sm">Try a different filter tag.</p>
          </div>
        )}
      </div>
    </section>
  );
}
