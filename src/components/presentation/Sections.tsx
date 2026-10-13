import {
  Compass,
  LayoutList,
  Info,
  MessageCircle,
  Search,
  ShieldCheck,
  Monitor,
  Smartphone,
  Type,
  MapPin,
} from "lucide-react";
import demoDesk from "@/assets/demo-desk.jpg";
import demoMob from "@/assets/demo-mob.jpg";
import { DEMO_URL, DEVELOPER_NAME, whatsappHref } from "@/config/presentation";
import { BrowserFrame, PhoneFrame, TabletFrame } from "./Devices";
import { ButtonLink, Reveal, Section, SectionHeader } from "./ui";

const demoHost = DEMO_URL.replace(/^https?:\/\//, "").replace(/\/$/, "");

export function Hero() {
  return (
    <section
      id="inicio"
      data-section
      className="relative overflow-hidden px-6 pb-24 pt-32 md:px-12 md:pt-40"
    >
      <div aria-hidden className="grid-lines absolute inset-0 opacity-60" />
      <div aria-hidden className="glow-gold absolute inset-0" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="eyebrow">Proposta de presença digital</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-8 text-5xl leading-[1.02] text-ivory md:text-7xl xl:text-[5.5rem]">
              Uma presença digital <em className="text-gold">à altura</em> da sua atuação.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Uma proposta para transformar a presença digital do seu escritório em uma experiência
              profissional, confiável e preparada para conectar você a novas oportunidades.
            </p>
          </Reveal>
          <Reveal delay={300} className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="#oportunidade">Conhecer a proposta</ButtonLink>
            <ButtonLink href="#demonstracao" variant="outline">
              Ver o projeto desenvolvido
            </ButtonLink>
          </Reveal>
          <Reveal delay={400}>
            <p className="mt-12 flex items-center gap-3 text-xs tracking-wide text-muted-foreground">
              <span className="h-px w-8 bg-gold/60" /> Apresentação de projeto • Desenvolvimento web
            </p>
          </Reveal>
        </div>
        <Reveal delay={250} className="relative lg:col-span-6">
          <BrowserFrame url={demoHost}>
            <img
              src={demoDesk}
              alt="Página inicial original do site de Allysson Carvalho Advocacia"
              width={1440}
              height={900}
              className="block w-full"
            />
          </BrowserFrame>
          <PhoneFrame className="absolute -bottom-10 -left-4 w-32 md:-left-10 md:w-40">
            <img
              src={demoMob}
              alt="Site original de Allysson Carvalho Advocacia no celular"
              width={390}
              height={844}
              className="block w-full"
            />
          </PhoneFrame>
          <p className="mt-16 text-right text-[11px] tracking-wide text-muted-foreground">
            Allysson Carvalho Advocacia — projeto demonstrativo
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const opportunities = [
  {
    icon: Compass,
    t: "Presença própria",
    d: "Um endereço digital que pertence ao escritório, independente de redes sociais.",
  },
  {
    icon: LayoutList,
    t: "Atuação organizada",
    d: "Áreas de atendimento e informações institucionais apresentadas com clareza.",
  },
  {
    icon: Info,
    t: "Informação antecipada",
    d: "Quem procura o escritório encontra o essencial antes do primeiro contato.",
  },
  {
    icon: MessageCircle,
    t: "Contato direto",
    d: "Um canal objetivo de conversa pelo WhatsApp, a um toque de distância.",
  },
  {
    icon: Search,
    t: "Base para o Google",
    d: "Uma estrutura preparada para evoluir a presença nas pesquisas.",
  },
  {
    icon: ShieldCheck,
    t: "Mais profissionalismo",
    d: "Uma primeira impressão coerente com a seriedade do trabalho jurídico.",
  },
];

export function Opportunity() {
  return (
    <Section id="oportunidade">
      <SectionHeader
        index="02"
        eyebrow="Oportunidade digital"
        title={
          <>
            Seu trabalho merece ser <em className="text-gold">encontrado</em> e apresentado da
            melhor forma.
          </>
        }
      >
        Hoje, boa parte das pessoas pesquisa antes de entrar em contato. Um site institucional pode
        ser o ponto de encontro entre quem procura orientação e a forma como o escritório deseja ser
        conhecido.
      </SectionHeader>
      <div className="mt-20 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {opportunities.map(({ icon: Icon, t, d }, i) => (
          <Reveal
            key={t}
            delay={i * 70}
            className="group bg-navy p-8 transition-colors duration-500 hover:bg-navy-deep md:p-10"
          >
            <Icon aria-hidden strokeWidth={1.2} className="h-7 w-7 text-gold" />
            <h3 className="mt-8 text-2xl text-ivory">{t}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
          </Reveal>
        ))}
      </div>
      <p className="mt-8 max-w-2xl text-xs leading-relaxed text-muted-foreground/80">
        * A visibilidade nos resultados do Google depende de diversos fatores, como conteúdo,
        concorrência e tempo, e não é garantida apenas pela criação de um site.
      </p>
    </Section>
  );
}

const features = [
  "Página inicial institucional",
  "Apresentação do advogado ou do escritório",
  "Áreas de atuação",
  "Informações de atendimento",
  "Botão de contato pelo WhatsApp",
  "Layout responsivo para celular, tablet e computador",
  "Estrutura técnica preparada para boas práticas de SEO",
];

export function Tool() {
  return (
    <Section id="ferramenta" className="bg-navy-deep/40">
      <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <SectionHeader
            index="03"
            eyebrow="O site como ferramenta"
            title={
              <>
                Mais do que estar na internet. É apresentar seu trabalho com{" "}
                <em className="text-gold">clareza</em>.
              </>
            }
          />
          <Reveal delay={100}>
            <p className="mt-10 eyebrow">Proposta de escopo</p>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {features.map((f, i) => (
                <li key={f} className="flex items-baseline gap-5 py-4 text-ivory/90">
                  <span className="font-serif text-sm text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal delay={200} className="relative lg:col-span-7">
          <BrowserFrame url={demoHost}>
            <img
              src={demoDesk}
              alt="Página inicial original do site demonstrativo"
              width={1440}
              height={900}
              loading="lazy"
              className="block w-full"
            />
          </BrowserFrame>
          <PhoneFrame className="absolute -bottom-12 -right-2 w-36 md:-right-8 md:w-44">
            <img
              src={demoMob}
              alt="Página inicial original do site demonstrativo no celular"
              width={390}
              height={844}
              loading="lazy"
              className="block w-full"
            />
          </PhoneFrame>
        </Reveal>
      </div>
    </Section>
  );
}

export function Demo() {
  return (
    <Section id="demonstracao" className="overflow-hidden">
      <div aria-hidden className="glow-gold absolute inset-0" />
      <div className="relative">
        <SectionHeader
          index="04"
          eyebrow="Demonstração do projeto"
          title={
            <>
              Uma ideia que você pode conhecer <em className="text-gold">na prática</em>.
            </>
          }
        >
          Preparei uma demonstração para mostrar como uma presença digital profissional pode ganhar
          forma, combinando design, organização das informações e facilidade de navegação.
        </SectionHeader>

        <Reveal delay={150} className="relative mt-20">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir o site demonstrativo em nova aba"
            className="group block"
          >
            <BrowserFrame
              url={demoHost}
              className="transition-transform duration-700 group-hover:-translate-y-1"
            >
              <img
                src={demoDesk}
                alt="Captura de tela real da página inicial do site demonstrativo"
                width={1440}
                height={900}
                loading="lazy"
                className="block w-full"
              />
              <div className="absolute inset-0 flex items-end justify-center bg-linear-to-t from-navy/70 via-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="mb-8 eyebrow text-ivory">Abrir em nova aba ↗</span>
              </div>
            </BrowserFrame>
          </a>
          <PhoneFrame className="absolute -bottom-10 right-4 hidden w-40 sm:block md:right-12 md:w-52">
            <img
              src={demoMob}
              alt="Captura de tela real do site demonstrativo no celular"
              width={390}
              height={844}
              loading="lazy"
              className="block w-full"
            />
          </PhoneFrame>
        </Reveal>

        <Reveal className="mt-20 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow">Endereço do projeto</p>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block break-all font-serif text-2xl text-ivory hover:text-gold"
            >
              {demoHost}
            </a>
            <p className="mt-3 max-w-lg text-xs text-muted-foreground">
              Projeto desenvolvido como exemplo de trabalho. Não se trata de um site publicado para
              o escritório que recebe esta proposta.
            </p>
          </div>
          <ButtonLink href={DEMO_URL} external>
            Explorar o site demonstrativo
          </ButtonLink>
        </Reveal>

        <div className="mt-20 grid gap-px border border-line bg-line md:grid-cols-3">
          {[
            {
              icon: Monitor,
              t: "Design profissional",
              d: "Composição editorial, tipografia cuidadosa e identidade sóbria.",
            },
            {
              icon: Smartphone,
              t: "Experiência responsiva",
              d: "Layout pensado para se adaptar a telas de diferentes tamanhos.",
            },
            {
              icon: Type,
              t: "Comunicação clara e acessível",
              d: "Informações organizadas para leitura objetiva e direta.",
            },
          ].map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 80} className="bg-navy p-8">
              <Icon aria-hidden strokeWidth={1.2} className="h-6 w-6 text-gold" />
              <h3 className="mt-6 text-2xl text-ivory">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Devices() {
  return (
    <Section id="dispositivos" className="bg-navy-deep/40">
      <SectionHeader
        index="05"
        eyebrow="Experiência em diferentes dispositivos"
        title={
          <>
            Uma experiência consistente em <em className="text-gold">qualquer tela</em>.
          </>
        }
      >
        O site deve oferecer uma navegação confortável em computadores, tablets e celulares — com
        textos legíveis, botões fáceis de tocar e informações sempre bem organizadas.
      </SectionHeader>
      <Reveal
        delay={150}
        className="relative mx-auto mt-20 flex max-w-5xl items-end justify-center gap-4 md:gap-8"
      >
        <BrowserFrame url={demoHost} className="hidden w-[58%] md:block">
          <img
            src={demoDesk}
            alt="Site original exibido na moldura de computador"
            width={1440}
            height={900}
            loading="lazy"
            className="block w-full"
          />
        </BrowserFrame>
        <TabletFrame className="w-[46%] md:w-[26%]">
          <img
            src={demoMob}
            alt="Preview do site original na moldura de tablet"
            width={390}
            height={844}
            loading="lazy"
            className="block w-full"
          />
        </TabletFrame>
        <PhoneFrame className="w-[30%] md:w-[15%]">
          <img
            src={demoMob}
            alt="Site original exibido na moldura de celular"
            width={390}
            height={844}
            loading="lazy"
            className="block w-full"
          />
        </PhoneFrame>
      </Reveal>
      <div className="mx-auto mt-10 flex max-w-5xl justify-center gap-10 text-xs tracking-[0.2em] text-muted-foreground">
        <span className="hidden md:inline">COMPUTADOR</span>
        <span>TABLET</span>
        <span>CELULAR</span>
      </div>
    </Section>
  );
}

const searchPoints = [
  {
    icon: Search,
    t: "Encontrável nas buscas",
    d: "Estrutura técnica preparada para o site ser lido e indexado pelo Google.",
  },
  {
    icon: MapPin,
    t: "Cartão de negócio local",
    d: "Complemento opcional ao site: o escritório pode aparecer também nas buscas e nos mapas da região.",
  },
  {
    icon: MessageCircle,
    t: "Contato em um toque",
    d: "Do resultado da busca ao site, a conversa pelo WhatsApp fica a um clique de distância.",
  },
];

export function GoogleSearch() {
  return (
    <Section id="google">
      <SectionHeader
        index="06"
        eyebrow="Representação nas buscas"
        title={
          <>
            É assim que um cliente pode <em className="text-gold">encontrar</em> o escritório.
          </>
        }
      >
        O caminho mais comum começa em uma pesquisa: o escritório aparece nos resultados, o site
        apresenta o trabalho e o contato acontece em um toque.
      </SectionHeader>

      <Reveal delay={150} className="mt-20">
        <BrowserFrame url="Busca online — ilustração conceitual">
          <div
            className="bg-ivory p-6 text-navy md:p-10"
            aria-label="Ilustração conceitual de página de resultados de busca"
          >
            <div className="flex items-center gap-3 rounded-full border border-navy/15 bg-navy/5 px-5 py-3">
              <Search aria-hidden className="h-4 w-4 text-navy/50" strokeWidth={1.5} />
              <span className="text-sm text-navy/70">advogado • cidade</span>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-5 md:gap-6">
              <div className="rounded-lg border border-navy/10 bg-navy/5 p-5 md:col-span-3 md:p-6">
                <p className="text-lg font-medium">Allysson Carvalho Advocacia</p>
                <p className="mt-1 flex items-center gap-2 text-xs text-navy/60">
                  <MapPin aria-hidden className="h-3.5 w-3.5" strokeWidth={1.5} /> Escritório de
                  advocacia
                </p>
                <p className="mt-1 text-xs text-navy/60">
                  Site institucional • Contato por WhatsApp
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Como chegar", "Ligar", "WhatsApp"].map((b) => (
                    <span
                      key={b}
                      className="rounded-full border border-navy/20 px-3 py-1 text-[11px] text-navy/70"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
              <div
                aria-hidden
                className="relative flex min-h-32 items-center justify-center overflow-hidden rounded-lg border border-navy/10 bg-navy/5 md:col-span-2"
              >
                <span className="absolute left-0 top-1/2 h-px w-full bg-navy/10" />
                <span className="absolute left-1/2 top-0 h-full w-px bg-navy/10" />
                <MapPin className="h-6 w-6 text-gold" strokeWidth={1.2} />
              </div>
            </div>

            <div className="mt-6 border-t border-navy/10 pt-6">
              <p className="break-all text-xs text-navy/50">{demoHost}</p>
              <p className="mt-1 text-lg underline decoration-navy/30 underline-offset-4">
                Allysson Carvalho Advocacia
              </p>
              <p className="mt-2 max-w-xl text-sm text-navy/70">
                Site institucional com apresentação do escritório, áreas de atuação, informações de
                atendimento e contato direto pelo WhatsApp.
              </p>
            </div>

            <p className="mt-8 flex items-center gap-3 text-[11px] tracking-wide text-navy/50">
              <span className="h-px w-6 bg-navy/30" /> Ilustração conceitual — não representa
              resultados reais
            </p>
          </div>
        </BrowserFrame>
      </Reveal>

      <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-3">
        {searchPoints.map(({ icon: Icon, t, d }, i) => (
          <Reveal key={t} delay={i * 80} className="bg-navy p-8">
            <Icon aria-hidden strokeWidth={1.2} className="h-6 w-6 text-gold" />
            <h3 className="mt-6 text-2xl text-ivory">{t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-muted-foreground/80">
          * A posição nos resultados das buscas depende de fatores como conteúdo, concorrência e
          tempo, e não é garantida apenas pela criação de um site.
        </p>
      </Reveal>
    </Section>
  );
}

const steps = [
  {
    n: "01",
    t: "Envio das informações",
    d: "Recebimento dos dados do escritório: apresentação, áreas de atendimento, contatos, fotos e logo.",
  },
  {
    n: "02",
    t: "Conteúdo e identidade",
    d: "Substituição dos textos, fotos e logo atuais pelas informações e materiais definidos pelo escritório.",
  },
  {
    n: "03",
    t: "Revisão e ajustes",
    d: "Conferência da versão final, coleta de feedback e realização dos ajustes previstos.",
  },
  {
    n: "04",
    t: "Publicação",
    d: "Configuração do domínio e publicação do projeto, conforme o escopo contratado.",
  },
];

export function Process() {
  return (
    <Section id="processo">
      <SectionHeader
        index="07"
        eyebrow="Como funcionaria o projeto"
        title={
          <>
            Do envio das informações à <em className="text-gold">publicação</em>.
          </>
        }
      >
        A estrutura e o layout já estão desenvolvidos. A partir daqui, o trabalho é adaptar o
        projeto às informações do escritório.
      </SectionHeader>
      <ol className="relative mt-20 grid gap-12 border-l border-line pl-8 md:grid-cols-4 md:gap-8 md:border-l-0 md:border-t md:pl-0 md:pt-12">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 100} className="relative">
            <li className="list-none">
              <span
                aria-hidden
                className="absolute -left-9.25 top-2 h-2.5 w-2.5 rounded-full bg-gold md:-top-13.25 md:left-0"
              />
              <span className="font-serif text-5xl text-gold/80">{s.n}</span>
              <h3 className="mt-4 text-2xl text-ivory">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

const scope = [
  "Planejamento da estrutura do site",
  "Design personalizado",
  "Desenvolvimento responsivo",
  "Organização das informações institucionais",
  "Integração com WhatsApp",
  "Configuração técnica básica para SEO",
  "Publicação e configuração de domínio, conforme combinado",
];

export function Scope() {
  return (
    <Section id="escopo" className="bg-navy-deep/40">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeader
            index="08"
            eyebrow="O que pode estar incluído"
            title={
              <>
                Uma solução pensada para as necessidades do{" "}
                <em className="text-gold">escritório</em>.
              </>
            }
          />
        </div>
        <div className="lg:col-span-7">
          <ul className="grid gap-px border border-line bg-line sm:grid-cols-2">
            {scope.map((s, i) => (
              <Reveal
                key={s}
                delay={i * 50}
                className="flex gap-4 bg-navy p-6 transition-colors hover:bg-navy-deep"
              >
                <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-gold" />
                <li className="list-none text-ivory/90">{s}</li>
              </Reveal>
            ))}
          </ul>
          <Reveal>
            <p className="mt-10 border-l border-gold pl-6 font-serif text-xl italic text-ivory/90">
              O escopo definitivo, os prazos, os custos recorrentes e as condições de manutenção
              serão definidos em conjunto.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export function Closing() {
  const wa = whatsappHref();
  return (
    <section
      id="contato"
      data-section
      className="relative overflow-hidden border-t border-line px-6 py-32 md:px-12 md:py-44"
    >
      <div aria-hidden className="grid-lines absolute inset-0 opacity-50" />
      <div aria-hidden className="glow-gold absolute inset-0" />
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="eyebrow">09 — Próximo passo</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-8 text-5xl leading-[1.05] text-ivory md:text-7xl">
            Vamos transformar essa ideia em um <em className="text-gold">projeto real</em>?
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A proposta é construir uma experiência digital alinhada à identidade do escritório,
            facilitando a apresentação dos serviços, o acesso às informações e o contato com
            potenciais clientes.
          </p>
        </Reveal>
        <Reveal delay={300} className="mt-12 flex flex-wrap justify-center gap-4">
          {wa ? (
            <ButtonLink href={wa} external>
              Conversar sobre o projeto
            </ButtonLink>
          ) : (
            <ButtonLink href="#escopo">Conversar sobre o projeto</ButtonLink>
          )}
          <ButtonLink href={DEMO_URL} external variant="outline">
            Revisitar o site demonstrativo
          </ButtonLink>
        </Reveal>
      </div>
      <footer className="relative mx-auto mt-32 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-line pt-8 text-xs tracking-wide text-muted-foreground md:flex-row">
        <span>
          {DEVELOPER_NAME ? `${DEVELOPER_NAME} — ` : ""}Desenvolvimento web • Design • Soluções
          digitais
        </span>
        <a href="#inicio" className="hover:text-gold">
          Voltar ao início ↑
        </a>
      </footer>
    </section>
  );
}
