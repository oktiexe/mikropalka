import { Cpu } from "lucide-react";

import { cn } from "@/lib/utils";

type BrandLogoProps = {
  compact?: boolean;
  className?: string;
};

export function BrandLogo({ compact = false, className }: BrandLogoProps) {
  return (
    <span className={cn("brand-logo group inline-flex items-center gap-3", className)}>
      <span className="brand-logo-symbol relative grid size-10 shrink-0 place-items-center" aria-hidden="true">
        <svg className="absolute inset-0 size-full overflow-visible" viewBox="0 0 40 40" fill="none">
          <path className="brand-logo-frame" d="M12 4.5h16L35.5 12v16L28 35.5H12L4.5 28V12z" />
          <path className="brand-logo-trace" d="M20 1v7m0 24v7M1 20h7m24 0h7M7 7l5 5m16 16 5 5M33 7l-5 5M12 28l-5 5" />
        </svg>
        <span className="brand-logo-core grid size-6 place-items-center rounded-[6px] border border-primary/70 bg-primary/8 text-primary">
          <Cpu size={14} strokeWidth={1.8} />
        </span>
      </span>
      {!compact && (
        <span className="font-display text-[15px] font-bold uppercase text-foreground">
          Mikro<span className="text-primary">Serwis</span>
        </span>
      )}
    </span>
  );
}