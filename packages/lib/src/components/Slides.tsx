import React, { lazy, useEffect, useState, Suspense } from 'react';
import { PresentationProps } from './Presentation';
import { Slide } from '..';
import { KeyboardController } from '../controllers/keyboard-controller';
import { getAttributes } from '../util/get-slide-atributes';
import { Attributes } from '../domain/model/Attributes';
import * as classic from '../themes/classic/layouts';

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
        `../themes/${theme}/layouts/${attributes.slideLayout}.tsx`
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

  // let GlobalThemeComponent = lazy(
  //   () => import(`../themes/${theme}/Global.tsx`)
  // );

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
        {/* <Suspense fallback={<></>}>
          <GlobalThemeComponent />
        </Suspense> */}
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
