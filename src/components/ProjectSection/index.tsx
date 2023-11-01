import { projects } from "@/data/projectData";
import { ProjectCard } from "../ProjectCard";
import { CustomLink } from "../CustomLink";

export function ProjectSection() {
  return (
    <section>
      <p className="font-title tracking-wider text-4xl uppercase mt-6">
        Project
      </p>
      <p className="text-zinc-400 mb-6">My best project i have build</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
      <div className="mt-6 flex justify-center">
        <CustomLink
          href={"https://github.com/fomes"}
          linkType="secondary"
          target="_blank"
        >
          See all projects
        </CustomLink>
      </div>
    </section>
  );
}
