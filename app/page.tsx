"use client";

import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { Footer } from "@/components/footer";
import { resume } from "@/lib/resume";
import { blogPosts } from "@/lib/content";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, GraduationCap, BookOpen, Rocket } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-20 sm:space-y-28">
      <Hero />

      <Section title="At a Glance" emoji="🎯">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/50 p-6 sm:p-8 backdrop-blur-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />
          <div className="relative space-y-4 text-lg leading-8 text-neutral-300">
            <p>
              Computer Science undergraduate at SRMIST (B.Tech CSE, 2027) with an AI/ML bent, building projects that
              combine applied research with practical delivery. I care about learning in public, keeping systems elegant,
              and shipping things that work.
            </p>
          </div>
        </motion.div>
      </Section>

      <Section title="Featured Projects" kicker="Build Log" emoji="🚀">
        <div className="space-y-8">
          {resume.projects.slice(0, 2).map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/30 backdrop-blur-sm transition-all hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              {project.thumbnail && (
                <div className="relative h-56 overflow-hidden sm:h-64">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent" />
                </div>
              )}
              
              <div className="relative space-y-4 p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                      {project.timeline ?? "Project"}
                    </p>
                    <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-white hover:text-neutral-900"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View
                    </a>
                  )}
                </div>
                
                <ul className="space-y-2 text-neutral-400">
                  {project.bullets.slice(0, 3).map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start gap-2 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center pt-4"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
            >
              View All Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </Section>

      <Section title="Latest Posts" kicker="Writing" emoji="📝">
        <div className="space-y-6">
          {blogPosts.slice(0, 2).map((post, idx) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ x: 8 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/30 p-5 backdrop-blur-sm transition-all hover:border-accent/30"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  {post.date ?? ""}
                </p>
                <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">{post.summary}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section title="Education" kicker="Academics" emoji="🎓">
        <div className="space-y-6">
          {resume.education.map((edu, idx) => (
            <motion.article
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/30 p-6 backdrop-blur-sm transition-all hover:border-accent/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">{edu.timeline}</p>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-neutral-400">{edu.school}</p>
                  {edu.cgpa && (
                    <p className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-sm font-semibold text-accent mt-2">
                      {edu.cgpa}
                    </p>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
}
