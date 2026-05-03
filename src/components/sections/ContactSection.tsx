"use client";

import { Reveal } from "@/components/ui/Reveal";
import { personalInfo } from "@/data";
import { Mail, Github, Figma, ArrowUpRight, Copy, Check, Linkedin } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-3">
              Get In Touch
            </p>
            <h2 className="text-display-sm text-3xl sm:text-4xl text-slate-900 dark:text-white mb-5">
              Let&rsquo;s build something{" "}
              <span className="gradient-text">meaningful together.</span>
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
              I&rsquo;m currently available for freelance projects, full-time
              roles, and design consultations. If you have a complex problem
              that needs clear, scalable design — I&rsquo;d love to hear from
              you.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 text-white font-medium hover:bg-brand-700 shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30 transition-all duration-200 hover:-translate-y-0.5 group w-full sm:w-auto justify-center"
              >
                <Mail size={16} />
                Send an Email
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
              <button
                onClick={copyEmail}
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto justify-center border",
                  copied
                    ? "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/50"
                    : "bg-white dark:bg-surface-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-brand-300 dark:hover:border-brand-700"
                )}
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check size={15} /> Copied!
                  </>
                ) : (
                  <>
                    <Copy size={15} /> Copy Email
                  </>
                )}
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            {/* Email display */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-surface-850 border border-slate-100 dark:border-white/5 mb-8">
              <p className="font-mono text-sm text-slate-600 dark:text-slate-400">
                {personalInfo.email}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex items-center justify-center gap-4">
              <span className="text-xs text-slate-400 dark:text-slate-600 uppercase tracking-widest">
                Or find me on
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 mt-4">
              {[
                {
                  href: personalInfo.github,
                  icon: <Github size={18} />,
                  label: "GitHub",
                },
                {
                  href: personalInfo.linkedin,
                  icon: <Linkedin size={18} />,
                  label: "LinkedIn",
                },
                {
                  href: personalInfo.figma,
                  icon: <Figma size={18} />,
                  label: "Figma Portfolio",
                },
              
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 text-sm font-medium hover:border-brand-300 dark:hover:border-brand-700 hover:text-brand-600 dark:hover:text-brand-400 transition-all hover:-translate-y-0.5 bg-white dark:bg-surface-800 group"
                >
                  {icon}
                  {label}
                  <ArrowUpRight
                    size={13}
                    className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
