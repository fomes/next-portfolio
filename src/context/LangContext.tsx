"use client";

import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface LangContextProps {
  langBR: boolean;
  setLangBR: Dispatch<SetStateAction<boolean>>;
}

const defaultState = {
  langBR: true,
  setLangBR: () => {},
};

export const LangContext = createContext<LangContextProps>(defaultState);

export default function LangProvider({ children }: PropsWithChildren) {
  const [langBR, setLangBR] = useState(defaultState.langBR);

  const contextValue = {
    langBR,
    setLangBR,
  };

  return (
    <LangContext.Provider value={contextValue}>{children}</LangContext.Provider>
  );
}
