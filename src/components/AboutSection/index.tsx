"use client";

import { Heading } from "../Heading";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/data/userData";
import { infoBR, infoEN } from "@/data/userInfo";
import { useContext } from "react";
import { LangContext } from "@/context/LangContext";

export function AboutSection() {
  const { langBR } = useContext(LangContext);
  let info = langBR ? infoBR : infoEN;

  return (
    <section id="about" className="mb-44">
      <Heading title={info.about.title} desc={""} />

      <div className="flex gap-4 flex-col md:flex-row items-center">
        <div className="h-80 w-80 shrink-0 rounded-full overflow-hidden">
          <Image
            src={"/assets/profile.jpg"}
            alt="Person"
            width={600}
            height={800}
            className="w-full h-full object-center object-cover"
          />
        </div>

        <div className="space-y-2 flex flex-col gap-4">
          <p>{info.about.greeting}</p>
          <p className="text-zinc-600 text-justify">{info.about.desc}</p>

          <ul className="flex gap-12 mt-4">
            {socialLinks.map((link, index) => {
              return (
                <li key={index}>
                  <Link
                    href={link.href}
                    target="_blank"
                    className="w-9 h-9 absolute z-10 rounded-full border border-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-700 flex justify-center items-center f-hover"
                  >
                    <link.icon className="text-xl shrink-0" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
