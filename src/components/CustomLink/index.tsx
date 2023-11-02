import { cn } from "@/utils/helper";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface CustomLinkProps extends LinkProps {
  children?: ReactNode;
  className?: string;
  linkType?: "primary" | "secondary" | "link" | "none";
  target?: string;
}

const styled = {
  baseStyled: "px-4 py-2 rounded-full text-sm cursor-pointer",
  primary: "bg-zinc-100 hover:bg-zinc-300 text-zinc-900",
  secondary: "border border-zinc-700 hover:bg-zinc-700",
  link: "text-zinc-400 hover:text-zinc-50",
  none: "px-0",
};

export function CustomLink({
  children,
  linkType = "primary",
  className,
  target,
  ...props
}: CustomLinkProps) {
  return (
    <Link
      {...props}
      target={target}
      className={cn(
        className,
        styled[linkType],
        "transition-all duration-300",
        linkType !== "link" && styled.baseStyled
      )}
    >
      {children}
    </Link>
  );
}
