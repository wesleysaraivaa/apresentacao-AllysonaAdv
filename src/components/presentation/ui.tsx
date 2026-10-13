import { useEffect, useRef, type ReactNode, type AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

type BtnProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "gold" | "outline" | "link";
  external?: boolean;
};
export function ButtonLink({ variant = "gold", external, className, children, ...rest }: BtnProps) {
  const styles = {
    gold: "bg-gold text-navy hover:bg-ivory",
    outline: "border border-ivory/20 text-ivory hover:border-gold hover:text-gold",
    link: "text-gold hover:text-ivory px-0",
  }[variant];
  return (
    <a
      {...rest}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex items-center gap-3 rounded-sm px-6 py-3.5 text-sm font-medium tracking-wide transition-all duration-300",
        styles,
        className,
      )}
    >
      {children}
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
        {external ? "↗" : "→"}
      </span>
    </a>
  );
}

export function SectionHeader({
  index,
  eyebrow,
  title,
  children,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <Reveal className="max-w-3xl">
      <div className="flex items-center gap-4">
        <span className="font-serif text-lg text-gold">{index}</span>
        <span className="h-px w-10 bg-gold/50" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="mt-6 text-4xl leading-[1.08] text-ivory md:text-6xl">{title}</h2>
      {children && (
        <div className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {children}
        </div>
      )}
    </Reveal>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      data-section
      className={cn("relative border-t border-line px-6 py-24 md:px-12 md:py-36", className)}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
