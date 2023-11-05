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
  baseStyled: "btn-base",
  primary: "btn-base btn-primary",
  secondary: "btn-base btn-secondary",
  link: "f-link",
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
      className={cn(className, styled[linkType])}
    >
      {children}
    </Link>
  );
}
