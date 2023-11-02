"use client";

import { LangContext } from "@/context/LangContext";
import { infoBR, infoEN } from "@/data/userInfo";
import { useContext } from "react";

export function FooterSection() {
  const { langBR } = useContext(LangContext);
  let info = langBR ? infoBR : infoEN;

  return (
    <footer className="w-full mt-28 px-4 py-4 md:px-8 border-t border-t-zinc-700">
      <div className="max-w-7xl mx-auto flex justify-between">
        <p className="text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()}
        </p>

        <p className="text-zinc-500 text-sm">{info.footer.note}</p>
      </div>
    </footer>
  );
}
