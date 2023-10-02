import React, { lazy, useEffect, useState } from 'react';
import { PresentationProps } from './Presentation';
import { Slide } from '..';
import { useThemeContext } from '../contexts/ThemeContext';
import { usePresentationContext } from '../contexts/PresentationContext';
import { Controller } from '../controllers/controller';
import { KeyboardController } from '../controllers/keyboard-controller';
import { getAttributes } from '../util/get-slide-atributes';
import { Attributes } from '../domain/model/Attributes';

export interface SlidesProps {
  slides: any;
  theme: string;
}

interface SlideModel {
  Layout: React.JSX.Element;
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
        `../themes/${theme}/${attributes.slideLayout}.tsx`
      );

      return {
        Layout: LayoutComponent.default,
        html: slideHtml,
        attributes,
      };
    });

    const result = await Promise.all(promises);
    console.log({ slides: result });
    setSlides(result);
  };
  // load();

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
      <div className='slides'>
        {slides.map(({ html, Layout }: SlideModel, index: number) => {
          return (
            <Slide
              key={index}
              html={html}
              Layout={Layout}
              theme={theme}
              active={activeIndex === index}
            />
          );
        })}
      </div>
    </>
  );
}
