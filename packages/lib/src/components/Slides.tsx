import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

import { Slide } from '..';
import { useSplendidContext } from '../contexts/SplendidContext';
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
    slides,
    transition,
  } = slidesViewModel(markdown, theme, onLoad)
  const { animationDuration, } = useSplendidContext();

  return (
    <>
      <Flex className='slides' width={'100%'} height={'100%'} position={'relative'}>
        {slides.map((slide: SlideModel, index: number) => {
          return (
            <motion.div key={slide.id} style={{
              height: '100%',
              width: '100%',
              position: 'absolute',
              opacity: activeSlideIndex === index ? 1 : 0,
            }}
            initial={index === activeSlideIndex ? {
              translate: '980px',
              opacity: 1,
            } : index > activeSlideIndex ? {
              translate: '980px',
              opacity: 0,
            } : {
              translate: '-980px',
              opacity: 0,
            }}
            animate={index === activeSlideIndex ? {
              translate: '0',
              opacity:1,
            } : index > activeSlideIndex ? {
              translate: '980px',
              opacity: 0,
            } : {
              translate: '-980px',
              opacity: 0,
            }}
            // exit={transition.exit}
            transition={{ duration: animationDuration, }}
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
