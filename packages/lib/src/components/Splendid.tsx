import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';

import { Slides } from '..';
import { useSetupContext } from '../contexts/SetupContext';
import { useSplendidContext } from '../contexts/SplendidContext';
import { useElementScale } from '../hooks/useElementScale';
import { loadPrism } from '../infra/prism/prism';
import globalTheme from '../styles/global.theme';

export interface SplendidProps {}
// eslint-disable-next-line no-redeclare
export default function Splendid() {
  const {
    chakraTheme,
    markdown,
    setChakraTheme,
  } = useSetupContext();

  const { presentationSize, theme, } = useSplendidContext()
  const [ isLoaded, setIsLoaded, ] = useState(false)

  const loadTheme = async() => {
    const themes = [globalTheme,]

    const themeTheme = await import(`../themes/${theme}/theme.ts`);
    if (themeTheme && themeTheme.default) {
      themes.push(themeTheme.default)
    }

    if (chakraTheme && Object.keys(chakraTheme).length === 0) {
      themes.push(chakraTheme)
    }

    const finalTheme = extendTheme(...themes)
    setChakraTheme(finalTheme);
  };
  useEffect(() => {
    loadTheme();
  }, []);

  const loadLibraries = () => {
    loadPrism()
  }

  const containerRef = useRef<HTMLElement>();
  const { scale, } = useElementScale(containerRef as React.MutableRefObject<HTMLElement>);

  const onSlidesLoad = () => {
    loadLibraries()
    setIsLoaded(true)
  }

  return (
    <div className='splendid'>
      <ChakraProvider theme={chakraTheme}>
        <Box className='presentation' position={'relative'} width='100vw' height='100vh' sx={{ opacity: isLoaded ? 1 : 0, }}>
          <Box
            width={presentationSize.width}
            height={presentationSize.height}
            ref={containerRef}
            position={'absolute'}
            left={'50%'}
            top={'50%'}
            sx={{
              transform: `scale(${scale}) translate(-50%, -50%)`,
              transformOrigin: 'top left',
            }}
          >
            <Slides markdown={markdown} theme={theme} onLoad={onSlidesLoad}/>
          </Box>
        </Box>
      </ChakraProvider>
    </div>
  );
}
