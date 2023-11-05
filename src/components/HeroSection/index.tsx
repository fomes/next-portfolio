"use client";

import Image from "next/image";
import { useContext } from "react";
import { CustomLink } from "../CustomLink";
import { infoBR, infoEN } from "@/data/userInfo";
import { LangContext } from "@/context/LangContext";
import { TypeAnimation } from "react-type-animation";

export function HeroSection() {
  const { langBR } = useContext(LangContext);

  let info = langBR ? infoBR : infoEN;

  return (
    <section
      id="home"
      className="grid md:grid-cols-2 items-center h-[calc(100vh-70px)] max-h-[678px]"
    >
      <div>
        <p className="text-2xl mb-1">
          <TypeAnimation
            repeat={1}
            speed={50}
            wrapper="span"
            sequence={[`${info.hero.name}`, 500]}
          />
        </p>
        <h1 className="font-title tracking-wider text-3xl sm:text-6xl -ml-0.5">
          {info.hero.title}
        </h1>
        <p className="text-zinc-900 dark:text-zinc-300 mt-2 text-justify">
          {info.hero.desc}
        </p>

        <CustomLink
          href={"projects"}
          linkType="primary"
          className="absolute mt-4"
        >
          {info.hero.btn}
        </CustomLink>
      </div>

      <div className="hidden md:flex w-[500px] h-[500px] relative overflow-hidden">
        <Image
          priority
          width={500}
          height={500}
          alt="Profile Image"
          src={"/assets/hero.png"}
          className="object-cover object-top w-full h-full self-end rounded-full"
        />
        <div className="absolute bottom-0 w-full h1/2 bg-gradient-to-t from-zinc-900 to to-transparent"></div>
      </div>
    </section>
  );
}
