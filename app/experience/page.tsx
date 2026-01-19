"use client";

import { motion } from "framer-motion";
import { resume } from "@/lib/resume";
import { Users, Calendar, Sparkles, Heart, Trophy, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "Student Member": <Users className="h-5 w-5" />,
  "Committee Member": <Heart className="h-5 w-5" />,
  "Student Volunteer": <Sparkles className="h-5 w-5" />,
  default: <Trophy className="h-5 w-5" />
};

function getIcon(role: string) {
  return iconMap[role] || iconMap.default;
}

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-4xl space-y-16 px-4 py-20 sm:px-6 lg:px-8">
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
          <Sparkles className="h-4 w-4" />
          Leadership & Community
        </motion.div>
        <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          Experience
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-neutral-400 leading-relaxed">
          Beyond academics, I've engaged in various extracurricular activities that have shaped my leadership skills and community involvement.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent sm:left-1/2 sm:-ml-px" />
        
        <div className="space-y-12">
          {resume.extracurricular.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex flex-col sm:flex-row ${
                idx % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              } items-start gap-6 sm:gap-10`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 sm:left-1/2 sm:-ml-3 flex h-6 w-6 items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 + 0.2 }}
                  className="h-3 w-3 rounded-full bg-accent shadow-lg shadow-accent/50"
                />
              </div>

              {/* Content card */}
              <div className={`ml-16 sm:ml-0 sm:w-5/12 ${idx % 2 === 0 ? "sm:pr-10 sm:text-right" : "sm:pl-10"}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 p-6 backdrop-blur-sm transition-all hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  <div className="relative space-y-4">
                    {/* Icon and role */}
                    <div className={`flex items-center gap-3 ${idx % 2 === 0 ? "sm:flex-row-reverse sm:justify-start" : ""}`}>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                        {getIcon(item.role)}
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                        {item.role}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Duration */}
                    <div className={`flex items-center gap-2 text-sm text-neutral-500 ${idx % 2 === 0 ? "sm:justify-end" : ""}`}>
                      <Calendar className="h-4 w-4" />
                      {item.duration}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-6 pt-8 text-center"
      >
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        <p className="text-neutral-400">
          Interested in collaborating?
        </p>
        <a
          href="/about"
          className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent/80 hover:scale-[1.02]"
        >
          Get in Touch
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>
    </main>
  );
}
