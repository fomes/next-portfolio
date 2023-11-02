"use client";

import { infoBR, infoEN } from "@/data/userInfo";
import { CustomLink } from "../CustomLink";
import Image from "next/image";

export function HeroSection() {
  let info = infoBR;

  return (
    <section
      id="home"
      className="grid md:grid-cols-2 items-center h-[calc(100vh-70px)] max-h-[678px]"
    >
      <div>
        <p className="text-lg mb-1">{info.hero.name}</p>
        <h1 className="font-title tracking-wider text-3xl sm:text-6xl -ml-0.5">
          {info.hero.title}
        </h1>
        <p className="text-zinc-300 mt-2 text-justify">{info.hero.desc}</p>

        <CustomLink href={"projects"} className="absolute mt-4">
          {info.hero.btn}
        </CustomLink>
      </div>

      <div className="hidden md:flex w-[500px] h-[500px] relative overflow-hidden">
        <Image
          src={"/assets/hero.png"}
          alt="Profile Image"
          width={500}
          height={500}
          className="object-cover object-top w-full h-full self-end rounded-full"
        />
        <div className="absolute bottom-0 w-full h1/2 bg-gradient-to-t from-zinc-900 to to-transparent"></div>
      </div>
    </section>
  );
}
