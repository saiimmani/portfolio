import { GlassCard } from "./glass-card";

export function SkillCard({
  label,
  items,
  description
}: {
  label: string;
  items: string[];
  description?: string;
}) {
  return (
    <GlassCard className="h-full">
      <div className="space-y-3">
        <div>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
            {label}
          </h3>
          {description ? (
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              {description}
            </p>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="inline-flex items-center rounded-lg bg-white/70 px-3 py-1.5 text-sm font-medium text-neutral-800 backdrop-blur-glass transition hover:-translate-y-0.5 hover:shadow-sm dark:bg-white/10 dark:text-neutral-100"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
