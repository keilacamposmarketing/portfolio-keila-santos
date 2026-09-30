import { Project } from "@/types/portfolio-data";

export function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className="project-visual group relative aspect-[912/353] overflow-hidden rounded-[3px] border border-border bg-card shadow-[var(--shadow-card)]">
      <img
        src={project.image}
        alt={`Imagem do projeto ${project.name}`}
        loading="lazy"
        className="h-full w-full object-cover opacity-45 transition duration-500 group-hover:scale-[1.018] group-hover:opacity-58"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,var(--background)_100%)] opacity-75" />

      <span
        data-testid="project name"
        className="absolute bottom-4 left-4 border border-border bg-background/75 px-2.5 py-1.5 font-mono text-[9px] tracking-[0.1em] text-muted-foreground backdrop-blur-sm"
      >
        {project.name}
      </span>
    </div>
  );
}
