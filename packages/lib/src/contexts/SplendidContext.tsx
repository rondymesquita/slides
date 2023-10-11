import React, { useContext, useState } from 'react';

import { Markdown } from '..';
import { PresentationSize } from '../domain/model/PresentationSize';

type SplendidContextProps = {
  theme: string,
  setTheme: React.Dispatch<React.SetStateAction<string>>,
  chakraTheme: Record<string, any>,
  setChakraTheme: React.Dispatch<React.SetStateAction<Record<string, any>>>,
  markdown: Markdown,
  setMarkdown: React.Dispatch<React.SetStateAction<Markdown>>,
  presentationSize: PresentationSize
  animationDuration: number
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
  const value: SplendidContextProps  = {
    theme,
    setTheme,
    chakraTheme,
    setChakraTheme,
    markdown,
    setMarkdown,
    presentationSize: {
      width: 980,
      height: 552,
    },
    animationDuration: 0.5,
  };
  return (
    <SplendidContext.Provider value={value}>
      {children}
    </SplendidContext.Provider>
  );
}
