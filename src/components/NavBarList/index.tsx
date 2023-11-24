import Link from "next/link";
import { email } from "@/data/userData";
import { infoBR } from "@/data/userInfo";
import { CustomLink } from "../CustomLink";
import { TypeAnimation } from "react-type-animation";

interface NavBarListProps {
  info: typeof infoBR;
  animateNavList: boolean;
  isNavOpen: boolean;
  setIsNavOpen: (open: boolean) => void;
}

interface NavItemProps {
  title: string;
  href: string;
}

export function NavBarList({
  info,
  isNavOpen,
  setIsNavOpen,
  animateNavList,
}: NavBarListProps) {
  return (
    <>
      {info.navMenuList.map(({ title, href }: NavItemProps, index: number) => {
        const isLastElement = index === info.navMenuList.length - 1;
        return (
          <li key={href} className="select-none">
            <>
              {isLastElement ? (
                <Link
                  href={`mailto:${email.address}`}
                  className="btn-base btn-primary"
                >
                  {title}
                </Link>
              ) : (
                <CustomLink
                  href={href}
                  onClick={() => {
                    if (isNavOpen) {
                      setIsNavOpen(false);
                    }
                  }}
                  linkType={"link"}
                >
                  <p className="link-animate">{title}</p>
                </CustomLink>
              )}
            </>
          </li>
        );
      })}
    </>
  );
}
