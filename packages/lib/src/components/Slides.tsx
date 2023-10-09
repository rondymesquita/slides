import { Flex } from '@chakra-ui/react';
import React, { Suspense } from 'react';
import { HashRouter, Routes } from 'react-router-dom';

import { Markdown } from '../domain/model/Markdown';
import SlideNavigator from './SlideNavigator';
import slidesViewModel from './Slides.ViewModel';

export interface SlidesProps {
  markdown: Markdown;
  theme: string;
  onLoad?: () => void
}

export default function Slides({
  markdown,
  onLoad = () => {},
  theme,
}: SlidesProps) {
  const { isLoaded, slides, } = slidesViewModel(markdown, theme, onLoad)


  return (
    <>
      <Flex className='slides' width={'100%'} height={'100%'}>
        <Suspense fallback={<div>loading...</div>}>
          <HashRouter>
            {isLoaded && (
              <>
                <SlideNavigator size={slides.length} />
                <Routes>{slides}</Routes>
              </>
            )}
          </HashRouter>
        </Suspense>
      </Flex>
    </>
  );
}
