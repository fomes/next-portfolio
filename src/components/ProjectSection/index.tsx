"use client";

import { ProjectCard } from "../ProjectCard";
import { Heading } from "../Heading";
import { infoEN, infoBR } from "@/data/userInfo";
import { useContext } from "react";
import { LangContext } from "@/context/LangContext";
import Link from "next/link";

export function ProjectSection() {
  const { langBR } = useContext(LangContext);
  let info = langBR ? infoBR : infoEN;

  return (
    <section id="projects">
      <Heading title={info.projectSection.title} desc="" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {info.projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
      <div className="mt-6 flex justify-center">
        <Link
          target="_blank"
          href={"https://github.com/fomes"}
          className="btn-base btn-primary"
        >
          {info.projectSection.allProjectBtn}
        </Link>
      </div>
    </section>
  );
}
