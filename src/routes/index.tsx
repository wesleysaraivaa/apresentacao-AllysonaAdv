import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/presentation/Navigation";
import {
  Closing,
  Demo,
  Devices,
  GoogleSearch,
  Hero,
  Opportunity,
  Process,
  Scope,
  Tool,
} from "@/components/presentation/Sections";

import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useEffect(() => {
    const check = () => {
      const docW = document.documentElement.clientWidth;
      const bad: any[] = [];
      document.querySelectorAll("*").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.right > docW + 1) {
          const parent = el.closest("section, [id]");
          bad.push({
            tag: el.tagName,
            cls: (typeof el.className === "string" ? el.className : "").slice(0, 60),
            right: Math.round(r.right),
            width: Math.round(r.width),
            docW,
            section: parent ? (parent.id || parent.tagName) : "none",
            text: (el.textContent || "").trim().slice(0, 30),
          });
        }
      });
      console.warn("OVERFLOW_ELEMENTS:", JSON.stringify(bad, null, 2));
    };
    setTimeout(check, 500);
    window.addEventListener("resize", check);
    window.addEventListener("scroll", check, { passive: true });
    return () => {
      window.removeEventListener("resize", check);
      window.removeEventListener("scroll", check);
    };
  }, []);
  return (
    <>
      <a
        href="#oportunidade"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:bg-gold focus:px-4 focus:py-2 focus:text-navy"
      >
        Pular para o conteúdo
      </a>
      <Navigation />
      <main>
        <Hero />
        <Opportunity />
        <Tool />
        <Demo />
        <Devices />
        <GoogleSearch />
        <Process />
        <Scope />
        <Closing />
      </main>
    </>
  );
}
