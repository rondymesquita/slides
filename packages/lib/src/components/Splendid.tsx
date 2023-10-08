import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';

import { Slides } from '..';
import { useSplendidContext } from '../contexts/SplendidContext';
import { useElementScale } from '../hooks/useElementScale';
import globalTheme from '../styles/global.theme';

export interface SplendidProps {}
// eslint-disable-next-line no-redeclare
export default function Splendid() {
  const {
    chakraTheme,
    setChakraTheme,
    slides,
    theme,
  } = useSplendidContext();

  const loadTheme = async() => {
    if (Object.keys(chakraTheme).length === 0) {
      const themeTheme = await import(`../themes/${theme}/theme.ts`);
      const finalTheme = extendTheme(globalTheme, themeTheme.default);
      setChakraTheme(finalTheme);
    }
  };
  useEffect(() => {
    loadTheme();
  }, []);

  const containerRef = useRef<HTMLElement>();
  const { scale, } = useElementScale(containerRef);

  return (
    <div className='splendid'>
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
            <Slides slides={slides} theme={theme} />
          </Box>
        </Box>
      </ChakraProvider>
    </div>
  );
}
