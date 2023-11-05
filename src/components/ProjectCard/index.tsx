"use client";

import Image from "next/image";
import { CustomLink } from "../CustomLink";
import Link from "next/link";
import { infoEN, infoBR } from "@/data/userInfo";
import { useContext } from "react";
import { LangContext } from "@/context/LangContext";

interface ProjectCardProps {
  project: (typeof infoEN.projects)[0];
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { langBR } = useContext(LangContext);
  let info = langBR ? infoBR : infoEN;

  return (
    <div className="relative h-[500px] bg-zinc-800/50 border border-zinc-800 rounded-lg overflow-hidden">
      <div className="w-full h-[300px] bg-zinc-300">
        <Link href={project.liveAt} target="_blank">
          <Image
            src={project.image}
            alt={project.title}
            height={800}
            width={800}
            className="w-full h-full object-center hover:opacity-80 transition-all duration-300"
          />
        </Link>
      </div>

      <div className="p-4">
        <ul className="flex gap-3 mb-2 w-full">
          {project.stacks.map((stack) => {
            return (
              <li key={stack} className="px-4 py-1 text-xs btn-tag">
                {stack}
              </li>
            );
          })}
        </ul>
        <p className="text-lg font-medium">{project.title}</p>
        <p className="text-zinc-700 dark:text-zinc-500">{project.desc}</p>

        <div className="flex gap-4 absolute bottom-2 left-2">
          <CustomLink
            href={project.sourceCode}
            linkType="secondary"
            target="_blank"
          >
            {info.projectSection.btnSource}
          </CustomLink>
          <CustomLink
            href={project.liveAt}
            linkType="secondary"
            target="_blank"
          >
            {info.projectSection.btnDemo}
          </CustomLink>
        </div>
      </div>
    </div>
  );
}
