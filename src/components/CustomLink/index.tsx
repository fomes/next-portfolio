import { cn } from "@/utils/helper";
import { Link } from "react-scroll";
import { ComponentProps, ReactNode } from "react";

interface CustomLinkProps extends ComponentProps<any> {
  linkType?: "primary" | "secondary" | "link" | "none";
  children?: ReactNode;
  className?: string;
  target?: string;
  href: string;
}

const styled = {
  baseStyled: "px-4 py-2 rounded-full text-sm cursor-pointer bg-zinc-500 text-zinc-100",
  primary: "bg-zinc-100 hover:bg-zinc-600 text-zinc-900",
  secondary: "border border-zinc-700 hover:bg-zinc-700",
  link: "text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-50 hover:text-zinc-50 cursor-pointer",
  none: "px-0",
};

export function CustomLink({
  href,
  target,
  children,
  className,
  linkType = "primary",
  ...props
}: CustomLinkProps) {
  return (
    <Link
      spy
      smooth
      to={href}
      {...props}
      offset={-70}
      duration={500}
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
