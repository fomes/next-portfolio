"use client";

import { ProjectCard } from "../ProjectCard";
import { CustomLink } from "../CustomLink";
import { Heading } from "../Heading";
import { infoEN, infoBR } from "@/data/userInfo";

export function ProjectSection() {
  let info = infoBR;

  return (
    <section id="projects">
      <Heading title={info.projectSection.title} desc="" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {info.projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
      <div className="mt-6 flex justify-center">
        <CustomLink
          href={"https://github.com/fomes"}
          linkType="secondary"
          target="_blank"
        >
          {info.projectSection.allProjectBtn}
        </CustomLink>
      </div>
    </section>
  );
}
