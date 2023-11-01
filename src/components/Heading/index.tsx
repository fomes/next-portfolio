import { ReactNode } from "react";

interface HeadingProps {
  title: string;
  desc: string;
}

export function Heading({ title, desc }: HeadingProps) {
  return (
    <>
      {" "}
      <p className="font-title tracking-wider text-4xl uppercase">{title}</p>
      <p className="text-zinc-400 mb-16">{desc}</p>
    </>
  );
}
