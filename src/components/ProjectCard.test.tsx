import { ProjectCard } from "./ProjectCard";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as ProjectVisualModule from "./ProjectVisual";
import * as ProjectDetailModule from "./ProjectDetail";

describe("ProjectCard (componente) - unit", () => {
  test("deve renderizar o visual do projeto", () => {
    const { projectExample } = makeMocks();

    vi.spyOn(ProjectVisualModule, "ProjectVisual").mockReturnValue(
      <div data-testid="project-visual" />,
    );

    render(<ProjectCard project={projectExample} reverse={false} />);

    expect(screen.getByTestId("project-visual")).toBeInTheDocument();
  });

  test("deve renderizar o segmento e as plataformas do projeto", () => {
    const { projectExample } = makeMocks();

    render(<ProjectCard project={projectExample} reverse={false} />);

    expect(
      screen.getByText(`${projectExample.segment} · ${projectExample.platforms}`),
    ).toBeInTheDocument();
  });

  test("deve renderizar o nome do projeto", () => {
    const { projectExample } = makeMocks();

    render(<ProjectCard project={projectExample} reverse={false} />);

    expect(screen.getByText(projectExample.name)).toBeInTheDocument();
  });

  test("deve renderizar a descrição do projeto", () => {
    const { projectExample } = makeMocks();

    render(<ProjectCard project={projectExample} reverse={false} />);

    expect(screen.getByText(projectExample.description)).toBeInTheDocument();
  });

  test("deve renderizar o objetivo do projeto", () => {
    const { projectExample } = makeMocks();

    render(<ProjectCard project={projectExample} reverse={false} />);

    expect(screen.getByText("OBJETIVO")).toBeInTheDocument();
    expect(screen.getByText(projectExample.objective)).toBeInTheDocument();
  });

  test("deve renderizar a estratégia do projeto", () => {
    const { projectExample } = makeMocks();

    render(<ProjectCard project={projectExample} reverse={false} />);

    expect(screen.getByText("ESTRATÉGIA")).toBeInTheDocument();
    expect(screen.getByText(projectExample.strategy)).toBeInTheDocument();
  });

  test("deve renderizar o botão para visualizar a atuação", () => {
    const { projectExample } = makeMocks();

    render(<ProjectCard project={projectExample} reverse={false} />);

    expect(screen.getByRole("button", { name: /VER MINHA ATUAÇÃO/i })).toBeInTheDocument();
  });

  test("deve abrir os detalhes do projeto ao clicar no botão", async () => {
    const { projectExample } = makeMocks();
    const user = userEvent.setup();

    vi.spyOn(ProjectDetailModule, "ProjectDetail").mockReturnValue(
      <div data-testid="project-detail" />,
    );

    render(<ProjectCard project={projectExample} reverse={false} />);
    await user.click(screen.getByRole("button", { name: /VER MINHA ATUAÇÃO/i }));
    expect(screen.getByTestId("project-detail")).toBeInTheDocument();
  });
});

const makeMocks = () => {
  const projectExample = {
    number: "01",
    name: "CLÍNICA ORTOPEDIA",
    segment: "Saúde",
    platforms: "Google Ads + Meta Ads",
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
      "Estruturação das campanhas a partir da intenção de busca, localização e perfil do público, com acompanhamento das conversões para identificar oportunidades de otimização.",
    metrics: ["CTR", "CPC", "Conversões", "Custo por conversão", "Termos de pesquisa"],
  };

  return { projectExample };
};
