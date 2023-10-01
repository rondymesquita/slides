import React, { useEffect } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { ThemeProvider, useThemeContext } from '../contexts/ThemeContext';
import { usePresentationContext } from '../contexts/PresentationContext';
import { Slides } from '..';

export interface PresentationProps {
  // children: React.ReactElement;
  // theme: string;
  // chakraTheme?: ReturnType<typeof extendTheme>;
  // slides: {
  //   html: string;
  //   attributes: object;
  // };
}
// eslint-disable-next-line no-redeclare
export default function Presentation() {
  //setup chakra theme
  //setup presentatiton theme
  //inject contexts

  const { chakraTheme, setChakraTheme, slides, theme } =
    usePresentationContext();

  const loadTheme = async () => {
    if (Object.keys(chakraTheme).length === 0) {
      const t = await import(`../themes/${theme}/theme.ts`);
      t && t.default && setChakraTheme(t.default);
    }
  };
  useEffect(() => {
    loadTheme();
  }, []);

  return (
    <div className='presentation'>
      <ChakraProvider theme={chakraTheme}>
        <Slides slides={slides} theme={theme} />
      </ChakraProvider>
    </div>
  );
}
