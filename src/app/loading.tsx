export default function Loading() {
  return (
    <div className="min-h-screen pt-20 animate-pulse">
      {/* Hero skeleton */}
      <div className="h-64 sm:h-80 bg-slate-200 dark:bg-surface-800" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden bg-white dark:bg-surface-850 border border-slate-100 dark:border-white/5"
            >
              <div className="h-48 bg-slate-200 dark:bg-surface-800" />
              <div className="p-5 space-y-3">
                <div className="h-4 bg-slate-200 dark:bg-surface-800 rounded-md w-3/4" />
                <div className="h-3 bg-slate-100 dark:bg-surface-800/50 rounded-md w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
