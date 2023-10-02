import React, { useEffect } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { ThemeProvider, useThemeContext } from '../contexts/ThemeContext';
import { usePresentationContext } from '../contexts/PresentationContext';
import { Slides } from '..';
import { merge } from '../util/merge-object';
import globalTheme from '../styles/global.theme';

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
      // const finalTheme = merge(globalTheme, t && t.default ? t.default : {});
      const finalTheme = extendTheme(globalTheme, t.default);
      // console.log(globalTheme);
      setChakraTheme(finalTheme);
      // setChakraTheme(t.default);
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
