"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Section({
  title,
  kicker,
  emoji,
  children
}: {
  title: string;
  kicker?: string;
  emoji?: string;
  children: ReactNode;
}) {
  return (
    <section className="relative w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-8"
      >
        <div className="space-y-2">
          {kicker ? (
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm uppercase tracking-[0.2em] text-accent font-semibold"
            >
              {kicker}
            </motion.p>
          ) : null}
          <h2 className="text-2xl font-bold text-white sm:text-3xl flex items-center gap-3">
            {emoji ? <span>{emoji}</span> : null}
            {title}
          </h2>
        </div>
        {children}
      </motion.div>
    </section>
  );
}
