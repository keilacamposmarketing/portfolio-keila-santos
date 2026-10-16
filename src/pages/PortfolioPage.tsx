import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { capabilities, certifications, portfolioLinks, projects } from "@/lib/portfolio-data";
import { EditableLink } from "../components/EditableLink";
import { Navbar } from "../components/Navbar";
import { SectionTitle } from "../components/SectionTitle";
import { HeroPhoto } from "../components/HeroPhoto";
import { Footer } from "../components/Footer";
import { CertificationCard } from "../components/CertificationCard";
import { ToolCard } from "../components/ToolCard";
import { stackGroups, process } from "@/lib/portfolio-data";
import { ProjectCard } from "../components/ProjectCard";

export function PortfolioPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && entry.target.classList.add("is-visible"),
        ),
      { threshold: 0.1 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden bg-background text-foreground">
      <Navbar />
      <main>
        <section
          id="inicio"
          className="relative scroll-mt-16 px-5 pb-20 pt-28 sm:pb-24 sm:pt-32 lg:px-0 lg:pb-28"
        >
          <div
            className="hero-grid absolute inset-y-0 right-0 w-1/2 opacity-20"
            aria-hidden="true"
          />
          <div className="relative mx-auto grid max-w-[1160px] grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-[1.35fr_0.85fr] md:grid-rows-[1fr_auto] md:items-center">
            <div className="reveal md:col-start-1 md:row-start-1">
              <p className="section-label text-accent-foreground">TRÁFEGO PAGO & PERFORMANCE</p>
              <h1 className="mt-6 max-w-2xl font-display text-[2.45rem] font-semibold leading-[1.08] text-foreground sm:text-5xl lg:text-[3.75rem]">
                Estratégista e Análise de dados
              </h1>
              <p className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                Atuo na criação, acompanhamento e otimização de campanhas de mídia paga, conectando
                estratégia, dados e mensuração para tomar decisões mais assertivas.
              </p>
            </div>
            <div className="md:col-start-2 md:row-span-2 md:row-start-1">
              <HeroPhoto />
            </div>
            <div className="reveal md:col-start-1 md:row-start-2">
              <EditableLink
                href={portfolioLinks.resume}
                className="inline-flex cursor-not-allowed opacity-55"
              >
                <Button variant="portfolio" size="portfolio">
                  CURRÍCULO <ArrowUpRight />
                </Button>
              </EditableLink>
              <p className="mt-5 font-mono text-[9px] tracking-[0.12em] text-muted-foreground">
                GOOGLE ADS · META ADS · CHATGPT ADS
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto h-px max-w-[1160px] bg-border" />

        <section data-testid="section_sobre" id="sobre" className="section-shell scroll-mt-16">
          <div className="mx-auto max-w-[1160px]">
            <SectionTitle eyebrow="SOBRE" title="Mídia paga, dados e aprendizado constante." />
            <div className="mt-10 grid gap-8 md:grid-cols-[0.45fr_1fr] md:gap-14">
              <div className="reveal hidden min-h-36 border-l border-border pl-5 md:block">
                <p className="section-label">FOCO</p>
                <p className="mt-4 text-sm leading-6 text-foreground/80">
                  Mídia paga
                  <br />
                  Performance
                  <br />
                  Dados &amp; mensuração
                </p>
              </div>
              <div className="reveal max-w-2xl space-y-5 text-base leading-8 text-muted-foreground">
                <p>
                  Sou estudante de Marketing Digital e atuo com tráfego pago e performance,
                  trabalhando na criação e configuração de campanhas, análise de métricas,
                  acompanhamento de conversões e otimização de estratégias.
                </p>
                <p className="text-foreground/88">
                  No dia a dia, trabalho com Google Ads, Meta Ads e outras plataformas de mídia,
                  além de ferramentas de mensuração e análise. Meu foco é entender o contexto de
                  cada campanha, acompanhar seus dados e contribuir para decisões mais eficientes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          data-testid="section_experiencia"
          id="experiencia"
          className="section-shell scroll-mt-16 bg-secondary/18"
        >
          <div className="mx-auto max-w-[1160px]">
            <SectionTitle
              eyebrow="EXPERIÊNCIA"
              title="Estratégia, mídia e performance no dia a dia."
              intro="Atuação prática na criação, configuração, acompanhamento e otimização de campanhas para diferentes segmentos e objetivos."
            />
            <div className="mt-12 border-b border-border">
              {capabilities.map((item) => (
                <article
                  key={item.title}
                  className="reveal grid gap-5 border-t border-border py-7 md:grid-cols-[0.38fr_1fr] md:gap-12"
                >
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <ul className="flex flex-wrap gap-x-5 gap-y-2">
                    {item.items.map((value) => (
                      <li key={value} className="text-xs leading-6 text-muted-foreground">
                        {value}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          data-testid="section_projetos"
          id="projetos"
          className="section-shell scroll-mt-16"
        >
          <div className="mx-auto max-w-[1160px]">
            <SectionTitle
              eyebrow="PROJETOS"
              title="Projetos que fazem parte da minha experiência em mídia paga."
              intro="Experiências em mídia paga para segmentos de saúde, indústria, engenharia, mercado imobiliário entre outros."
            />
            <div className="mt-10">
              {projects.map((project, index) => (
                <ProjectCard key={project.name} project={project} reverse={index % 2 === 1} />
              ))}
            </div>
          </div>
        </section>

        <section
          data-testid="section_processo"
          id="processo"
          className="section-shell scroll-mt-16 bg-secondary/18"
        >
          <div className="mx-auto max-w-[1160px]">
            <SectionTitle
              eyebrow="PROCESSO"
              title="Do dado à decisão."
              intro="Cada campanha começa com um objetivo e passa por acompanhamento contínuo para identificar o que funciona, o que precisa ser ajustado e onde existem novas oportunidades."
            />
            <div className="mt-12 border-b border-border md:grid md:grid-cols-5">
              {process.map(([title, text]) => (
                <article
                  key={title}
                  className="reveal border-t border-border py-6 md:min-h-44 md:border-l md:px-5 md:first:border-l-0"
                >
                  <span className="mb-8 block h-1.5 w-1.5 rounded-full bg-accent/75" />
                  <h3 className="text-xs font-semibold text-foreground">{title}</h3>
                  <p className="mt-3 text-xs leading-6 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section data-testid="section_stack" id="stack" className="section-shell scroll-mt-16">
          <div className="mx-auto max-w-[1160px]">
            <SectionTitle
              eyebrow="STACK"
              title="Stack de Performance"
              intro="Ferramentas que fazem parte da minha rotina para criar, acompanhar, mensurar e otimizar campanhas."
            />
            <div className="mt-12 border-b border-border">
              {stackGroups.map((group) => (
                <article
                  key={group.title}
                  className={`reveal grid gap-6 border-t px-0 py-7 transition-colors duration-300 md:grid-cols-[0.34fr_1fr] md:items-center md:px-5 ${group.level === "primary" ? "border-accent/30 bg-card/45" : group.level === "secondary" ? "border-border bg-secondary/12" : "border-border bg-background/20"}`}
                >
                  <div>
                    <h3 className="text-xs font-semibold text-foreground">{group.title}</h3>
                    <p className="mt-2 text-[10px] text-muted-foreground">{group.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {group.tools.map((tool) => (
                      <ToolCard key={tool} tool={tool} emphasized={group.level === "primary"} />
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell bg-secondary/18">
          <div className="mx-auto grid max-w-[1160px] gap-14 lg:grid-cols-[0.65fr_1.35fr]">
            <div className="reveal">
              <p className="section-label">FORMAÇÃO</p>
              <h2 className="mt-5 font-display text-2xl font-semibold sm:text-3xl">
                Marketing Digital
              </h2>
              <p className="mt-4 text-sm text-muted-foreground">Uninter</p>
              <p className="mt-2 font-mono text-[10px] tracking-[0.1em] text-accent-foreground">
                2025–2027
              </p>
            </div>
            <div className="reveal">
              <div className="flex items-end justify-between gap-4">
                <p className="section-label">CERTIFICAÇÕES</p>
                <EditableLink
                  href={portfolioLinks.linkedin}
                  className="cursor-not-allowed opacity-55"
                >
                  <Button variant="portfolioOutline" size="sm">
                    VER CERTIFICAÇÕES <ArrowUpRight />
                  </Button>
                </EditableLink>
              </div>
              <div className="mt-5 sm:columns-2 sm:gap-8">
                {certifications.map((certification) => (
                  <div
                    key={`${certification.issuer}-${certification.title}`}
                    className="break-inside-avoid"
                  >
                    <CertificationCard certification={certification} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="section-shell scroll-mt-16">
          <div className="reveal mx-auto max-w-[1160px] border-t border-border pt-12 sm:pt-16">
            <p className="section-label">CONTATO</p>
            <div className="mt-5 grid gap-8 md:grid-cols-[1fr_0.75fr] md:items-end">
              <div>
                <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
                  Vamos conversar?
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                  Estou aberta a novas oportunidades e projetos relacionados a tráfego pago,
                  performance e marketing digital.
                </p>
              </div>
              <div className="flex flex-col border-t border-border md:border-t-0">
                {(
                  [
                    ["LinkedIn", portfolioLinks.linkedin],
                    ["WhatsApp", portfolioLinks.whatsapp],
                    ["E-mail", portfolioLinks.email],
                  ] as const
                ).map(([label, href]) => (
                  <EditableLink
                    key={label}
                    href={href}
                    className="flex items-center justify-between border-b border-border py-3 text-sm font-medium text-foreground transition-colors hover:text-accent-foreground"
                  >
                    {label}
                    <ArrowUpRight className="h-4 w-4" />
                  </EditableLink>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
