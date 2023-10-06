import React, { lazy, useEffect, useState, Suspense } from 'react';
import { PresentationProps } from './Presentation';
import { Flex, Slide } from '..';
import { KeyboardController } from '../controllers/keyboard-controller';
import { getAttributes } from '../util/get-slide-atributes';
import { Attributes } from '../domain/model/Attributes';
import * as classic from '../themes/classic/layouts';

export interface SlidesProps {
  slides: any;
  theme: string;
}

interface SlideModel {
  layout: React.JSX.Element;
  html: string;
  attributes: Attributes;
}

export default function Slides({ slides: slidesInput, theme }: SlidesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slides, setSlides] = useState<Array<SlideModel>>([]);

  const slidesHtml: Array<string> = slidesInput.html.split('<hr>');

  const load = async () => {
    const promises = slidesHtml.map(async (slideHtml: string) => {
      const attributes = getAttributes(slideHtml);

      const LayoutComponent = await import(
        `../themes/${theme}/layouts/${attributes.slideLayout}.tsx`
      );

      return {
        layout: LayoutComponent.default,
        html: slideHtml,
        attributes,
      };
    });

    const result = await Promise.all(promises);
    console.log({ slides: result });
    setSlides(result);
  };

  useEffect(() => {
    load();
  }, []);

  new KeyboardController({
    onNext: () => {
      setActiveIndex((index) =>
        index < slides.length - 1 ? index + 1 : index
      );
    },
    onPrev: () => {
      setActiveIndex((index) => (index > 0 ? index - 1 : index));
    },
  });

  return (
    <>
      <Flex className='slides' width={'100%'} height={'100%'}>
        {slides.map(({ html, layout }: SlideModel, index: number) => {
          return (
            <Slide
              key={index}
              html={html}
              layout={layout}
              theme={theme}
              active={activeIndex === index}
            />
          );
        })}
      </Flex>
    </>
  );
}
