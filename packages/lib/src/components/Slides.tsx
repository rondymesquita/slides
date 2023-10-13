import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { Suspense } from 'react';

import { Slide } from '..';
import { useSplendidContext } from '../contexts/SplendidContext';
import { Markdown } from '../domain/model/Markdown';
import { SlideModel } from '../domain/model/SlideModel';
import { useNavigation } from '../hooks/useSlideNavigation/useNavigation';
import { useSlideTransition } from '../hooks/useSlideNavigation/useSlideTransition';
import useSlides from './useSlides';

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
    presentationSize,
    transitionDuration,
    transitionName,
  } = useSplendidContext();

  const { slides, } = useSlides(markdown, theme, onLoad)
  const { activeIndex, } = useNavigation(markdown.pages.length, 0)
  const { getTransition, } = useSlideTransition(transitionName, presentationSize)

  return (
    <>
      <Flex className='slides' width={'100%'} height={'100%'} position={'relative'}>
        <Suspense fallback={<>loading...</>}>
          {slides.map((slide: SlideModel, index: number) => {
            return (
              <motion.div key={slide.id} style={{
                height: '100%',
                width: '100%',
                position: 'absolute',
                translate: 0, // avoid warning message
              }}
              animate={getTransition(index, activeIndex)}
              transition={{ duration: transitionDuration, }}
              >

                <Slide
                  key={slide.id}
                  layout={slide.layout.default}
                  active={true}
                  html={slide.html}
                />
              </motion.div>
            )
          })}
        </Suspense>
      </Flex>
    </>
  );
}
