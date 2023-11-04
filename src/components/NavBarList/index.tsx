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
          <li key={href}>
            <>
              {isLastElement ? (
                <Link
                  href={`mailto:${email.address}`}
                  className="bg-zinc-100 hover:bg-zinc-300 text-zinc-900 px-4 py-2 rounded-full text-sm transition-all duration-300 cursor-pointer"
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
                  {animateNavList ? (
                    <TypeAnimation
                      repeat={1}
                      speed={50}
                      wrapper="span"
                      cursor={false}
                      sequence={[`${title}`, 500]}
                    />
                  ) : (
                    title
                  )}
                </CustomLink>
              )}
            </>
          </li>
        );
      })}
    </>
  );
}
