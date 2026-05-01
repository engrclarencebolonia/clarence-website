import Link from "next/link";
import { Github, Figma, Mail, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-white/5 bg-white dark:bg-surface-850">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-display font-bold text-xs">
                C
              </div>
              <span className="font-display font-semibold text-slate-900 dark:text-white">
                Clarence Gio Bolonia
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
              UI/UX & Product Designer. Designing clarity from complexity.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {["Home", "Work", "About", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/#${item.toLowerCase()}`}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
              Connect
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors group"
              >
                <Mail size={14} />
                <span>{personalInfo.email}</span>
                <ArrowUpRight
                  size={12}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors group"
              >
                <Github size={14} />
                <span>GitHub</span>
                <ArrowUpRight
                  size={12}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>
              <a
                href={personalInfo.figma}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors group"
              >
                <Figma size={14} />
                <span>Figma Portfolio</span>
                <ArrowUpRight
                  size={12}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-100 dark:border-white/5">
          <p className="text-xs text-slate-400 dark:text-slate-500">
            © {year} Clarence Gio Bolonia. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            Designed & Built with{" "}
            <span className="text-accent-500">♥</span> in Bacoor, Cavite
          </p>
        </div>
      </div>
    </footer>
  );
}
