"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { LangContext } from "@/context/LangContext";
import { infoEN, infoBR } from "@/data/userInfo";
import { FaGithub } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";

interface ProjectCardProps {
  project: (typeof infoEN.projects)[0];
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { langBR } = useContext(LangContext);
  let info = langBR ? infoBR : infoEN;

  return (
    <div className="relative h-[500px] dark:bg-zinc-800/50 border border-zinc-800 rounded-lg overflow-hidden">
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
              <li key={stack} className="px-4 py-1 text-xs btn-stack">
                {stack}
              </li>
            );
          })}
        </ul>
        <p className="text-lg font-medium">{project.title}</p>
        <p className="text-zinc-700 dark:text-zinc-500">{project.desc}</p>

        <div className="flex gap-4 absolute bottom-2 left-2">
          <Link
            target="_blank"
            href={project.sourceCode}
            className="btn-base f-hover"
          >
            <FaGithub size={25} />
          </Link>
          <Link
            target="_blank"
            href={project.liveAt}
            className="btn-base f-hover"
          >
            <MdOpenInNew size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
}
