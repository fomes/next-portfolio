"use client";

import { skills } from "@/data/userData";
import { Heading } from "../Heading";
import { infoBR } from "@/data/userInfo";

export function SkillsSection() {
  let info = infoBR;

  return (
    <section id="skills">
      <Heading title={info.skills.title} desc="" />

      <div className="space-y-6">
        {Object.values(skills).map((skill) => {
          return (
            <div key={skill.title}>
              <p className="mb-2">{skill.title}</p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg lg:grid-cols-6 gap-6">
                {skill.stacks.map((stack, index) => {
                  return (
                    <li
                      key={index}
                      className="bg-zinc-800/50 border border-zinc-800 p-4 inline-flex items-center gap-4 justify-center rounded-md hover:opacity-80 transition-all duration-300"
                    >
                      <stack.icon className="text-xl shrink-0" />
                      <span>{stack.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
