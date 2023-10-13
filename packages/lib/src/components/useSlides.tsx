import { useEffect, useState } from 'react';

import { Markdown } from '..';
import { SlideModel } from '../domain/model/SlideModel';
import { merge } from '../util/merge-object';

export default function useSlides(markdown: Markdown, theme: string, onLoad: () => void) {

  const [slides, setSlides,] = useState<SlideModel[]>([]);
  const [isLoaded, setLoaded,] = useState(false);

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
  };
}
