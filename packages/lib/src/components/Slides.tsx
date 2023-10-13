import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

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

  // const onSlidesLoad = () => {
  // onLoad()
  // }

  const { isLoaded, slides, } = useSlides(markdown, theme)
  const { activeIndex, } = useNavigation(markdown.pages.length, 0)
  const { getTransition, } = useSlideTransition(transitionName, presentationSize)

  const [isAnimationCompleted, setAnimationCompleted,] = useState(false)

  useEffect(() => {
    if (isAnimationCompleted && isLoaded) {
      onLoad()
    }
  }, [isAnimationCompleted, isLoaded,])

  return (
    <>
      <Flex className='slides' width={'100%'} height={'100%'} position={'relative'}>
        {slides.map((slide: SlideModel, index: number) => {
          return (
            <motion.div key={slide.id} style={{
              height: '100%',
              width: '100%',
              position: 'absolute',
              translate: 0, // avoid warning message
            }}
            onAnimationComplete={() => setAnimationCompleted(true)}
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
      </Flex>
    </>
  );
}
