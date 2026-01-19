"use client";

import { resume } from "@/lib/resume";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-20 border-t border-white/5 pt-10 pb-8"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-2 text-sm text-neutral-500">
          <span>Built with</span>
          <Heart className="h-4 w-4 text-red-400 animate-pulse" />
          <span>using Next.js, Tailwind & Framer Motion</span>
        </div>
        <div className="flex items-center gap-4 text-xs text-neutral-600">
          <span>© {currentYear} {resume.name}</span>
          <span className="h-1 w-1 rounded-full bg-neutral-700" />
          <span>Last updated: {resume.lastUpdated}</span>
        </div>
      </div>
    </motion.footer>
  );
}
