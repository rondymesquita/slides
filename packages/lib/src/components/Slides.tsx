import { Flex } from '@chakra-ui/react';
import React, { Suspense, useEffect, useState } from 'react';
// import * as classic from '../themes/classic/layouts';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { Slide } from '..';
import { Markdown } from '../domain/model/Markdown';
import { Page } from '../domain/model/Page';
import { merge } from '../util/merge-object';
import SlideNavigator from './SlideNavigator';

export interface SlidesProps {
  slides: Markdown;
  theme: string;
}

export default function Slides({ slides, theme, }: SlidesProps) {
  const [slideRoutes, setSlideRoutes,] = useState<React.JSX.Element[]>([]);
  const [isLoaded, setLoaded,] = useState(false);
  console.log({ slides, })
  const pages: Array<Page> = slides.pages;



  const load = async() => {
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
    setSlideRoutes(RouteComponents);
    setLoaded(true);
  };

  useEffect(() => {
    load();

    return () => {};
  }, []);

  return (
    <>
      <Flex className='slides' width={'100%'} height={'100%'}>
        <Suspense fallback={<div>loading...</div>}>
          <HashRouter>
            {isLoaded && (
              <>
                <SlideNavigator size={slideRoutes.length} />
                <Routes>{slideRoutes}</Routes>
              </>
            )}
          </HashRouter>
        </Suspense>
      </Flex>
    </>
  );
}
