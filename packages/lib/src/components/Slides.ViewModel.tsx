import { JSX, useEffect, useState } from 'react';
import { Route } from 'react-router';

import { Markdown, Page, Slide } from '..';
import { merge } from '../util/merge-object';

export default function slidesViewModel(markdown: Markdown, theme: string, onLoad: () => void) {

  const [slides, setSlides,] = useState<JSX.Element[]>([]);
  const [isLoaded, setLoaded,] = useState(false);
  const pages: Array<Page> = markdown.pages;

  const loadSlides = async() => {
    const promises = pages.map(async({ attributes, html, }, index: number) => {
      const attrs = merge(attributes, { layout: 'Section', });

      const LayoutComponent = await import(
        `../themes/${theme}/layouts/${attrs.layout}.tsx`
      );

      const SlideComponent = () => (
        <Slide
          key={index}
          layout={LayoutComponent.default}
          active={true}
          html={html}
        />
      );
      const RouteComponent = (
        <Route
          key={index}
          path={`/${index}`}
          element={<SlideComponent />}
        ></Route>
      );

      return RouteComponent;
    });

    const RouteComponents = await Promise.all(promises);
    setSlides(RouteComponents);
    setLoaded(true);
  };

  useEffect(() => {
    loadSlides();

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
