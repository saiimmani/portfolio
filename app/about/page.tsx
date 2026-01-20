"use client";

import { motion } from "framer-motion";
import { resume } from "@/lib/resume";
import { Mail, Github, Linkedin, MapPin, Code2, Cpu, Brain, Users, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-20">
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
          <Users className="h-4 w-4" />
          About Me
        </motion.div>
        <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          {resume.name}
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-neutral-400 leading-relaxed">
          B.Tech Computer Science @ SRMIST • Class of 2027 • AI/ML Enthusiast
        </p>
      </motion.div>

      {/* Journey Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-white">🚀 My Journey</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/50 p-6 sm:p-8 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />
          <div className="relative space-y-4 text-lg leading-8 text-neutral-300">
            <p>
              I am {resume.name}, a B.Tech Computer Science student at SRMIST (class of 2027) driven by AI/ML and
              product-minded engineering. My work centers on turning sensing and data into usable systems, keeping loops
              tight between experimentation and delivery.
            </p>
            <p>
              Why I build: curiosity for how models behave in the real world, and a focus on making interfaces that feel
              calm, clear, and reliable. I learn by shipping: gesture-driven robots, face-recognition attendance, and
              AI-assisted fitness tooling—each project pairing fundamentals with hands-on delivery.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Tech Stack Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-white">💻 Tech Stack</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { icon: <Code2 className="h-5 w-5" />, title: "Languages", items: resume.skills.programming },
            { icon: <Cpu className="h-5 w-5" />, title: "Technologies", items: resume.skills.technologies },
            { icon: <Brain className="h-5 w-5" />, title: "Concepts", items: resume.skills.concepts },
            { icon: <Users className="h-5 w-5" />, title: "Soft Skills", items: resume.skills.softSkills }
          ].map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/30 p-5 backdrop-blur-sm transition-all hover:border-accent/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1 text-sm text-neutral-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-white">🎓 Education</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
        </div>
        <div className="space-y-4">
          {resume.education.map((edu, idx) => (
            <motion.div
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
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-white">📬 Get In Touch</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: <Mail className="h-5 w-5" />, label: "Email", value: resume.email, href: `mailto:${resume.email}` },
            { icon: <Github className="h-5 w-5" />, label: "GitHub", value: resume.github.split("/").pop() || "GitHub", href: resume.github },
            { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", value: "Connect", href: resume.linkedin },
            { icon: <MapPin className="h-5 w-5" />, label: "Location", value: resume.location, href: null }
          ].map((contact, idx) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              {contact.href ? (
                <a
                  href={contact.href}
                  target={contact.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={contact.href.startsWith("mailto") ? undefined : "noreferrer"}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-neutral-900/30 p-5 backdrop-blur-sm transition-all hover:border-accent/30 hover:bg-neutral-900/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                    {contact.icon}
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{contact.label}</p>
                    <p className="font-medium text-white group-hover:text-accent transition-colors truncate max-w-[140px]">{contact.value}</p>
                  </div>
                </a>
              ) : (
                <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-neutral-900/30 p-5 backdrop-blur-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    {contact.icon}
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{contact.label}</p>
                    <p className="font-medium text-white truncate max-w-[140px]">{contact.value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-6 pt-8 text-center"
      >
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        <p className="text-neutral-400">
          Want to see what I've built?
        </p>
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent/80 hover:scale-[1.02]"
        >
          View Projects
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </div>
  );
}
