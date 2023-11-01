import { projects } from "@/data/projectData";
import Image from "next/image";
import { CustomLink } from "../CustomLink";
import Link from "next/link";

interface ProjectCardProps {
  project: (typeof projects)[0];
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-zinc-800/50 border border-zinc-800 rounded-lg overflow-hidden">
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
              <li
                key={stack}
                className="px-4 py-1 text-xs border border-zinc-700 text-zinc-400 rounded-md"
              >
                {stack}
              </li>
            );
          })}
        </ul>
        <p className="text-lg font-medium">{project.title}</p>
        <p className="text-zinc-400">{project.desc}</p>
        <div className="flex gap-4 mt-4">
          <CustomLink
            href={project.sourceCode}
            linkType="secondary"
            target="_blank"
          >
            Source Code
          </CustomLink>
          <CustomLink
            href={project.liveAt}
            linkType="secondary"
            target="_blank"
          >
            Live at
          </CustomLink>
        </div>
      </div>
    </div>
  );
}
