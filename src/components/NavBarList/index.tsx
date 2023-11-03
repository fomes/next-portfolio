import Link from "next/link";
import { email } from "@/data/userData";
import { CustomLink } from "../CustomLink";

interface NavBarListProps {
  info: any;
  isNavOpen: boolean;
  setIsNavOpen: (open: boolean) => void;
}

interface NavItemProps {
  title: string;
  href: string;
}

export function NavBarList({ info, isNavOpen, setIsNavOpen }: NavBarListProps) {
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
                  className="bg-zinc-100 hover:bg-zinc-300 text-zinc-900 px-4 py-2 rounded-full text-sm cursor-pointer"
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
                  {title}
                </CustomLink>
              )}
            </>
          </li>
        );
      })}
    </>
  );
}
