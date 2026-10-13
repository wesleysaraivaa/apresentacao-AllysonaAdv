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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Proposta de Presença Digital | Site Institucional para Advocacia" },
      {
        name: "description",
        content:
          "Proposta de desenvolvimento de site institucional para escritório de advocacia: estratégia, design, demonstração e próximos passos.",
      },
      { property: "og:title", content: "Proposta de Presença Digital para Advocacia" },
      {
        property: "og:description",
        content:
          "Uma presença digital à altura da sua atuação. Conheça a proposta e o projeto demonstrativo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
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
