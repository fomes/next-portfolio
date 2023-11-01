import { projects } from "@/data/projectData";
import { ProjectCard } from "../ProjectCard";
import { CustomLink } from "../CustomLink";
import { Heading } from "../Heading";

export function ProjectSection() {
  return (
    <section>
      <Heading title="Project" desc="My best project i have build" />

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
