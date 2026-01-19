"use client";

import { motion } from "framer-motion";
import { resume } from "@/lib/resume";
import { Award, ExternalLink, Calendar, Shield, Code, Database, Cloud, Brain, Cpu, CheckCircle2 } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  "Cloud Computing": <Cloud className="h-5 w-5" />,
  "Cybersecurity": <Shield className="h-5 w-5" />,
  "Software Development": <Code className="h-5 w-5" />,
  "Data Science": <Database className="h-5 w-5" />,
  "AI/ML": <Brain className="h-5 w-5" />,
  "Hardware": <Cpu className="h-5 w-5" />,
  default: <Award className="h-5 w-5" />
};

function getCategoryIcon(category: string) {
  return categoryIcons[category] || categoryIcons.default;
}

export default function CertificationsPage() {
  const grouped = resume.certifications.reduce<Record<string, typeof resume.certifications>>((acc, cert) => {
    acc[cert.category] = acc[cert.category] || [];
    acc[cert.category].push(cert);
    return acc;
  }, {});

  const categoryOrder = ["Cloud Computing", "Cybersecurity", "Software Development", "Data Science", "AI/ML", "Hardware"];
  const sortedCategories = Object.keys(grouped).sort((a, b) => {
    const idxA = categoryOrder.indexOf(a);
    const idxB = categoryOrder.indexOf(b);
    return (idxA === -1 ? 99 : idxA) - (idxB === -1 ? 99 : idxB);
  });

  const totalCerts = resume.certifications.length;

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
          <Award className="h-4 w-4" />
          Professional Credentials
        </motion.div>
        <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          Certifications
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-neutral-400 leading-relaxed">
          A collection of {totalCerts} professional certifications across cloud computing, cybersecurity, and software development.
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {sortedCategories.slice(0, 4).map((category, idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * idx }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 p-4 text-center backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-50" />
            <div className="relative">
              <p className="text-3xl font-bold text-white">{grouped[category].length}</p>
              <p className="mt-1 text-sm text-neutral-400 truncate">{category}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Certifications by Category */}
      <div className="space-y-12">
        {sortedCategories.map((category, catIdx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: catIdx * 0.1 }}
            className="space-y-6"
          >
            {/* Category Header */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                {getCategoryIcon(category)}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{category}</h2>
                <p className="text-sm text-neutral-500">{grouped[category].length} certifications</p>
              </div>
              <div className="ml-auto h-px flex-1 max-w-32 bg-gradient-to-r from-accent/30 to-transparent" />
            </div>

            {/* Certification Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {grouped[category].map((cert, idx) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/30 p-5 backdrop-blur-sm transition-all hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
                >
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  <div className="relative space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 space-y-1">
                        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                          {cert.issuer}
                        </p>
                        <h3 className="font-semibold text-white leading-tight group-hover:text-accent transition-colors">
                          {cert.title}
                        </h3>
                      </div>
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-400/60" />
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      {cert.date && (
                        <span className="inline-flex items-center gap-1.5 text-neutral-500">
                          <Calendar className="h-3.5 w-3.5" />
                          {cert.date}
                        </span>
                      )}
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-accent hover:text-accent/80 transition-colors"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Verify
                        </a>
                      )}
                    </div>

                    {cert.credentialId && (
                      <p className="text-xs text-neutral-500 font-mono truncate">
                        ID: {cert.credentialId}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
          Continuously expanding my skill set through professional certifications
        </p>
      </motion.div>
    </main>
  );
}
