"use client";

import { motion } from "framer-motion";
import { resume } from "@/lib/resume";
import { Mail, Github, Linkedin, MapPin, Phone, ArrowRight } from "lucide-react";

export default function ContactPage() {
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
          <Mail className="h-4 w-4" />
          Get In Touch
        </motion.div>
        <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          Contact
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-neutral-400 leading-relaxed">
          Have a question or want to collaborate? I'd love to hear from you. Reach out through any of these channels.
        </p>
      </motion.div>

      {/* Contact Methods */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { icon: <Mail className="h-5 w-5" />, label: "Email", value: resume.email, href: `mailto:${resume.email}` },
            { icon: <Phone className="h-5 w-5" />, label: "Phone", value: resume.phone, href: `tel:${resume.phone}` },
            { icon: <Github className="h-5 w-5" />, label: "GitHub", value: resume.github.split("/").pop() || "GitHub", href: resume.github },
            { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", value: "Connect", href: resume.linkedin },
          ].map((contact, idx) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("mailto") || contact.href.startsWith("tel") ? undefined : "_blank"}
              rel={contact.href.startsWith("mailto") || contact.href.startsWith("tel") ? undefined : "noreferrer"}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/30 p-6 backdrop-blur-sm transition-all hover:border-accent/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    {contact.icon}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{contact.label}</span>
                </div>
                <p className="font-medium text-white group-hover:text-accent transition-colors break-all">{contact.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* Additional Info */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-white">📍 Location</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
        </div>
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/30 p-6 backdrop-blur-sm transition-all hover:border-accent/30">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="relative flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Based in</p>
              <p className="text-lg font-medium text-white">{resume.location}</p>
            </div>
          </div>
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
          Ready to start a project?
        </p>
        <a
          href={`mailto:${resume.email}`}
          className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent/80 hover:scale-[1.02]"
        >
          Send an Email
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>
    </div>
  );
}
