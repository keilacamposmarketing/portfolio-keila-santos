import { render, screen } from "@testing-library/react";

import saudeClinicaPhoto from "../assets/projects-clinica-saude.jpeg";

import { ProjectVisual } from "./ProjectVisual";

describe("ProjectVisual (componente) - unit", () => {
  test("deve renderizar imagem do projeto", () => {
    const { projectExample } = makeMocks();
    render(<ProjectVisual project={projectExample} />);
    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument();
  });

  test("deve renderizar nome do projeto", () => {
    const { projectExample } = makeMocks();
    render(<ProjectVisual project={projectExample}></ProjectVisual>);
    const spanElementId = screen.getByTestId("project name");
    expect(spanElementId).toHaveTextContent("CLÍNICA ORTOPEDIA");
  });
});

const makeMocks = () => {
  const projectExample = {
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
  };

  return { projectExample };
};
