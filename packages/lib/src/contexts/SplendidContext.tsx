import React, { useContext, useState } from 'react';

type SplendidContextProps = {
  isOpen: boolean;
};

const SplendidContext = React.createContext<any>({} as SplendidContextProps);

export const useSplendidContext = () => useContext(SplendidContext);

export function SplendidProvider({
  chakraTheme: inputChakraTheme = {},
  children,
  slides: inputSlides,
  theme: inputTheme = 'classic',
}: any) {
  const [theme, setTheme,] = useState(inputTheme);
  const [chakraTheme, setChakraTheme,] = useState(inputChakraTheme);
  const [slides, setSlides,] = useState(inputSlides);
  const value = {
    theme,
    setTheme,
    chakraTheme,
    setChakraTheme,
    slides,
    setSlides,
  };
  return (
    <SplendidContext.Provider value={value}>
      {children}
    </SplendidContext.Provider>
  );
}
