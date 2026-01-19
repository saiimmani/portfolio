import { ReactNode } from "react";

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-sm font-medium text-neutral-200 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20">
      {children}
    </span>
  );
}
