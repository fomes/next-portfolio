"use client";

import { cn } from "@/utils/helper";
import { FiMenu } from "react-icons/fi";
import { NavBarList } from "../NavBarList";
import { LuLanguages } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";
import { infoBR, infoEN } from "@/data/userInfo";
import { LangContext } from "@/context/LangContext";
import { useContext, useEffect, useState } from "react";
import { RiTerminalBoxLine, RiEnglishInput } from "react-icons/ri";

export function NavBar() {
  const { langBR, setLangBR } = useContext(LangContext);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  let info = langBR ? infoBR : infoEN;

  useEffect(() => {
    const overflowvalue = isNavOpen ? "hidden" : "auto";
    document.body.style.overflow = overflowvalue;
  }, [isNavOpen]);

  const handleToggleLanguage = () => {
    setLangBR((prevState) => !prevState);
  };

  return (
    <nav className="sticky py-4 border-b border-zinc-800 shadow-md top-0 z-10 bg-zinc-900/20 backdrop-blur-md">
      <div className="container max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex gap-4">
          <RiTerminalBoxLine
            size={25}
            className="hover:scale-110 transition-all duration-300 cursor-pointer"
          />

          <div onClick={handleToggleLanguage}>
            {langBR ? (
              <RiEnglishInput
                size={25}
                className="hover:scale-110 transition-all duration-300 cursor-pointer"
              />
            ) : (
              <LuLanguages
                size={25}
                className="hover:scale-110 transition-all duration-300 cursor-pointer"
              />
            )}
          </div>
        </div>

        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsNavOpen((prevState) => !prevState)}
        >
          {isNavOpen ? (
            <AiOutlineClose className="text-2xl" />
          ) : (
            <FiMenu className="text-2xl" />
          )}
        </div>
        <div
          className={cn(
            "max-md:fixed max-md:top-[58px] max-md:py-10 max-md:left-0 max-md:w-full max-md:min-h-screen max-md:bg-zinc-900/90 max-md:backdrop-blur-lg",
            !isNavOpen && "max-md:hidden"
          )}
        >
          <ul className="flex items-center gap-6 flex-col md:flex-row">
            <NavBarList
              info={info}
              isNavOpen={isNavOpen}
              setIsNavOpen={setIsNavOpen}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}