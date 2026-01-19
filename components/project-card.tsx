import { ExternalLink } from "lucide-react";
import { Project } from "@/lib/resume";
import { GlassCard } from "./glass-card";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <GlassCard>
      {project.thumbnail ? (
        <img
          src={project.thumbnail}
          alt={project.title}
          className="mb-4 h-48 w-full rounded-xl object-cover shadow-md"
        />
      ) : null}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
            {project.timeline ?? "Project"}
          </p>
          <h3 className="mt-1 text-xl font-semibold text-neutral-900 dark:text-white">
            {project.title}
          </h3>
        </div>
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-white/40 bg-white/60 px-3 py-1 text-sm font-medium text-neutral-800 backdrop-blur-glass transition hover:-translate-y-0.5 hover:shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-neutral-100"
          >
            <ExternalLink className="h-4 w-4" />
            Link
          </a>
        ) : null}
      </div>
      <ul className="mt-4 space-y-2 text-neutral-700 dark:text-neutral-200">
        {project.bullets.map((bullet, idx) => (
          <li key={idx} className="leading-relaxed">
            • {bullet}
          </li>
        ))}
      </ul>
      {project.technologies?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-black/5 px-3 py-1 text-sm font-medium text-neutral-700 dark:bg-white/10 dark:text-neutral-100"
            >
              {tech}
            </span>
          ))}
        </div>
      ) : null}
      {project.status ? (
        <p className="mt-3 text-sm font-semibold text-accent">
          {project.status}
        </p>
      ) : null}
    </GlassCard>
  );
}
