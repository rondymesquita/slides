import React, { useEffect, useState, Suspense } from 'react';
import { Flex, Slide } from '..';
import { getAttributes } from '../util/get-slide-atributes';
import { Attributes } from '../domain/model/Attributes';
// import * as classic from '../themes/classic/layouts';
import { HashRouter, Routes, Route } from 'react-router-dom';
import SlideNavigator from './SlideNavigator';

export interface SlidesProps {
  slides: any;
  theme: string;
}

export default function Slides({ slides, theme }: SlidesProps) {
  const [slideRoutes, setSlideRoutes] = useState<React.JSX.Element[]>([]);
  const [isLoaded, setLoaded] = useState(false);

  // const htmls: Array<string> = slides.html.split('<hr>');
  const pages: Array<string> = slides.pages;

  const load = async () => {
    const promises = pages.map(
      async ({ html, attributes }: any, index: number) => {
        console.log({ html, attributes });
        // const attributes = getAttributes(html);

        const LayoutComponent = await import(
          `../themes/${theme}/layouts/${attributes.slideLayout}.tsx`
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
      }
    );

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
            <SlideNavigator size={htmls.length} />
            {isLoaded && <Routes>{slideRoutes}</Routes>}
          </HashRouter>
        </Suspense>
      </Flex>
    </>
  );
}
