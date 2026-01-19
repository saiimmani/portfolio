"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Briefcase, Sparkles, Award, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/projects", label: "Projects", icon: Briefcase },
  { href: "/experience", label: "Experience", icon: Sparkles },
  { href: "/certifications", label: "Certifications", icon: Award }
];

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group relative text-base sm:text-lg font-bold uppercase tracking-[0.2em] text-white transition-colors hover:text-accent"
        >
          <span className="relative z-10">Immani Sai</span>
          <span className="absolute -inset-2 rounded-lg bg-accent/10 opacity-0 transition-opacity group-hover:opacity-100" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 text-sm font-medium md:flex">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative inline-flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-300 ${
                  isActive 
                    ? "bg-accent/10 text-accent" 
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <span className={`absolute inset-0 rounded-full transition-all duration-300 ${
                  isActive 
                    ? "bg-accent/10 border border-accent/20" 
                    : "bg-white/0 border border-transparent group-hover:bg-white/5 group-hover:border-white/10"
                }`} />
                <Icon className={`relative h-4 w-4 transition-colors ${isActive ? "text-accent" : ""}`} />
                <span className="relative">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/5 bg-neutral-950/95 backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {links.map((link, idx) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-colors ${
                        isActive 
                          ? "bg-accent/10 text-accent" 
                          : "text-neutral-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{link.label}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
