import React, { useContext, useState } from 'react';

import { Markdown } from '..';

type SetupContextProps = {
  theme: string,
  setTheme: React.Dispatch<React.SetStateAction<string>>,
  chakraTheme: Record<string, any>,
  setChakraTheme: React.Dispatch<React.SetStateAction<Record<string, any>>>,
  markdown: Markdown,
  setMarkdown: React.Dispatch<React.SetStateAction<Markdown>>,
};

const SetupContext = React.createContext<SetupContextProps>({} as SetupContextProps);

export const useSetupContext = () => useContext<SetupContextProps>(SetupContext);

export function SetupProvider({
  chakraTheme: inputChakraTheme = {},
  children,
  markdown: inputMarkdown,
  // theme: inputTheme = 'classic',
}: any) {
  // const [theme, setTheme,] = useState<string>(inputTheme);
  const [chakraTheme, setChakraTheme,] = useState<Record<string, any>>(inputChakraTheme);
  const [markdown, setMarkdown,] = useState<Markdown>(inputMarkdown);

  const value: SetupContextProps  = {
    // theme,
    // setTheme,
    chakraTheme,
    setChakraTheme,
    markdown,
    setMarkdown,
  };
  return (
    <SetupContext.Provider value={value}>
      {children}
    </SetupContext.Provider>
  );
}
