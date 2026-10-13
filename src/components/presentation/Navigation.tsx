import { useCallback, useEffect, useState } from "react";
import { SECTIONS } from "@/config/presentation";
import { cn } from "@/lib/utils";

function useActiveSection() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setProgress(h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight));
      const mid = window.innerHeight * 0.4;
      let idx = 0;
      SECTIONS.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= mid) idx = i;
      });
      setActive(idx);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return { active, progress };
}

const go = (i: number) => {
  const s = SECTIONS[Math.max(0, Math.min(SECTIONS.length - 1, i))];
  if (s) document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" });
};

export function Navigation() {
  const { active, progress } = useActiveSection();
  const [open, setOpen] = useState(false);

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (["INPUT", "TEXTAREA"].includes(t.tagName)) return;
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        go(active + 1);
      }
      if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(active - 1);
      }
    },
    [active],
  );
  useEffect(() => {
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onKey]);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-navy/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12">
          <a href="#inicio" className="font-serif text-xl text-ivory">
            Proposta <span className="text-gold">·</span>{" "}
            <span className="italic text-muted-foreground">Presença Digital</span>
          </a>
          <nav aria-label="Seções" className="hidden lg:block">
            <ul className="flex gap-7">
              {SECTIONS.slice(1).map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={cn(
                      "text-xs tracking-wide transition-colors hover:text-gold",
                      active === i + 1 ? "text-gold" : "text-muted-foreground",
                    )}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            className="text-xs tracking-[0.2em] text-ivory lg:hidden"
          >
            {open ? "FECHAR" : "MENU"}
          </button>
        </div>
        <div className="h-px bg-line">
          <div
            className="h-px origin-left bg-gold transition-transform"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
        {open && (
          <nav
            id="menu-mobile"
            aria-label="Seções"
            className="border-t border-line bg-navy px-6 py-6 lg:hidden"
          >
            <ul className="space-y-4">
              {SECTIONS.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={() => setOpen(false)}
                    className="flex gap-4 font-serif text-2xl text-ivory"
                  >
                    <span className="text-sm text-gold">{pad(i + 1)}</span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-1 rounded-sm border border-ivory/10 bg-navy-deep/90 p-1 backdrop-blur-md">
        <button
          onClick={() => go(active - 1)}
          disabled={active === 0}
          aria-label="Seção anterior"
          className="h-9 w-9 text-ivory transition-colors hover:text-gold disabled:opacity-30"
        >
          ←
        </button>
        <span
          className="min-w-16 text-center font-serif text-sm tabular-nums text-ivory"
          aria-live="polite"
        >
          <span className="text-gold">{pad(active + 1)}</span> / {pad(SECTIONS.length)}
        </span>
        <button
          onClick={() => go(active + 1)}
          disabled={active === SECTIONS.length - 1}
          aria-label="Próxima seção"
          className="h-9 w-9 text-ivory transition-colors hover:text-gold disabled:opacity-30"
        >
          →
        </button>
        <span className="mx-1 h-5 w-px bg-ivory/10" />
        <button
          onClick={() => go(0)}
          aria-label="Voltar ao início"
          className="h-9 w-9 text-ivory transition-colors hover:text-gold"
        >
          ↑
        </button>
      </div>
    </>
  );
}
