"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Sparkles } from "lucide-react";
import { resume } from "@/lib/resume";
import { Chip } from "./chip";

export function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900/90 via-neutral-900/80 to-neutral-950/90 p-6 sm:p-8 shadow-2xl backdrop-blur-xl"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(10,132,255,0.15),transparent_50%),radial-gradient(ellipse_at_80%_80%,rgba(10,132,255,0.08),transparent_50%)]" />
      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-accent/5 blur-3xl" />
      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-accent/40 to-accent/10 blur-sm" />
          <img
            src="/portfolio/sai_immani.png"
            alt={resume.name}
            className="relative h-28 w-28 flex-shrink-0 rounded-3xl border-2 border-white/20 object-cover shadow-xl sm:h-36 sm:w-36"
          />
        </motion.div>
        <div className="flex flex-1 flex-col gap-5 sm:gap-6">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent"
            >
              <Sparkles className="h-4 w-4" />
              Open to Opportunities
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
            >
              {resume.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8"
            >
              {resume.about}
            </motion.p>
          </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-2 sm:gap-3"
        >
          <Chip>
            <MapPin className="h-4 w-4 text-accent" />
            {resume.location}
          </Chip>
          <Chip>
            <Mail className="h-4 w-4 text-accent" />
            {resume.email}
          </Chip>
          <Chip>
            <Phone className="h-4 w-4 text-accent" />
            {resume.phone}
          </Chip>
          <a
            className="group inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-neutral-900 hover:scale-[1.02]"
            href={resume.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent/80 hover:scale-[1.02]"
            href={resume.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
