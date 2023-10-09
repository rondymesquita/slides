import { useEffect, useState } from 'react';

import { Markdown } from '..';
import { useKeyboardController } from '../controllers/keyboard-controller';
import { useMouseController } from '../controllers/mouse-controller';
import { SlideModel } from '../domain/model/SlideModel';
import { merge } from '../util/merge-object';

export const useSlideNavigator = (slidesCount: number, initialIndex: number) => {
  // const slideIndex = useRef(0);
  const [activeSlideIndex, setActiveSlideIndex,] = useState<number>(initialIndex)

  useEffect(() =>{
    // console.log({ activeSlideIndex, })
  }, [activeSlideIndex,])

  const onNext = () => {
    setActiveSlideIndex((index) => {
      const newIndex = index < slidesCount - 1 ? index + 1 : index;
      console.log(newIndex)
      return newIndex
    });
  }

  const onPrev = () => {
    setActiveSlideIndex((index) => {
      const newIndex = index > 0 ? index - 1 : index;
      console.log(newIndex)
      return newIndex
    });
  }
  useKeyboardController({
    onNext,
    onPrev,
  });

  useMouseController({ onNext, });

  return { activeSlideIndex, }
}



export default function slidesViewModel(markdown: Markdown, theme: string, onLoad: () => void) {

  const [slides, setSlides,] = useState<SlideModel[]>([]);
  const [isLoaded, setLoaded,] = useState(false);
  const { activeSlideIndex, } = useSlideNavigator(markdown.pages.length, 0)

  const loadLayoutTemplates = async() => {
    const promises = markdown.pages.map(async({
      attributes,
      html,
      id,
    }, index: number) => {
      const attrs = merge(attributes, { layout: 'Section', });

      if (index === 0) {
        attrs.layout = 'Cover'
      }

      const LayoutComponent = await import(
        `../themes/${theme}/layouts/${attrs.layout}.tsx`
      );

      // return LayoutComponent;d
      return {
        attributes: attrs,
        html,
        id,
        layout: LayoutComponent,
      }
    });

    const s = await Promise.all(promises);
    setSlides(s)
    setLoaded(true);
  };

  useEffect(() => {
    loadLayoutTemplates();

    return () => {};
  }, []);

  useEffect(() => {
    if (isLoaded) {
      onLoad()
    }
  }, [isLoaded,])

  return {
    slides,
    isLoaded,
    activeSlideIndex,
  };
}
