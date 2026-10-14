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
