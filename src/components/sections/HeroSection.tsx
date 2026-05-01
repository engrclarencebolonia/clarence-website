"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, Github, Figma, Mail } from "lucide-react";
import { personalInfo } from "@/data";
import { img } from "@/lib/imagePath";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export function HeroSection() {
  return (
    <section id="main-content" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" aria-label="Hero">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent-500/8 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-brand-400/8 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(91,72,250,1) 1px, transparent 1px), linear-gradient(90deg, rgba(91,72,250,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} aria-hidden />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 w-full">

          {/* Profile photo */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.3 }} className="order-first lg:order-last flex-shrink-0 lg:ml-auto relative">
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border-2 border-brand-200 dark:border-brand-800/40 shadow-2xl shadow-brand-500/10 bg-slate-900">
              <Image src={img("/images/profile-hero.png")} alt="Clarence Gio Bolonia — UI/UX Designer" fill className="object-cover object-top scale-110" priority />
            </div>
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 bg-white dark:bg-surface-850 border border-brand-100 dark:border-brand-800/40 rounded-xl px-3 py-2 shadow-lg text-xs font-medium text-brand-700 dark:text-brand-300 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse-slow" />
              Open to Work
            </motion.div>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-2xl">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse-slow" />
                Available for new projects
              </span>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h1 className="font-display font-bold leading-tight mb-2">
                <span className="block text-5xl sm:text-6xl md:text-7xl text-slate-900 dark:text-white">Designing clarity</span>
                <span className="block text-5xl sm:text-6xl md:text-7xl"><span className="gradient-text">from complexity.</span></span>
              </h1>
            </motion.div>

            <motion.p variants={itemVariants} className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-body">
              I&rsquo;m <span className="font-semibold text-slate-900 dark:text-white">Clarence Gio Bolonia</span> — a UI/UX & Product Designer with 4+ years building{" "}
              <span className="text-brand-600 dark:text-brand-400 font-medium">Fintech</span> and{" "}
              <span className="text-brand-600 dark:text-brand-400 font-medium">B2B SaaS</span> products. I design with engineering feasibility in mind.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 mt-8">
              {personalInfo.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-display font-bold text-brand-600 dark:text-brand-400 leading-none">{stat.value}</span>
                  <span className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mt-8">
              <Link href="/#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 text-white font-medium text-sm hover:bg-brand-700 shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30 transition-all duration-200 hover:-translate-y-0.5">
                View My Work <ArrowDown size={15} className="animate-float" />
              </Link>
              <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-medium text-sm hover:border-brand-400 dark:hover:border-brand-600 hover:text-brand-600 dark:hover:text-brand-400 transition-all duration-200 hover:-translate-y-0.5 bg-white dark:bg-surface-800">
                Get in Touch
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-4 mt-8">
              <span className="text-xs text-slate-400 dark:text-slate-600 uppercase tracking-widest">Find me on</span>
              <div className="h-px flex-1 max-w-[40px] bg-slate-200 dark:bg-white/10" />
              <div className="flex items-center gap-2">
                {[
                  { href: personalInfo.github, icon: <Github size={16} />, label: "GitHub" },
                  { href: personalInfo.figma, icon: <Figma size={16} />, label: "Figma" },
                  { href: `mailto:${personalInfo.email}`, icon: <Mail size={16} />, label: "Email" },
                ].map(({ href, icon, label }) => (
                  <a key={label} href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"} aria-label={label}
                    className="p-2 rounded-lg text-slate-400 dark:text-slate-600 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-950/30 transition-all duration-200">
                    {icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-slate-400 dark:text-slate-600 uppercase tracking-widest">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} className="w-4 h-6 rounded-full border border-slate-300 dark:border-white/10 flex items-start justify-center pt-1" aria-hidden>
          <div className="w-1 h-1.5 bg-slate-400 dark:bg-slate-600 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
