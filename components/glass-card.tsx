import { ReactNode } from "react";

export function GlassCard({
  children,
  className = ""
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/30 bg-surface-light shadow-soft backdrop-blur-glass transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-surface-dark ${className}`}
    >
      <div className="pointer-events-none absolute inset-px rounded-[1.05rem] border border-white/20 opacity-70 dark:border-white/5" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/20 to-transparent opacity-70 dark:from-white/5 dark:via-white/0" />
      <div className="relative p-6 sm:p-8">{children}</div>
    </div>
  );
}
