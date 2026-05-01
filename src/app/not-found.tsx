import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <p className="font-mono text-brand-600 dark:text-brand-400 text-sm mb-4">404</p>
        <h1 className="text-display text-4xl sm:text-5xl text-slate-900 dark:text-white mb-4">
          Page not found
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-sm mx-auto">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been
          moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 text-white font-medium hover:bg-brand-700 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
