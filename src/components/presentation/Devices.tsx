import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function BrowserFrame({
  url,
  children,
  className,
}: {
  url: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-full max-w-full overflow-hidden rounded-lg border border-ivory/10 bg-navy-deep shadow-device",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-ivory/10 px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3">
        <div className="flex shrink-0 gap-1.5" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-ivory/15 sm:h-2.5 sm:w-2.5" />
          <span className="h-2 w-2 rounded-full bg-ivory/15 sm:h-2.5 sm:w-2.5" />
          <span className="h-2 w-2 rounded-full bg-ivory/15 sm:h-2.5 sm:w-2.5" />
        </div>
        <div className="mx-auto flex min-w-0 max-w-md flex-1 items-center justify-center gap-2 rounded-sm bg-navy px-2.5 py-1 text-[11px] text-muted-foreground sm:px-3">
          <span aria-hidden className="shrink-0 text-gold">
            ●
          </span>
          <span className="truncate">{url}</span>
        </div>
        <span className="w-5 shrink-0 sm:w-10" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

export function PhoneFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "max-w-full rounded-4xl border border-ivory/15 bg-navy p-2 shadow-device",
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-[1.6rem] bg-navy-deep">
        <div
          aria-hidden
          className="absolute left-1/2 top-2 z-10 h-3.5 w-14 -translate-x-1/2 rounded-full bg-navy sm:h-4 sm:w-16"
        />
        {children}
      </div>
    </div>
  );
}

export function TabletFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "max-w-full rounded-[1.4rem] border border-ivory/15 bg-navy p-2 sm:p-2.5 shadow-device",
        className,
      )}
    >
      <div className="overflow-hidden rounded-xl bg-navy-deep">{children}</div>
    </div>
  );
}

/** Wireframe abstrato de site institucional (conceitual, não é o site demonstrativo). */
export function Wireframe({ compact = false }: { compact?: boolean }) {
  return (
    <div className={cn("bg-ivory text-navy", compact ? "p-3" : "p-6 md:p-8")} aria-hidden>
      <div className="flex items-center justify-between">
        <div className="h-2 w-16 rounded-full bg-navy/80" />
        {!compact && (
          <div className="flex gap-3">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="h-1.5 w-8 rounded-full bg-navy/25" />
            ))}
          </div>
        )}
        <div className="h-4 w-12 rounded-sm bg-gold" />
      </div>
      <div className={cn("grid gap-4", compact ? "mt-5" : "mt-10 grid-cols-5")}>
        <div className={compact ? "" : "col-span-3"}>
          <div className="h-1.5 w-14 rounded-full bg-gold" />
          <div className="mt-3 h-4 w-11/12 rounded-sm bg-navy/85" />
          <div className="mt-2 h-4 w-8/12 rounded-sm bg-navy/85" />
          <div className="mt-4 space-y-1.5">
            <div className="h-1.5 w-full rounded-full bg-navy/20" />
            <div className="h-1.5 w-10/12 rounded-full bg-navy/20" />
          </div>
          <div className="mt-5 h-5 w-24 rounded-sm bg-navy" />
        </div>
        <div className={cn("rounded-sm bg-navy/10", compact ? "h-24" : "col-span-2 h-40")} />
      </div>
      <div className={cn("grid gap-2", compact ? "mt-5 grid-cols-2" : "mt-10 grid-cols-4")}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-sm border border-navy/10 p-2">
            <div className="h-1.5 w-6 rounded-full bg-gold" />
            <div className="mt-2 h-1.5 w-full rounded-full bg-navy/20" />
            <div className="mt-1 h-1.5 w-8/12 rounded-full bg-navy/20" />
          </div>
        ))}
      </div>
    </div>
  );
}
