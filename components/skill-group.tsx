import { GlassCard } from "./glass-card";

export function SkillGroup({
  label,
  items
}: {
  label: string;
  items: string[];
}) {
  return (
    <GlassCard className="h-full">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
        {label}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-white/70 px-3 py-2 text-sm font-medium text-neutral-800 backdrop-blur-glass transition hover:-translate-y-0.5 dark:bg-white/10 dark:text-neutral-100"
          >
            {item}
          </span>
        ))}
      </div>
    </GlassCard>
  );
}
