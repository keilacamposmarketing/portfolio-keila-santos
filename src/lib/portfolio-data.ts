import psiquiatriaClinicaPhoto from "../assets/projects-clinica-psiquiatria.jpeg";
import saudeClinicaPhoto from "../assets/projects-clinica-saude.jpeg";
import setorEletricoPhoto from "../assets/projects-setor-eletrico.jpeg";
import setorEngenhariaPhoto from "../assets/projects-setor-engenharia.jpeg";
import { Project, Certification } from "@/types/portfolio-data";

export const portfolioLinks = {
  resume: "/cv_keilasantos.pdf",
  certifications: null,
  linkedin: "https://www.linkedin.com/in/keila-santos-campos-a897152b8",
  whatsapp:
    "https://api.whatsapp.com/send/?phone=5511942440037&text&type=phone_number&app_absent=0",
  email: "mailto:keilasantoscampos7@gmail.com",
} as const;

export const projects: Project[] = [
  {
    number: "01",
    name: "CLÍNICA ORTOPEDIA",
    segment: "Saúde",
    platforms: "Google Ads + Meta Ads",
    image: saudeClinicaPhoto,
    description:
      "Clínica especializada em tratamentos para diferentes tipos de dor, com atuação em mídia paga para captação de novos pacientes.",
    work: [
      "Campanhas",
      "Segmentação geográfica",
      "Pesquisa de termos",
      "Palavras-chave negativas",
      "Acompanhamento de conversões",
      "Análise de intenção",
      "Otimização",
    ],
    objective: "Gerar oportunidades de contato para tratamentos e serviços da clínica.",
    strategy:
      "ESTRATÉGIA\n\nEstruturação das campanhas a partir da intenção de busca, localização e perfil do público, com acompanhamento das conversões para identificar oportunidades de otimização.",
    metrics: ["CTR", "CPC", "Conversões", "Custo por conversão", "Termos de pesquisa"],
  },
  {
    number: "02",
    name: "INDUSTRIA DE TRANSFORMADORES",
    segment: "Industrial / B2B",
    platforms: "Google Ads + Meta Ads",
    image: setorEletricoPhoto,
    description:
      "Empresa do setor elétrico com atuação na fabricação e comercialização de transformadores para aplicações industriais.",
    work: [
      "Estruturação de campanhas",
      "Pesquisa de palavras-chave",
      "Análise de termos de pesquisa",
      "Exclusão de buscas irrelevantes",
      "Acompanhamento de orçamento",
      "Análise de performance",
    ],
    objective: "Atrair empresas interessadas em transformadores e soluções elétricas.",
    strategy:
      "Estruturar campanhas voltadas ao público B2B, trabalhando palavras-chave e análise de termos de pesquisa para identificar oportunidades e reduzir buscas sem relação com os produtos oferecidos.",
    metrics: ["CTR", "CPC", "Conversões", "Orçamento", "Termos de pesquisa"],
  },
  {
    number: "03",
    name: "SOLUÇÕES HIDRAULICAS",
    segment: "Serviços / Engenharia",
    platforms: "Google Ads",
    image: setorEngenhariaPhoto,
    description:
      "Empresa com diferentes soluções de engenharia, incluindo teste de estanqueidade, resina e individualização de água e gás.",
    solutions: ["Teste de Estanqueidade", "Resina", "Individualização de Água e Gás"],
    work: [
      "Estruturação de campanhas",
      "Organização de palavras-chave",
      "Análise de intenção",
      "Negativação",
      "Análise de termos",
      "Otimização",
    ],
    objective:
      "Gerar oportunidades para as diferentes soluções e serviços de engenharia oferecidos pelo Grupo MJ.",
    strategy:
      "Separar as campanhas de acordo com cada solução e sua intenção de busca, trabalhando palavras-chave, termos de pesquisa e negativas para direcionar melhor a demanda.",
    metrics: ["CTR", "CPC", "Conversões", "Termos de pesquisa"],
  },
  {
    number: "04",
    name: "PSIQUIATRIA",
    segment: "Saúde",
    platforms: "Google Ads",
    image: psiquiatriaClinicaPhoto,
    description:
      "Campanha de Google Ads para captar pessoas que já estavam buscando atendimento psiquiátrico e direcioná-las para o contato via WhatsApp.",
    work: [
      "Palavras-chave",
      "Análise de termos de pesquisa",
      "Palavras-chave negativas",
      "Acompanhamento das conversões no site",
      "Monitoramento do orçamento",
      "Análise de performance",
      "Otimizações",
    ],
    objective:
      "Gerar contatos de potenciais pacientes pelo site, levando essas pessoas até o WhatsApp para dar continuidade ao atendimento e buscar o agendamento da consulta.",
    strategy:
      "A campanha foi estruturada a partir das buscas relacionadas à psiquiatria, acompanhando quais termos estavam gerando tráfego e conversões. A análise dos termos de pesquisa e a inclusão de palavras-chave negativas ajudaram a filtrar buscas menos relevantes e manter o foco em pessoas com intenção de atendimento dentro da especialidade da doutora.",
    metrics: ["CTR", "CPC", "Conversões", "Custo por conversão", "Termos de pesquisa"],
  },
];

export const capabilities = [
  {
    title: "TRÁFEGO PAGO",
    items: [
      "Google Ads",
      "Meta Ads",
      "YouTube Ads",
      "ChatGPT Ads",
      "Estruturação e configuração de campanhas",
      "Segmentação",
      "Palavras-chave",
      "Públicos",
      "Análise de termos de pesquisa",
      "Palavras-chave negativas",
      "Acompanhamento de orçamento",
    ],
  },
  {
    title: "PERFORMANCE E DADOS",
    items: [
      "Análise de métricas",
      "CTR",
      "CPC",
      "CPA",
      "Conversões",
      "Performance das campanhas",
      "Identificação de oportunidades",
      "Otimização baseada em dados",
    ],
  },
  {
    title: "MENSURAÇÃO",
    items: [
      "Google Analytics 4",
      "Google Tag Manager",
      "Configuração e acompanhamento de eventos",
      "Conversões",
      "Análise de comportamento e resultados",
    ],
  },
  {
    title: "ESTRATÉGIA",
    items: [
      "Entendimento de objetivos de campanha",
      "Análise de público",
      "Estrutura de campanhas",
      "Apoio na estratégia dos clientes",
      "Acompanhamento de reuniões com clientes e equipe",
    ],
  },
];

export const certifications: Certification[] = [
  { issuer: "Google", title: "Fundamentos do Marketing Digital", href: null },
  { issuer: "M2UP", title: "Google Ads: Fluxo Perfeito", href: null },
  { issuer: "M2UP", title: "Google Ads Avançado", href: null },
  { issuer: "M2UP", title: "Google Analytics", href: null },
  { issuer: "M2UP", title: "Instagram e Facebook Pro", href: null },
  { issuer: "M2UP", title: "Meta Avançado", href: null },
  { issuer: "Alura", title: "Fundamentos de SEO", href: null },
  { issuer: "Sebrae", title: "Tráfego Pago e Ferramentas Digitais", href: null },
  {
    issuer: "M2UP",
    title: "Facebook e Instagram Ads PRO",
    duration: "20,5 h",
    year: "2026",
    href: null,
  },
  { issuer: "M2UP", title: "Meta Ads Avançado", duration: "10 h", year: "2026", href: null },
  { issuer: "Alura", title: "SEO: Métricas e Relatórios", year: "2025", href: null },
  { issuer: "Kultive", title: "Social Media", year: "2025", href: null },
  {
    issuer: "Complexo Argos",
    title: "Informática Básica",
    duration: "76 h",
    year: "2016",
    href: null,
  },
  {
    issuer: "Complexo Argos",
    title: "Microsoft Office Intermediário",
    duration: "148 h",
    year: "2017",
    href: null,
  },
];

export const stackGroups = [
  {
    title: "MÍDIA PAGA",
    description: "Frente principal",
    tools: ["Google Ads", "Meta Ads", "YouTube Ads", "ChatGPT Ads"],
    level: "primary",
  },
  {
    title: "DADOS E MENSURAÇÃO",
    description: "Suporte estratégico",
    tools: ["Google Analytics 4", "Google Tag Manager", "Excel"],
    level: "secondary",
  },
  {
    title: "CRIAÇÃO E DESIGN",
    description: "Ferramentas complementares",
    tools: ["Figma", "Canva", "CapCut"],
    level: "complementary",
  },
  {
    title: "PLANEJAMENTO & GESTÃO",
    description: "Conhecimentos complementares",
    tools: ["ClickUp", "mLabs"],
    level: "complementary",
  },
  {
    title: "INTELIGÊNCIA ARTIFICIAL",
    description: "Ferramentas de apoio",
    tools: ["ChatGPT", "Claude", "Gemini"],
    level: "complementary",
  },
] as const;

export const process = [
  ["ENTENDER", "Objetivo, negócio e público."],
  ["ESTRUTURAR", "Campanhas, segmentações, palavras-chave e configurações."],
  ["MENSURAR", "Eventos, conversões e indicadores."],
  ["ANALISAR", "Comportamento da campanha e oportunidades."],
  ["OTIMIZAR", "Ajustes baseados no que os dados mostram."],
] as const;
