"use client";

import { skills } from "@/data/userData";
import { Heading } from "../Heading";
import { infoBR, infoEN } from "@/data/userInfo";
import { useContext } from "react";
import { LangContext } from "@/context/LangContext";

export function SkillsSection() {
  const { langBR } = useContext(LangContext);
  let info = langBR ? infoBR : infoEN;

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
                      className="bg-zinc-400/50 border border-zinc-800 p-4 inline-flex items-center gap-4 justify-center rounded-md btn-tag"
                    >
                      <stack.icon className="text-xl text-zinc-100 shrink-0" />
                      <span className="select-none">{stack.name}</span>
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
