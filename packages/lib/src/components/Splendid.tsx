import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';

import { MarkdownAttributes, Slides } from '..';
import { useSplendidContext } from '../contexts/SplendidContext';
import { useElementScale } from '../hooks/useElementScale';
import { loadPrism } from '../infra/prism/prism';
import globalTheme from '../styles/global.theme';
import { merge } from '../util/merge-object';

export interface SplendidProps {}
// eslint-disable-next-line no-redeclare
export default function Splendid() {
  const {
    chakraTheme,
    markdown,
    setChakraTheme,
    theme,
  } = useSplendidContext();

  const { attributes, } = markdown
  const globalAttributes = merge<MarkdownAttributes>(attributes, {
    syntaxHighlight: 'prism',
    syntaxHighlightEnabled: true,
    theme: 'classic',
  })

  const loadTheme = async() => {
    if (chakraTheme && Object.keys(chakraTheme).length === 0) {
      const themeTheme = await import(`../themes/${theme}/theme.ts`);
      const finalTheme = extendTheme(globalTheme, themeTheme.default);
      setChakraTheme(finalTheme);
    } else {
      setChakraTheme(globalTheme);
    }
  };
  useEffect(() => {
    loadTheme();
  }, []);

  const loadLibraries = () => {
    loadPrism()
  }

  const containerRef = useRef<HTMLElement>();
  const { scale, } = useElementScale(containerRef as React.MutableRefObject<HTMLElement>);

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
            <Slides markdown={markdown} theme={theme} onLoad={() => loadLibraries()}/>
          </Box>
        </Box>
      </ChakraProvider>
    </div>
  );
}
