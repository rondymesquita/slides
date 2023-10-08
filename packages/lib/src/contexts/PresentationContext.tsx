import React, { useContext, useState } from 'react';

type PresentationContextProps = {
  isOpen: boolean;
};

const PresentationContext = React.createContext<any>(
  {} as PresentationContextProps
);

export const usePresentationContext = () => useContext(PresentationContext);

export function PresentationProvider({
  children,
  theme: inputTheme = 'classic',
  chakraTheme: inputChakraTheme = {},
  slides: inputSlides,
}: any) {
  const [theme, setTheme] = useState(inputTheme);
  const [chakraTheme, setChakraTheme] = useState(inputChakraTheme);
  const [slides, setSlides] = useState(inputSlides);
  const value = {
    theme,
    setTheme,
    chakraTheme,
    setChakraTheme,
    slides,
    setSlides,
  };
  return (
    <PresentationContext.Provider value={value}>
      {children}
    </PresentationContext.Provider>
  );
}
