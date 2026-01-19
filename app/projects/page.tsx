"use client";

import { motion } from "framer-motion";
import { resume } from "@/lib/resume";
import { ExternalLink, Github, Rocket, Calendar } from "lucide-react";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl space-y-16 px-4 py-20 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent"
        >
          <Rocket className="h-4 w-4" />
          Case Studies
        </motion.div>
        <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          Projects
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-neutral-400 leading-relaxed">
          A collection of projects that showcase my skills in AI/ML, computer vision, and full-stack development.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="space-y-12">
        {resume.projects.map((project, idx) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="group relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/30 backdrop-blur-sm transition-all hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5">
              {/* Project Image */}
              {project.thumbnail && (
                <div className="relative h-64 overflow-hidden sm:h-80">
                  <motion.img
                    src={project.thumbnail}
                    alt={project.title}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-transparent" />
                  
                  {/* Floating badges */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900/80 border border-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                      <Calendar className="h-3.5 w-3.5 text-accent" />
                      {project.timeline ?? "Project"}
                    </span>
                  </div>
                </div>
              )}
              
              {/* Content */}
              <div className="relative space-y-5 p-6 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-white sm:text-3xl group-hover:text-accent transition-colors">
                      {project.title}
                    </h2>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group/btn inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent/80 hover:scale-[1.02]"
                    >
                      <Github className="h-4 w-4" />
                      View Code
                      <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  )}
                </div>
                
                {/* Bullets */}
                <ul className="space-y-3">
                  {project.bullets.map((bullet, bulletIdx) => (
                    <motion.li
                      key={bulletIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: bulletIdx * 0.05 }}
                      className="flex items-start gap-3 text-neutral-400 leading-relaxed"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      {bullet}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-6 pt-8 text-center"
      >
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        <p className="text-neutral-400 text-sm">
          More projects coming soon • Building and learning every day
        </p>
        <a
          href={resume.github}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-neutral-900"
        >
          <Github className="h-4 w-4" />
          Follow on GitHub
        </a>
      </motion.div>
    </main>
  );
}
