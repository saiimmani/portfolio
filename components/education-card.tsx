import { Education } from "@/lib/resume";
import { GlassCard } from "./glass-card";

export function EducationCard({ education }: { education: Education }) {
  return (
    <GlassCard>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
            {education.timeline}
          </p>
          <h3 className="mt-1 text-xl font-semibold text-neutral-900 dark:text-white">
            {education.degree}
          </h3>
          <p className="text-base text-neutral-700 dark:text-neutral-200">{education.school}</p>
        </div>
        {education.cgpa ? (
          <span className="rounded-full bg-black/5 px-3 py-1 text-sm font-semibold text-neutral-800 dark:bg-white/10 dark:text-neutral-100">
            {education.cgpa}
          </span>
        ) : null}
      </div>
      {education.coursework?.length ? (
        <div className="mt-5">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
            Coursework
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {education.coursework.map((course) => (
              <span
                key={course}
                className="rounded-full bg-white/70 px-3 py-2 text-sm font-medium text-neutral-800 backdrop-blur-glass dark:bg-white/10 dark:text-neutral-100"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </GlassCard>
  );
}
