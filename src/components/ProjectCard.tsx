import { Project } from "@/types/portfolio-data";
import { ProjectVisual } from "./ProjectVisual";
import { ProjectDetail } from "./ProjectDetail";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ArrowUpRight } from "lucide-react";

export function ProjectCard({ project, reverse }: { project: Project; reverse: boolean }) {
  return (
    <article className="reveal grid items-center gap-8 border-t border-border py-10 md:grid-cols-2 md:gap-14 md:py-14">
      <div className={reverse ? "md:order-2" : ""}>
        <ProjectVisual project={project} />
      </div>
      <div className={reverse ? "md:order-1" : ""}>
        <p className="section-label">
          {project.segment} · {project.platforms}
        </p>
        <h3 className="mt-4 font-display text-2xl font-semibold text-foreground sm:text-3xl">
          {project.name}
        </h3>
        <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-6 grid gap-5 border-l border-border pl-5 sm:grid-cols-2">
          <div>
            <p className="section-label">OBJETIVO</p>
            <p className="mt-2 text-xs leading-6 text-foreground/80">{project.objective}</p>
          </div>
          <div>
            <p className="section-label">ESTRATÉGIA</p>
            <p className="mt-2 text-xs leading-6 text-foreground/80">{project.strategy}</p>
          </div>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mt-7" variant="portfolioOutline" size="portfolio">
              VER MINHA ATUAÇÃO <ArrowUpRight />
            </Button>
          </DialogTrigger>
          <ProjectDetail project={project} />
        </Dialog>
      </div>
    </article>
  );
}
