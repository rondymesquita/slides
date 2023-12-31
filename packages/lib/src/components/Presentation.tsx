import React, { useEffect, useRef } from 'react';
import { Box, ChakraProvider, Container, extendTheme } from '@chakra-ui/react';
import { ThemeProvider, useThemeContext } from '../contexts/ThemeContext';
import { usePresentationContext } from '../contexts/PresentationContext';
import { Slides } from '..';
import { merge } from '../util/merge-object';
import globalTheme from '../styles/global.theme';
import { useWindowSize } from '../hooks/useWindowSize';
import { useElementScale, useWindowScale } from '../hooks/useElementScale';
import { useElementSize } from '../hooks/useElementSize';
import { HashRouter } from 'react-router-dom';

export interface PresentationProps {}
// eslint-disable-next-line no-redeclare
export default function Presentation() {
  const { chakraTheme, setChakraTheme, slides, theme } =
    usePresentationContext();

  const loadTheme = async () => {
    if (Object.keys(chakraTheme).length === 0) {
      const themeTheme = await import(`../themes/${theme}/theme.ts`);
      // const finalTheme = merge(globalTheme, t && t.default ? t.default : {});
      const finalTheme = extendTheme(globalTheme, themeTheme.default);
      // console.log(globalTheme);
      setChakraTheme(finalTheme);
      // setChakraTheme(t.default);
    }
  };
  useEffect(() => {
    loadTheme();
  }, []);

  const containerRef = useRef<HTMLElement>();
  const { scale } = useElementScale(containerRef);

  return (
    <div className='presentation'>
      <ChakraProvider theme={chakraTheme}>
        <Box position={'relative'} width='100vw' height='100vh'>
          <Box
            width='980px'
            height='552px'
            ref={containerRef}
            position={'absolute'}
            left={'50%'}
            top={'50%'}
            sx={{
              transform: `scale(${scale}) translate(-50%, -50%)`,
              transformOrigin: 'top left',
            }}
          >
            {/* <HashRouter basename={'/'}> */}
            <Slides slides={slides} theme={theme} />
            {/* </HashRouter> */}
          </Box>
        </Box>
      </ChakraProvider>
    </div>
  );
}
