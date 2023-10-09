import { Flex } from '@chakra-ui/react';
import React, { Suspense } from 'react';

import { Slide } from '..';
import { Markdown } from '../domain/model/Markdown';
import { SlideModel } from '../domain/model/SlideModel';
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
  const {
    activeSlideIndex,
    isLoaded,
    slides,
  } = slidesViewModel(markdown, theme, onLoad)


  return (
    <>
      <Flex className='slides' width={'100%'} height={'100%'}>
        <Suspense fallback={<div>loading...</div>}>
          {slides.map((slide: SlideModel, index: number) => {
            return <Slide
              key={slide.id}
              layout={slide.layout.default}
              active={activeSlideIndex === index}
              html={slide.html}
            />
          })}
        </Suspense>
      </Flex>
    </>
  );
}
