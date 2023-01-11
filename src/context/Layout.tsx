import Head from "next/head";
import React, { createContext, ReactNode, useContext, useState } from "react";
import Aside from "../components/Aside";

interface ILayoutContext {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  setWithAside: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

const LayoutContext = createContext({} as ILayoutContext);

export const useLayoutContext = () => useContext(LayoutContext);

const LayoutProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [withAside, setWithAside] = useState<boolean>(false);
  const [title, setTitle] = useState("Orma Carbon Spotify");

  return (
    <LayoutContext.Provider
      value={{ theme, setTheme, setWithAside, title, setTitle }}
    >
      <Head>
        <title>{title}</title>
      </Head>
      {withAside && <Aside />}
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;
