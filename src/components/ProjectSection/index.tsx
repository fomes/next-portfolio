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
          className="px-4 py-2 rounded-full bg-zinc-500 text-zinc-100 text-sm cursor-pointer border border-zinc-700 hover:bg-zinc-700 transition-all duration-300"
        >
          {info.projectSection.allProjectBtn}
        </Link>
      </div>
    </section>
  );
}
