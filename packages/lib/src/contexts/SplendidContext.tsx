import React, { useContext, useState } from 'react';

import { Markdown } from '..';

type SplendidContextProps = {
  theme: string,
  setTheme: React.Dispatch<React.SetStateAction<string>>,
  chakraTheme: Record<string, any>,
  setChakraTheme: React.Dispatch<React.SetStateAction<Record<string, any>>>,
  markdown: Markdown,
  setMarkdown: React.Dispatch<React.SetStateAction<Markdown>>,
};

const SplendidContext = React.createContext<SplendidContextProps>({} as SplendidContextProps);

export const useSplendidContext = () => useContext<SplendidContextProps>(SplendidContext);

export function SplendidProvider({
  chakraTheme: inputChakraTheme = {},
  children,
  markdown: inputMarkdown,
  theme: inputTheme = 'classic',
}: any) {
  const [theme, setTheme,] = useState<string>(inputTheme);
  const [chakraTheme, setChakraTheme,] = useState<Record<string, any>>(inputChakraTheme);
  const [markdown, setMarkdown,] = useState<Markdown>(inputMarkdown);
  const value = {
    theme,
    setTheme,
    chakraTheme,
    setChakraTheme,
    markdown,
    setMarkdown,
  };
  return (
    <SplendidContext.Provider value={value}>
      {children}
    </SplendidContext.Provider>
  );
}
