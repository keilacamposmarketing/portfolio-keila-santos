import { render, screen } from "@testing-library/react";
import { projects } from "@/lib/portfolio-data";
import * as NavbarModule from "../components/Navbar";
import * as SectionTitleModule from "../components/SectionTitle";
import * as HeroPhotoModule from "../components/HeroPhoto";
import * as FooterModule from "../components/Footer";
import * as CertificationCardModule from "../components/CertificationCard";
import * as ToolCardModule from "../components/ToolCard";
import * as ProjectCardModule from "../components/ProjectCard";
import * as EditableLinkModule from "../components/EditableLink";

import { PortfolioPage } from "./PortfolioPage";

describe("PortfolioPage (componente) - unit", () => {
  test("deve renderizar a navegação", () => {
    makeMocks();

    render(<PortfolioPage />);

    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  test("deve renderizar a apresentação principal", () => {
    makeMocks();

    render(<PortfolioPage />);

    expect(screen.getByText("TRÁFEGO PAGO & PERFORMANCE")).toBeInTheDocument();

    expect(screen.getByText("Estrategista e Análise de dados")).toBeInTheDocument();

    expect(
      screen.getByText(
        "Atuo na criação, acompanhamento e otimização de campanhas de mídia paga, conectando estratégia, dados e mensuração para tomar decisões mais assertivas.",
      ),
    ).toBeInTheDocument();
  });

  test("deve renderizar a foto principal", () => {
    makeMocks();

    render(<PortfolioPage />);

    expect(screen.getByTestId("hero-photo")).toBeInTheDocument();
  });

  test("deve renderizar a seção sobre", () => {
    makeMocks();

    render(<PortfolioPage />);

    expect(screen.getByTestId("section_sobre")).toBeInTheDocument();
  });

  test("deve renderizar a seção de experiência", () => {
    makeMocks();

    render(<PortfolioPage />);

    expect(screen.getByTestId("section_experiencia")).toBeInTheDocument();
  });

  test("deve renderizar a seção de projetos", () => {
    makeMocks();

    render(<PortfolioPage />);

    expect(screen.getByTestId("section_projetos")).toBeInTheDocument();
  });

  test("deve renderizar os projetos", () => {
    makeMocks();

    render(<PortfolioPage />);

    expect(screen.getAllByTestId("project-card")).toHaveLength(projects.length);
  });

  test("deve renderizar a seção de processo", () => {
    makeMocks();

    render(<PortfolioPage />);

    expect(screen.getByTestId("section_processo")).toBeInTheDocument();
  });

  test("deve renderizar a seção de stack", () => {
    makeMocks();

    render(<PortfolioPage />);

    expect(screen.getByTestId("section_stack")).toBeInTheDocument();
  });

  test("deve renderizar a seção de formação", () => {
    makeMocks();

    render(<PortfolioPage />);

    expect(screen.getByText("FORMAÇÃO")).toBeInTheDocument();
  });

  test("deve renderizar a seção de certificações", () => {
    makeMocks();

    render(<PortfolioPage />);

    expect(screen.getByText("CERTIFICAÇÕES")).toBeInTheDocument();
  });

  test("deve renderizar a seção de contato", () => {
    makeMocks();

    render(<PortfolioPage />);

    expect(screen.getByText("CONTATO")).toBeInTheDocument();
    expect(screen.getByText("Vamos conversar?")).toBeInTheDocument();
  });

  test("deve renderizar o footer", () => {
    makeMocks();

    render(<PortfolioPage />);

    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});

const makeMocks = () => {
  vi.spyOn(NavbarModule, "Navbar").mockReturnValue(<div data-testid="navbar" />);

  vi.spyOn(SectionTitleModule, "SectionTitle").mockReturnValue(<div data-testid="section-title" />);

  vi.spyOn(HeroPhotoModule, "HeroPhoto").mockReturnValue(<div data-testid="hero-photo" />);

  vi.spyOn(FooterModule, "Footer").mockReturnValue(<div data-testid="footer" />);

  vi.spyOn(CertificationCardModule, "CertificationCard").mockReturnValue(
    <div data-testid="certification-card" />,
  );

  vi.spyOn(ToolCardModule, "ToolCard").mockReturnValue(<div data-testid="tool-card" />);

  vi.spyOn(ProjectCardModule, "ProjectCard").mockReturnValue(<div data-testid="project-card" />);

  vi.spyOn(EditableLinkModule, "EditableLink").mockImplementation(({ children }) => (
    <div>{children}</div>
  ));
};
