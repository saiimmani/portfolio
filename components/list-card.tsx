import { GlassCard } from "./glass-card";

export function ListCard({
  title,
  items
}: {
  title: string;
  items: { primary: string; secondary?: string; meta?: string }[];
}) {
  return (
    <GlassCard>
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
        {title}
      </p>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <div
            key={`${item.primary}-${item.meta ?? ""}`}
            className="flex flex-col gap-0.5 rounded-xl bg-white/60 px-3 py-3 text-neutral-800 backdrop-blur-glass dark:bg-white/10 dark:text-neutral-100"
          >
            <span className="font-semibold">{item.primary}</span>
            {item.secondary ? (
              <span className="text-sm text-neutral-600 dark:text-neutral-300">{item.secondary}</span>
            ) : null}
            {item.meta ? (
              <span className="text-sm font-medium text-accent">{item.meta}</span>
            ) : null}
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
