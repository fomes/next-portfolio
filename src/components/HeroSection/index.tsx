import { ReactNode } from "react";
import { CustomLink } from "../CustomLink";
import Image from "next/image";

interface HeroSectionProps {
  children?: ReactNode;
}

export function HeroSection({ children }: HeroSectionProps) {
  return (
    <section className="grid md:grid-cols-2 items-center h-[calc(100vh-70px)] max-h-[678px]">
      <div>
        <p className="text-lg mb-1">Hello World, I am</p>
        <h1 className="font-title tracking-wider text-3xl sm:text-6xl -ml-0.5">
          Full Stack Developer
        </h1>
        <p className="text-zinc-300 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          expedita, magni inventore modi qui enim ducimus assumenda, nostrum et
          autem similique nobis eum, saepe id ab sed! Itaque, officia nulla?
        </p>

        <CustomLink href={"projects"} className="mt4">
          My Work
        </CustomLink>
      </div>

      <div className="hidden md:flex w-full h-full relative overflow-hidden">
        <Image
          src={"/assets/hero.png"}
          alt="Profile Image"
          width={600}
          height={600}
          className="object-cover object-top w-full h-full self-end rounded-full"
        />
        <div className="absolute bottom-0 w-full h1/2 bg-gradient-to-t from-zinc-900 to to-transparent"></div>
      </div>
    </section>
  );
}
